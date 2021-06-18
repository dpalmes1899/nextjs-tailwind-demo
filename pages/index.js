import Head from 'next/head'
import Image from 'next/image'
import Signup from '../components/Signup'

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400">
      <Head>
        <title>Nextjs-Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signup/>
    </div>
  )
}
