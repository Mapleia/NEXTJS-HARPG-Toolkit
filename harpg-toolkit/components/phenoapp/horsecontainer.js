import styles from './horsecontainer.module.css'
// import mergeImages from 'merge-images'
// import {Canvas, Image} from 'Canvas'
import Colours from './horsecolours'

export default function Horsecontainer() {
    return (
        <div className={styles.maincontainer}>
            <img className={styles.greyscale} src='/base/GREYSCALE.png'/>
            <Colours id={'chestnut'}/>
            <Colours id={'chestnuthair'}/>
            <img className={styles.lineart} src='/base/LINEART.png'/>
        </div>
    )
}