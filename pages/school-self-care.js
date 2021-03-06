import Head from 'next/head'
import SchoolSelfCare from '../component/pages/SchoolSelfCare'
import styles from '../styles/Home.module.css'

export default function SchoolSelfCarePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SchoolSelfCare/>
    </div>
  )
}
