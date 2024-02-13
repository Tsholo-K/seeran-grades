'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {

  const router = useRouter()

  const authenticate = (event) => {
      event.preventDefault()
      router.push('/multifactorauthentication',)
  }

  return (
    <>
      {/* navigation bar */}
      <div className="fixed flex justify-center w-full pt-3 bg-white">
        <div className="flex w-full px-4 mx-auto max-w-[1700px]">
          <div className="w-full">
            <Link href={"/"} className="md:block hidden">seeran <span className="text-blue-700">grades</span></Link>
            <Link href={'/'} className="md:hidden"><Image src={'/favicon.svg'} alt="hero image" width={0} height={0} className="h-[35px] w-[35px]"/></Link>
          </div>
          <div className="w-full text-end">
            <Link href={'/parentsignin'} className="text-gray-400 hover:text-blue-700 transition-all duration-500 ease-in-out">sign in</Link>
          </div>
        </div>
      </div>
      {/* form */}
      <div className="min-h-screen w-full grid grid-cols-1 place-content-center px-4 max-w-4xl mx-auto">
        <form onSubmit={authenticate}>
          <div className="mx-auto w-full ">
            <Image src={'/login.svg'} alt="login page hero image" width={350} height={350} className="mx-auto w-fit h-fit max-sm:max-h-[350px]"/>
            <p className="text-gray-400 text-2xl w-full text-center"><span className="text-blue-700">welcome </span>back</p>
            <div className="my-4">
              <input type="text" placeholder="email / phone number" className="border rounded-md px-5 py-1 w-full"/>
            </div>
            <div className="my-4">
              <input type="text" placeholder="password" className="border rounded-md px-5 py-1 w-full"/>
            </div>
            <button type="submit" className="w-full border border-white rounded-xl bg-black active:bg-blue-700 text-white lg:hover:bg-blue-700 focus:bg-blue-700 lg:hover:scale-[1.01] transition-all duration-500 py-1">login</button>
          </div> 
        </form>
         
      </div>
    </>
  )
};

export default LoginPage;