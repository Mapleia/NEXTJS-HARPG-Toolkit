// import styles from './layout.module.css'
import useSwr from 'swr'
import styles from '../../components/phenoapp/horsecontainer.module.css'
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Display({ id }) {
    const { data, error } = useSwr(`/api/phenoapp/colour?id=${id}`, fetcher)

    if (error) return <p>Error loading the images.</p>
    if (!data) return <p>Loading...</p>

    return (
        <div className={styles.maincontainer}>
                    <img className={styles.greyscale} src='/base/GREYSCALE.png'/>
                    <div className={styles.underlay}>
                            <img src={data.img} />
                            <img src={data.hair} />
                            <img src={data.hoof} />
                            <img src={data.skin} />
                            <img src={data.eye} />
                    </div>
                    <img className={styles.lineart} src='/base/LINEART.png'/>
        </div>
    )
}