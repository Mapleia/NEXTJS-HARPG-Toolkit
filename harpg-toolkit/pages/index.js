import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>HARPG Toolkit</title>
      </Head>

      <main className={utilStyles.body}>
        <section className={utilStyles.card}>
          <h1 className={utilStyles.landingWelcome}>Welcome!</h1>
          <h3 className={utilStyles.welcomeCard}>This is a free to use HARPG Toolkit, a website with a collection of free
            to use tools for the community on DeviantArt.</h3>
        </section>        
      </main>
    </Layout>
  )
}
