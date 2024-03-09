import dynamic from 'next/dynamic';
import Head from 'next/head';
import { db } from '../firebase';
import styles from '../styles/Home.module.css';

// Homeコンポーネントを動的にインポートし、サーバーサイドではスキップします
const DynamicHome = dynamic(() => import('../components/Home'), { ssr: false });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>らべねこのひとこと日記帳</title>
        <meta name="description" content="らべねこのひとこと日記帳です" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>らべねこのひとこと日記帳へようこそ！</h1>

        {/* クライアントサイドでのみレンダリングされるコンポーネント */}
        <DynamicHome />
      </main>
    </div>
  );
}
