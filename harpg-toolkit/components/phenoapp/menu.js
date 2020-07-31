import styles from './menu.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function Menu({menuitems}) {
    console.log(menuitems)
    return (
        <ul className={styles.container}> { menuitems.map((item) => (
            <li key={uuidv4()} className={styles.menuitem}>
                <input 
                    type='checkbox' 
                    value={item.value}
                    onChange={e => setFirstName(e.target.value)}/>
                <label for={item.value}>{item.text}</label>
            </li>
            ))} 
        </ul>
    )
}

/*
import React from 'react';
import useSwr from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json())
export default function Menu({ id }) {
    const { data, error } = useSwr(`/api/phenoapp/menu?id=${id}`, fetcher)

    if (error) return <p>Error loading the menu.</p>
    if (!data) return <p>Loading...</p>
    if (data.menuitem === []) return <div></div>

    return (
        <ul className={styles.container}> { data.menuitem.map((item) => (
            <li key={uuidv4()} className={styles.menuitem}>
                <input 
                    type='checkbox' 
                    value={item.value}
                    onChange={e => setFirstName(e.target.value)}/>
                <label for={item.value}>{item.text}</label>
            </li>
            ))} 
        </ul>
    )
}
*/

