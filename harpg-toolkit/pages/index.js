import Head from 'next/head'
import styles from '../styles/home.module.css'
import Basic from '../components/layouts/basic'

export default function Home() {
  return (
    <Basic>
      <Head>
        <title>HARPG Toolkit</title>
      </Head>

      <main className={styles.body}>
        <section className={styles.card}>
          <h1 className={styles.landingWelcome}>Welcome!</h1>
          <h3 className={styles.welcomeCard}>This is a free to use HARPG Toolkit, a website with a collection of free
            to use tools for the community on DeviantArt.</h3>
        </section>        
      </main>
    </Basic>
  )
}
