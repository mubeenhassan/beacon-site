import Head from 'next/head'
import BusinessPlan from '../component/pages/businessPlan'
import styles from '../styles/Home.module.css'

export default function Business() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BusinessPlan/>
    </div>
  )
}