'use client'

import Image from "next/image";

// components
import LoginForm from "@/components/(forms)/loginform";


const Signin = () => {
  return (
    <>
      <div className="h-screen relative">
        <div className="w-full h-[60%] max-w-screen-xl mx-auto grid grid-cols-1 place-content-center">
          <h1 className="text-center">login</h1>
          <LoginForm/>
        </div>
        <Image priority src={'/login.svg'} alt="hero image" width={1000} height={1000} className="h-[50%] sm:h-[60%] w-full sm:w-fit absolute bottom-0 left-1"/>
      </div>
    </>
  )
};

export default Signin;