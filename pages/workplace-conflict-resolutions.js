import Head from 'next/head'
import WorkplaceConflictResolutions from '../component/pages/WorkplaceConflictResolutions'
import styles from '../styles/Home.module.css'

export default function WorkplaceConflictResolutionsPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WorkplaceConflictResolutions/>
    </div>
  )
}