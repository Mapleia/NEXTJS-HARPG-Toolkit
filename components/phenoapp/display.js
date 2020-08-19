import styles from './display.module.css';
import React from 'react';
import useSWR from 'swr';

//import { render } from 'react-dom';

export default function Display({ base, genes, minormarking }) {
    
    var genestext = null;
    if(genes.length > 0) {
        genestext = genes.toString();
    }

    let link = `/api/phenoapp/colour?base=${base}&gene=`+ genestext
    const { data, error } = useSWR(link, fetch)

    if (error) {
        console.error(error);
        return <div>failed to load</div>
    }
    if (!data) return <div>loading...</div>

    return ( 
        <div className={styles.maincontainer}>
        <img className={styles.greyscale} src='/base/GREYSCALE.png'/>
        <img className={styles.underlay} src={data.img} />
        <img className={styles.underlay} src={data.hair} />
        { 
            minormarking.map((item) => (
                <img 
                    className={styles.underlay} 
                    key={item} src={'/white_marking/' + item + '.png'}/>
            ))
        }
        <img className={styles.underlay} src={data.hoof} />
        <img className={styles.underlay} src={data.skin} />
        <img className={styles.underlay} src={data.eye} />
        <img className={styles.lineart} src='/base/LINEART.png'/>
        </div>
    )
}
