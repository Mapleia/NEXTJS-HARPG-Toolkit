import useSwr from 'swr'
import styles from './display.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Display({ id }) {
    const { data, error } = useSwr(`/api/phenoapp/colour?id=${id}`, fetcher)

    if (error) return <p>Error loading the images.</p>
    if (!data) return <p>Loading...</p>

    return (
        <div className={styles.maincontainer}>
                    <img className={styles.greyscale} src='/base/GREYSCALE.png'/>
                    <img className={styles.underlay} src={data.img} />
                    <img className={styles.underlay} src={data.hair} />
                    <img className={styles.underlay} src={data.hoof} />
                    <img className={styles.underlay} src={data.skin} />
                    <img className={styles.underlay} src={data.eye} />
                    <img className={styles.lineart} src='/base/LINEART.png'/>
        </div>
    )
}