import styles from './sidenavbar.module.css'

export default function Sidenavbar({ children }) {
    return (
        <div> 
            <ul className={styles.sideBar}>
                { children }
            </ul>
        </div>
    )
}