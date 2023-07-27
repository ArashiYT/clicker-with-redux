import { ClickerControls, ClickerScore } from "@/components/clicker"
import styles from '@/styles/main.module.css'
import { Poppins } from 'next/font/google'
import Head from 'next/head'

const inter = Poppins({
  weight: ['400', '700'],
  style: ["normal"],
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Clicker with Redux | ArashiYT</title>
        <meta name="description" content="Easy clicker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.border}>
          <ClickerScore />
          <ClickerControls />
        </div>
      </main>
    </>
  )
}
