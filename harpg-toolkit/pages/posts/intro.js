import Head from 'next/head'
import Layout from '../../components/layout'
import Sidenavbar from '../../components/sidenavbar'
import { useRouter }  from 'next/router'
import styles from '../styles/sidenavlayout.css'

export default function intro() {
    const router = useRouter();

    return (
        <Layout>
            <Head>
                <title>Intro to HARPG Toolkit</title>
            </Head>

            <div className={styles.navcontainer}> 
                <Sidenavbar>
                    <li><Link href={router.pathname}><a>TAB1</a></Link></li>
                    <li><Link href={router.pathname}><a>TAB2</a></Link></li>
                </Sidenavbar>

                <div className={styles.activetab}>
                    { children }
                </div>
            </div>
                
        </Layout>
    )
  }