'use client'

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'


const Menus = {
  sms: {
    toggle: '1',
    title: 'Sms'
  },
  email: {
    toggle: '2',
    title: 'Email'
  }
};

const ToggleMenu = ({ menu, checked }) => {

  const [status, setstatus] = useState(checked)

  const reverse = (status) => {
    setstatus(!status)
  };

  return (
    <>
      <div className="flex relative my-3">
        <p>{menu.title}</p>
        <div className="absolute right-3 " onClick={reverse}>
          <label for={`${menu.title}`} className="flex items-center cursor-pointer relative mb-4" >
          {
            status ?(
              <input type="checkbox" checked id={`${menu.title}`} className="sr-only"/>
            ) :(
              <input type="checkbox" id={`${menu.title}`} className="sr-only"/>
            )
          }
            <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
          </label>
        </div>
      </div>
    </>
  )
};


const Communication = () => {

  const searchParams = useParams();
  let sms = ''
  let email = ''

  if( data.parent.id === searchParams.id ){
    sms = data.parent.sms_communication
    email = data.parent.email_communication
  }

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <div className="fixed top-0 pt-16 pb-1 w-full bg-gray-100">
        <Link href={'/profile/user/1928742173'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>id</Link>
      </div>
      {/* page heading */}
      <div>
        <h1 className="w-full text-center pb-24 text-4xl">Communication</h1>
      </div>
      {/* Sms toggle */}
      <ToggleMenu menu={Menus.sms} checked={sms}/>
      {/* email toggle */}
      <ToggleMenu menu={Menus.email} checked={email}/>
      <p className="text-sm text-gray-400 mx-auto text-center">preffered communication</p>
      {/* save button */}
      <button type="submit" className="w-full mt-40 border border-white rounded-xl bg-black active:bg-blue-700 text-white lg:hover:bg-blue-700 focus:bg-blue-700 lg:hover:scale-[1.01] transition-all duration-500 py-1">save</button>
    </div>
  )
};

export default Communication;