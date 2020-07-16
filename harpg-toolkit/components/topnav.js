import styles from './topnav.module.css'
import Link from 'next/link'

export default function Topnav() {
    return (
        <nav className={styles.navcontainer}>
                <Link href="/"><a><img className={styles.main_logo} src="/logo.png"/></a></Link>
                <Link href="/"><a className={styles.home_link}>HARPG Toolkit</a></Link>
            <ul className={styles.topnav}>
                <li><Link href="/"><a>HOME</a></Link></li>
                <li><Link href="/posts/intro"><a>INTRO</a></Link></li>
                <li><Link href="/posts/tools"><a>HARPG TOOLS</a></Link></li>
                <li><Link href="/posts/contact"><a>CONTACT</a></Link></li>
            </ul>
        </nav>
    )
}