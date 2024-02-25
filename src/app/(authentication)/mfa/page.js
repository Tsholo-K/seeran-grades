'use client'

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

{/* components */}
import Button from "@/components/button";
import Input from "@/components/input";


const Signin = () => {

  const router = useRouter()

  const authenticate = (event) => {
      event.preventDefault()
      router.push('/parentdashboard',)
  }
    
  return (
    <>
      <div className="h-screen relative">
        <div className="w-full h-[60%] max-w-screen-xl mx-auto grid grid-cols-1 place-content-center">
          <p className="w-full text-center text-sm md:text-base">we sent a one time <span className="text-[#66b0f0]">passcode </span><br className="md:hidden"></br>to your corresponding number/email</p>
          <form className="mx-auto w-[80%] lg:w-[60%]" onSubmit={authenticate}>
            <div className="my-4">
              <Input type={'text'} placeholder={'OTP'} />
            </div>
            <Button title={'authenticate'} type={'submit'}/>
            <p className="text-sm md:text-base w-full text-center pt-3 text-gray-400">Didn&apos;t recieve the code? <Link href={'/signin'} className=" text-black">resend</Link></p>
          </form>
        </div>
        <Image priority src={'/mfa.svg'} alt="hero image" width={1000} height={1000} className="h-[50%] sm:h-[60%] w-full sm:w-fit absolute bottom-0 right-1"/>
      </div>
    </>
  )
};

export default Signin;