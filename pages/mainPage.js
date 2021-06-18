import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'

export default function main() {
  return (
    
    <div className="bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 place-self-center" >
      <Head>
        <title>Nextjs-Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
    </div>
  )
}