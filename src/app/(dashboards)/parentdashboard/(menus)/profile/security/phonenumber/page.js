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


const PhoneNumber = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <Crumbs url={'parentdashboard/profile/security'} title={'security'}/>
      {/* page heading */}
      <div>
        <h1 className="w-full text-center pb-24 text-4xl lg:text-8xl">Update Phone Number</h1>
      </div>
      {/* input area */}
      <div className="relative mb-32">
        <InputArea title='new number'/>
        <p className="text-center text-sm text-gray-400 ma-auto">we&apos;ll send an OTP to the phone number to confirm your identity</p>
      </div>
      <button type="submit" className="w-full border border-white rounded-xl bg-black active:bg-blue-700 text-white lg:hover:bg-blue-700 focus:bg-blue-700 lg:hover:scale-[1.01] transition-all duration-500 py-1">update</button>
    </div>
  )
};

export default PhoneNumber;