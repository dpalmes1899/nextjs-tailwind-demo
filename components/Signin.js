import React from 'react'
import Link from 'next/link'

export default function Signin() {

    const SignInButton = React.forwardRef(({ onClick, href }, ref) => {
        return (
          <a href={href} onClick={onClick} ref={ref} className="text-center bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">
            Sign in
          </a>
        )
      })

    const SignUpButton = React.forwardRef(({ onClick, href }, ref) => {
        return (
          <a href={href} onClick={onClick} ref={ref} className="text-right text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6" type="submit">
            Forgot Password?
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
            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 className="font-bold text-2xl">Welcome to What's Up</h3>
                    <p className="text-gray-600 pt-2">Sign in to your account.</p>
                </section>

                <section>
                    <form className="flex flex-col" method="POST" action="#">
                        <div className = "mb-6 pt-3 rounded bg-gray-200">
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
                            <input type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"></input>
                        </div>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                            <input type="password" id="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"></input>
                        </div>
                        <Link  href="/">
                            <SignUpButton />
                        </Link>
                        <Link  href="/mainPage">
                            <SignInButton />
                        </Link>
                    </form>
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