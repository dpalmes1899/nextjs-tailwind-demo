import Head from 'next/head'
import Image from 'next/image'
import Signin from '../components/Signin'

export default function signin() {
  return (
    
    <div className="bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400" >
      <Head>
        <title>Nextjs-Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signin/>
    </div>
  )
}