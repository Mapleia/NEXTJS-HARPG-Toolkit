import useSwr from 'swr'
import styles from './button.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Button({ id }) {
    const { data, error } = useSwr(`/api/phenoapp/menu?id=${id}`, fetcher)
    if (error) return <div>Failed to load title.</div>
    if (!data) return <div>Loading...</div>

    return (
        <div className={styles.button}>{data.button}</div>
    )
}