import styles from './sidenavlayout.module.css'
import Sidenavbar from './sidenavbar'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Sidenavlayout( { children } ) {
    const router = useRouter();
    return (
        <div className={styles.navcontainer}> 
            <Sidenavbar>
                <li><Link href={router.pathname}><a>TAB1</a></Link></li>
                <li><Link href={router.pathname}><a>TAB2</a></Link></li>
            </Sidenavbar>

            <div className={styles.activetab}>
                { children }
            </div>
        </div>
        
    )
}
