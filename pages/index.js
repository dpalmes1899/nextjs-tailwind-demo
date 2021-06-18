import Head from 'next/head'
import Image from 'next/image'
import Signup from '../components/Signup'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signup/>
    </div>
  )
}
