'use client'

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ParentSignin = () => {

    const router = useRouter()

    const authenticate = (event) => {
        event.preventDefault()
        router.push('/multifactorauthentication',)
    }
    
  return (
    <>
        {/* form */}
        <div className="min-h-screen w-full grid grid-cols-1 place-content-center px-4 max-w-4xl mx-auto">
            <Image src={'/parent-signin.svg'} alt="login page hero image" width={350} height={350} className="mx-auto w-fit h-fit max-sm:max-h-[250px]"/>
            <p className="w-full text-center text-gray-400 text-2xl"><span className=" text-blue-700">parent</span> sign in area</p>
            <form className="mx-auto w-full" onSubmit={authenticate}>
                <div className="my-4">
                    <input type="text" placeholder="email" className="border rounded-md px-5 py-1 w-full"/>
                </div>
                <div className="my-4">
                    <input type="text" placeholder="phone number" className="border rounded-md px-5 py-1 w-full"/>
                </div>
                <div className="my-4">
                    <select type="text" className="border rounded-md py-1 w-full text-center text-gray-400">
                        <option disabled selected>--- province ---</option>
                        <option>Eastern Cape</option>
                        <option>Free State</option>
                        <option>Gauteng</option>
                        <option>KwaZulu-Natal</option>
                        <option>Limpopo, Mpumalanga</option>
                        <option>Northern Cape</option>
                        <option>North West</option>
                        <option>Western Cape</option>
                    </select>
                </div>
                <div className="my-4">
                    <select type="text" className="border rounded-md py-1 w-full text-center text-gray-400">
                        <option disabled selected>--- school ---</option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
                <button type="submit" className="w-full border focus:bg-blue-700 border-white rounded-xl bg-black active:bg-blue-700 text-white lg:hover:bg-blue-700 lg:hover:scale-[1.01] transition-all duration-500 py-1">sign in</button>
                <p className="text-base w-full text-center pt-3 text-gray-400">Already have an account? <Link href={'/login'} className=" text-blue-700 ">login</Link></p>
            </form>  
        </div>
    </>
  )
};

export default ParentSignin;