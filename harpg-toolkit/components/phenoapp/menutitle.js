// import styles from './layout.module.css'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Menutitle({ id }) {
    const { data, error } = useSwr(`/api/phenoapp/menu?id=${id}`, fetcher)

    if (error) return <div>Failed to load title.</div>
    if (!data) return <div>Loading...</div>

    return (
        <h1>{data.title}</h1>
    )

}