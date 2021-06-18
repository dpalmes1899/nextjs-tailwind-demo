import React from 'react'
import Link from 'next/link'

export default function Main() {

    const SignOutButton = React.forwardRef(({ onClick, href }, ref) => {
        return (
          <a href={href} onClick={onClick} ref={ref} className="mt-8 min-w-full text-center bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">
            Go Again
          </a>
        )
      })

    return(
        <body>
            <header className="max-w-lg mx-auto">
                <a href="#">
                <h1 className="text-4xl font-bold text-white text-center tracking-widest pt-5 filter drop-shadow-xl contrast-200 transition transform hover:-translate-y-1 ">What's Up!</h1>
                </a>
            </header>
            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl  ">
                <section className="m-20">
                    <h3 className="font-bold text-4xl text-center py-2 tracking-widest ">Have a Nice Day!
                        <h4 className="font-bold text-2xl text-center">
                        <Link  href="/">
                            <SignOutButton />
                        </Link>
                        </h4>     
                    </h3>
                    
                </section>
            </main>


            <footer class="max-w-lg mx-auto flex justify-center text-white">
                <a href="#" class="hover:underline">Contact</a>
                <span class="mx-3">•</span>
                <a href="#" class="hover:underline">Privacy</a>
             </footer>
        </body>

       
    )
}