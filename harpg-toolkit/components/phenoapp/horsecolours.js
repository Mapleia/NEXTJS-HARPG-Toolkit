// import styles from './layout.module.css'
import useSwr from 'swr'
import styles from '../../components/phenoapp/horsecontainer.module.css'
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Colours({ id }) {
    const { data, error } = useSwr(`/api/phenoapp/colour?id=${id}`, fetcher)

    if (error) return <img src="//:0"/>
    if (!data) return <img src="//:0" alt="Loading..."/>

    console.log(data.url);
    return (
        <img className={styles.underlay} src={data.img}/>
    )
}