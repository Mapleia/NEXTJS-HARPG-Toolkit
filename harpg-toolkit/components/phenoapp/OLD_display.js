import useSwr from 'swr';
import styles from './display.module.css';
import React from 'react';


export default function Display({ selectedbase, genes, children }) {
    var genestext = '';
    genes.forEach(g => genestext = genestext + g + ',');
    var link = `http://localhost:3000/api/phenoapp/colour?base=${selectedbase}&gene=`+ genestext;
    console.log('Colour API link: ' + link)
    
    var { data, error } = useSwr(link, fetch);

    if (error) return <div><p>Failed to load display.</p></div>
    if (!data) return <div><p>Loading...</p></div>
    return (

        <div className={styles.maincontainer}>
            <img className={styles.greyscale} src='/base/GREYSCALE.png'/>
            <img className={styles.underlay} src={data.img} />
            <img className={styles.underlay} src={data.hair} />
            { children }
            <img className={styles.underlay} src={data.hoof} />
            <img className={styles.underlay} src={data.skin} />
            <img className={styles.underlay} src={data.eye} />
            <img className={styles.lineart} src='/base/LINEART.png'/>
            </div>
    )
}


/*
    const [Colour, setColour] = useState('/base/blank.png');
    const [Hoof, setHoof] = useState('/base/blank.png');
    const [Hair, setHair] = useState('/base/blank.png');
    const [Skin, setSkin] = useState('/base/blank.png');
    const [Eye, setEye] = useState('/base/blank.png');
    const [Error, setError] = useState(undefined);

*/