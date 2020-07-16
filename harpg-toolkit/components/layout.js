import styles from "./layout.module.css";
import Topnav from './topnav';
import Head from 'next/head';

export default function Layout({ children }) {
  return <div className={styles.container}>
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Topnav></Topnav>
      {children}
      <footer classname={styles.footer}>
        Made by Mapleia on Github. 
      </footer>
      </div>;
}
