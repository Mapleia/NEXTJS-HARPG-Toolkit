import styles from "./layout.module.css"
import Topnav from './topnav'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
          <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#ffc40d" />
            <meta name="theme-color" content="#ffffff" />
          </Head>
          <Topnav></Topnav>
          {children}
          <footer className={styles.footer}>
            Made by Mapleia on Github. 
          </footer>
  </div>)
}
