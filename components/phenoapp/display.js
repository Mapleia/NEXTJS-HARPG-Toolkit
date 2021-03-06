import styles from './display.module.css';
import React from 'react';
import useSWR from 'swr';

export default function Display({ base, genes, topgenes, minormarking }) {

    const fetcher = (...args) => fetch(...args).then(res => res.json())

    const link = `/api/phenoapp/colour?base=${base}&gene=${genes}`
    console.log(link)
    const { data, error } = useSWR(link, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return ( 
        <div className={styles.maincontainer}>
        <img className={styles.greyscale} src='/base/GREYSCALE.png'/>
        <img className={styles.underlay} src={data.img} />
        <img className={styles.underlay} src={data.hair} />
        <img className={styles.underlay} src={data.hoof} />
        { 
            minormarking.map((item) => (
                <img 
                    className={styles.underlay} 
                    key={item} src={'/white_marking/' + item + '.png'}/>
            ))
        }
        { 
            topgenes.map((item) => (
                <img 
                    className={styles.underlay} 
                    key={item} src={'/colours/' + item + '.png'}/>
            ))
        }
        <img className={styles.underlay} src={data.skin} />
        <img className={styles.underlay} src={data.eye} />
        <img className={styles.lineart} src='/base/LINEART.png'/>
        </div>
    )
}
