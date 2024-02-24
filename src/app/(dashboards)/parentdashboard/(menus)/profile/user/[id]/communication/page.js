'use client'

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Button from "@/components/button";


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
      <Crumbs title={'ID'} url={`parentdashboard/profile/user/1928742173`} hide={false}/>       {/* page heading */}
      <div>
        <h1 className="w-full text-center text-4xl pb-3 lg:text-8xl">Communication</h1>
        <p className="text-sm text-gray-400 mx-auto pb-24 text-center">preffered communication</p>
      </div>
      {/* Sms toggle */}
      <ToggleMenu menu={Menus.sms} checked={sms}/>
      {/* email toggle */}
      <ToggleMenu menu={Menus.email} checked={email}/>
      
      {/* save button */}
      <div className=" pt-16">
        <Button primary_colour={'black'} secondary_colour={'[#66b0f0]'} title={'save'} type={'submit'}/>
      </div>
      
    </div>
  )
};

export default Communication;