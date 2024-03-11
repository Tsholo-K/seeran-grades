'use client'

import { useState } from "react";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Button from "@/components/(general components)/button";
import PageHeading from "@/components/(general components)/pageheading";


const menus = {
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
  const student_id = searchParams.id

  let sms 
  let email 

  data.students.forEach(( stu ) => {
    if( stu.id === student_id ) {
      sms = stu.sms_communication
      email = stu.email_communication
    }
  });

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <Crumbs title={'ID'} url={`studentdashboard/profile/user/${student_id}`} hide={false}/>
      {/* page heading */}
      <PageHeading title={'Communication'} subheading={'preffered communication'} />
      {/* Sms toggle */}
      <ToggleMenu menu={menus.sms} checked={sms}/>
      {/* email toggle */}
      <ToggleMenu menu={menus.email} checked={email}/>
      {/* save button */}
      <div className="pt-32">
        <Button primary_colour={'black'} secondary_colour={'[#66b0f0]'} title={'save'} type={'submit'}/>
      </div>
    </div>
  )
};

export default Communication;