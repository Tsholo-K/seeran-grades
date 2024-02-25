'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MultiFactorAuthentication = () => {

  const router = useRouter()

    const authenticate = (event) => {
        event.preventDefault()
        router.push('/parentdashboard',)
    }

  return (
    <>
      <div className="h-screen grid grid-cols-1 place-content-center">
        <div className="w-full">
          <Image src={'/loggedout.svg'} alt="hero image" width={0} height={0} className="h-full w-full max-w-[450px] mx-auto  max-sm:max-h-[350px]"/>
        </div>
        <h1 className="text-center pt-3 text-gray-400">You have been logged out, <Link href={'/login'} className="text-blue-700" >login</Link>.</h1>
      </div>
    </>
  )
};

export default MultiFactorAuthentication;