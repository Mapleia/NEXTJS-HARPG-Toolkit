import styles from './topnav.module.css'
import Link from 'next/link'

export default function Topnav() {
    return (
        <nav className={styles.navContainer}>
                <Link href="/"><img className={styles.mainLogo} src="/logo.png"/></Link>
                <Link href="/"><a className={styles.homeLink}>HARPG Toolkit</a></Link>
            <ul className={styles.topNav}>
                <li><Link href="/"><a>HOME</a></Link></li>
                <li><Link href="/posts/intro"><a>INTRO</a></Link></li>
                <li><Link href="/posts/tools"><a>HARPG TOOLS</a></Link></li>
                <li><Link href="/posts/contact"><a>CONTACT</a></Link></li>
            </ul>
        </nav>
    )
}