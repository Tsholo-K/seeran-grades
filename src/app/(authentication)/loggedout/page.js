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
      {/* navigation bar */}
      <div className="fixed flex justify-center w-full pt-3">
        <div className="flex w-full px-4 mx-auto max-w-[1700px]">
          <div className="w-full">
            <p className="font-bold">seeran</p>
          </div>
          <div className="w-full text-end">
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto pt-40">
        <Image src={'/loggedout.svg'} alt="hero image" width={0} height={0} className="h-fit w-fit max-w-[250px] mx-auto  max-sm:max-h-[350px]"/>
      </div>
      <p className="w-[90%] text-center mx-auto pt-4 font-bold">You have been logged out, <Link href={'/login'} className="text-blue-700" >login</Link>.</p>
    </>
  )
};

export default MultiFactorAuthentication;