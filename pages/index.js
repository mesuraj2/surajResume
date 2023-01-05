import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Suraj kumar</title>
        <meta name="description" content="Suraj's resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.main_div}>
          <div className={styles.left_div}>
            profile
          </div>
          <div className={styles.right_div}>
            <h1 className={styles.heading}>Suraj kumar</h1>
          </div>
        </div>
      </main>
    </>
  )
}
