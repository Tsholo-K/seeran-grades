'use client'

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

{/* components */}
import Button from "@/components/(general components)/button";
import Input from "@/components/(general components)/input";


const Signin = () => {

    const router = useRouter()

    const authenticate = (event) => {
        event.preventDefault()
        router.push('/mfa',)
    }
    
  return (
    <>
        <div className="h-screen relative">
            <div className="w-full h-[60%] max-w-screen-xl mx-auto grid grid-cols-1 place-content-center">
                <h1 className="text-center">sign in</h1>
                <form className="mx-auto w-[80%] lg:w-[60%]" onSubmit={authenticate}>
                    <div className="my-4">
                        <Input type={'text'} placeholder={'email'} />
                    </div>
                    <div className="my-4">
                        <Input type={'text'} placeholder={'phone number'} />
                    </div>
                    <Button title={'sign in'} black={true} type={'submit'}/>                   
                    <p className="text-sm md:text-base w-full text-center pt-3 text-gray-400">Already have an account? <Link href={'/login'} className=" text-[#66b0f0]">login</Link></p>
                </form>
            </div>
            <Image priority src={'/signin.svg'} alt="hero image" width={1000} height={1000} className="h-[50%] sm:h-[60%] w-full sm:w-fit absolute bottom-1 left-1"/>
        </div>
    </>
  )
};

export default Signin;