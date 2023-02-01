import Head from 'next/head';
import { SearchBar, Lists } from '@/components';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Gutenberg</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <SearchBar />
          <Lists />
        </div>
      </main>
    </>
  );
}
