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
      {/* form */}
      <div className="min-h-screen w-full grid grid-cols-1 place-content-center px-4 max-w-4xl mx-auto">
        <Image src={'/multifactorauthentication.svg'} alt="hero image" width={0} height={0} className="h-fit w-fit mx-auto  max-sm:max-h-[350px]"/>
        <p className="w-full text-center">we sent a one time <span className="text-blue-700">passcode </span>to your corresponding number/email</p>
        <form onSubmit={authenticate}>
          <div className="mx-auto w-full">
            <div className="my-4">
              <input type="text" placeholder="OTP" className="border rounded-md px-5 py-1 w-full"/>
            </div>
            <div className="flex w-fit gap-4 pb-2 pl-1 mx-auto">
              <div>
                  <p>keep me signed in..</p>
              </div>
              <div className="flex gap-4">
                  <input type="radio" id="no" className=""/>
                  <label form="no">no</label>
                  <input type="radio" id="yes" className=""/>
                  <label form="yes">yes</label>
              </div>
            </div>
            <button className="w-full border border-white rounded-xl bg-black focus:bg-blue-700 active:bg-blue-700 text-white lg:hover:bg-blue-700 lg:hover:scale-[1.01] transition-all duration-500 py-1">authenticate</button>
          </div> 
        </form>
      </div>
    </>
  )
};

export default MultiFactorAuthentication;