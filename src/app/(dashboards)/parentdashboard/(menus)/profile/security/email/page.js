import Image from "next/image";
import Link from "next/link";

// components
import Crumbs from "@/components/crumbs";


const InputArea = ({ title }) => {
  return (
    <>
      <p className="text-sm text-gray-400 pl-2 py-1">{title}</p>
      <div className="rounded-xl bg-white mb-3">
        <input type="password" className="w-full rounded-xl h-10 px-3 focus:outline-none"/>
      </div>
    </>
  )
};


const Email = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <Crumbs title={'security'} url={'parentdashboard/profile/security'}/>
      <div className="fixed top-0 pt-16 pb-1 w-full bg-gray-100">
        <Link href={''} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>profile</Link>
      </div>
      {/* page heading */}
      <div>
        <h1 className="w-full text-center pb-24 text-4xl lg:text-8xl">Update Email</h1>
      </div>
      {/* input area */}
      <div className="relative mb-32">
        <InputArea title='new email'/>
        <p className="text-center text-sm text-gray-400 ma-auto">we&apos;ll send an OTP to the email to confirm your identity</p>
      </div>
      <button type="submit" className="w-full border border-white rounded-xl bg-black active:bg-blue-700 text-white lg:hover:bg-blue-700 focus:bg-blue-700 lg:hover:scale-[1.01] transition-all duration-500 py-1">update</button>
    </div>
  )
};

export default Email;