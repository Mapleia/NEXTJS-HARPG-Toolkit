import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>HARPG Toolkit</title>
      </Head>

      <main>
        <section className={}>
          <h1>Welcome!</h1>
          <h3>This is a free to use HARPG Toolkit, a website with a collection of free
            to use tools for the community on DeviantArt.</h3>
        </section>        
      </main>
    </Layout>
  )
}
