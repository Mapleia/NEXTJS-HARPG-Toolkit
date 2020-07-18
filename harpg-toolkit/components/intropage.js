import Head from 'next/head'
import Layout from './layout'
import Sidenavbar from './sidenavbar'
import styles from '../styles/sidenavlayout.module.css'
import Link from 'next/link'

export default function Intropage({ children }) {
    return (
        <Layout>
            <Head>
                <title>Intro to HARPG Toolkit</title>
            </Head>
            <div className={styles.navContainer}> 
                <Sidenavbar>
                    <li><Link href="/intro"><a>What is HARPG?</a></Link></li>
                    <li><Link href="/intro/tab2"><a>TAB2</a></Link></li>
                </Sidenavbar>
  
                <div className={styles.activeTab}>
                    { children }
                </div>
            </div>
                
        </Layout>
    )
}