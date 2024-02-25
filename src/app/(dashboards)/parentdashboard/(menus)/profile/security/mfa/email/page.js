import Image from "next/image";
import Link from "next/link";

// components
import Crumbs from "@/components/crumbs";


const InputArea = ({ title }) => {
  return (
    <>
      <p className="text-sm text-gray-400 pl-2 py-1">{title}</p>
      <div className="rounded-xl bg-white mb-1">
        <input type="number" className="w-full rounded-xl h-10 px-3 focus:outline-none"/>
      </div>
    </>
  )
};

const EmailAuthentication = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <Crumbs url={'parentdashboard/profile/security/mfa'} title={'mfa'}/>
      {/* page heading */}
      <div>
        <h1 className="w-full text-center pb-32 text-4xl lg:text-8xl">Multi-Factor<br></br> Authentication</h1>
      </div>
      {/* input area */}
      <InputArea title='One Time Passcode'/>
      <p className="text-sm text-gray-400 mx-auto">we sent an OTP to your email address</p>
      <button type="submit" className="w-full border border-white mt-24 rounded-xl bg-black active:bg-blue-700 text-white lg:hover:bg-blue-700 focus:bg-blue-700 lg:hover:scale-[1.01] transition-all duration-500 py-1">authenticate</button>
    </div>
  )
};

export default EmailAuthentication;