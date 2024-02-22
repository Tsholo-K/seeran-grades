'use client'

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Signin = () => {

    const router = useRouter()

    const authenticate = (event) => {
        event.preventDefault()
        router.push('/multifactorauthentication',)
    }
    
  return (
    <>
        <div className="h-screen">
            <div className="w-full h-[60%] max-w-screen-xl mx-auto grid grid-cols-1 place-content-center">
                <h1 className="text-center">login</h1>
                <form className="mx-auto w-[80%] lg:w-[60%]" onSubmit={authenticate}>
                    <div className="my-4">
                        <input type="text" placeholder="email/phone number" className="border rounded-md px-5 py-1 w-full"/>
                    </div>
                    <div className="my-4">
                        <input type="text" placeholder="password" className="border rounded-md px-5 py-1 w-full"/>
                    </div>
                    <button type="submit" className="w-full border focus:bg-blue-700 border-white rounded-xl bg-black active:bg-blue-700 text-white lg:hover:bg-blue-700 lg:hover:scale-[1.01] transition-all duration-500 py-1">login</button>
                    <p className="text-base w-full text-center pt-3 text-gray-400">Don&apos;t have an account? <Link href={'/signin'} className=" text-blue-700 ">signin</Link></p>
                </form>
            </div>
            <Image priority src={'/login.svg'} alt="hero image" width={1000} height={1000} className="sm:h-[70%] w-full sm:w-fit absolute bottom-1 right-1"/>
        </div>
    </>
  )
};

export default Signin;