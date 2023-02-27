import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import HeadLayout from "@/Layout/HeadLayout";

export default function Home() {
  return (
      <>
        <Head>
          <title>new app || main</title>
        </Head>
        <main className={styles.main}>
          hello
        </main>
      </>


  )
}
