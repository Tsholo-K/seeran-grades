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
        <div className="h-screen relative">
            <div className="w-full h-[60%] max-w-screen-xl mx-auto grid grid-cols-1 place-content-center">
                <h1 className="text-center">sign in</h1>
                <form className="mx-auto w-[80%] lg:w-[60%]" onSubmit={authenticate}>
                    <div className="my-4">
                        <input type="text" placeholder="email" className="border rounded-md px-5 py-1 w-full"/>
                    </div>
                    <div className="my-4">
                        <input type="text" placeholder="phone number" className="border rounded-md px-5 py-1 w-full"/>
                    </div>
                    <button type="submit" className="w-full border focus:bg-blue-700 border-white rounded-xl bg-black active:bg-blue-700 text-white lg:hover:bg-blue-700 lg:hover:scale-[1.01] transition-all duration-500 py-1">sign in</button>
                    <p className="text-base w-full text-center pt-3 text-gray-400">Already have an account? <Link href={'/login'} className=" text-[#66b0f0]">login</Link></p>
                </form>
            </div>
            <Image priority src={'/signin.svg'} alt="hero image" width={1000} height={1000} className="h-[50%] sm:h-[60%] w-full sm:w-fit absolute bottom-1 left-1"/>
        </div>
    </>
  )
};

export default Signin;