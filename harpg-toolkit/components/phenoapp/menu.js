import useSwr from 'swr';
// import styles from './menu.module.css';
import React from 'react';

const fetcher = (url) => fetch(url).then((res) => res.json())


export default function Menu({ id }) {
    const { data, error } = useSwr(`/api/phenoapp/menu?id=${id}`, fetcher)

    if (error) return <p>Error loading the menu.</p>
    if (!data) return <p>Loading...</p>
    if (data.menuitem === []) return <div></div>

    return (
        <ul> { data.menuitem.map((item) => (
            <li>
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

