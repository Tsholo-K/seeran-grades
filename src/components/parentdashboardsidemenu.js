'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const Menu = {
  grades : {
    title: 'grades',
    icon: 'graduation-cap',
  },
  assessments : {
    title: 'assessments',
    icon: 'calendar-clock',
  },
  achievements : {
    title: 'achievements',
    icon: 'award',
  },
  teachers: {
    title: 'teachers',
    icon: 'teacher',
  },
  notifications: {
    title: 'notifications',
    icon: 'bell-ring',
  },
  activities : {
    title: 'activities',
    icon: 'eye',
  },
  attendance: {
    title: 'attendance',
    icon: 'calendar-days',
  },
  fees: {
    title: 'fees',
    icon: 'wallet',
  },
  helpdesk: {
    title: 'help desk',
    icon: 'admin',
  },
  settings: {
    title: 'settings',
    icon: 'settings',
  },
}

const MenuLink = ({Menu}) => {
  return (
    <div className="flex gap-6 py-3 justify-start w-full px-3 cursor-pointer hover:text-blue-700">
      <Image src={`/${Menu.icon}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
      <p className={`w-full`}>{Menu.title}</p>
      <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
    </div>
  )
}


const ParentDashboardSidemenu = () => {
  return (
    <div className="flex w-full px-3 lg:px-4 h-full gap-2">
      <div className="w-full 2xl:w-4/12 lg:w-5/12 md:w-9/12">
        <div className="my-1">
          <Link href={'/'} className=""><Image priority src={'/favicon.svg'} alt="hero image" width={0} height={0} className="h-[40px] w-[40px]"/></Link>
        </div>
        {/* accounts section */}
        <div className="border rounded-xl mb-7 bg-white">
          <div className="flex py-2 gap-5 px-3 justify-start w-full cursor-pointer hover:text-blue-700">
            <Image priority src={'/profile-icon-1.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-16 max-w-16" />
            <p className="pt-3 w-full">profile settings</p>
            <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit pt-5"/>
          </div>
          <hr className="mx-5"></hr>
          <div className="flex py-2 px-3 gap-5 justify-start w-full cursor-pointer hover:text-blue-700">
            <div className="flex w-fit">
              <Image src={'/profile-icon-2.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10 max-w-10" />
              <Image src={'/profile-icon-3.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10 max-w-10" />
              <Image src={'/profile-icon-4.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10 max-w-10" />
            </div>
            <p className="pt-2 w-full">children</p>
            <Image src={'/chevron-right-black.svg'} alt='try it button' width={50} height={50} className="w-fit h-fit pt-2"/>
          </div>
        </div>
        {/* children section */}
        <div className="border rounded-xl my-7 bg-white">
          <MenuLink Menu={Menu.grades}/>
          <hr className="mx-5"></hr>
          <MenuLink Menu={Menu.assessments}/>
          <hr className="mx-5"></hr>
          <MenuLink Menu={Menu.achievements}/>
        </div>
        {/* notifications section */}
        <div className="border rounded-xl my-7 bg-white">
          <MenuLink Menu={Menu.teachers}/>
          <hr className="mx-5"></hr>
          <MenuLink Menu={Menu.notifications}/>
          <hr className="mx-5"></hr>
          <MenuLink Menu={Menu.activities}/>
          <hr className="mx-5"></hr>
          <MenuLink Menu={Menu.attendance}/>
        </div>
        {/* help section */}
        <div className="border rounded-xl my-7 bg-white">
          <MenuLink Menu={Menu.fees}/>
          <hr className="mx-5"></hr>
          <MenuLink Menu={Menu.helpdesk}/>
        </div>
        {/* settings section */}
        <div className="border rounded-xl my-7 bg-white">
          <MenuLink Menu={Menu.settings}/>
        </div>
      </div>
      {/* large screen  */}
      <div className="hidden md:block lg:px-2 w-full h-full">
        <div className="border rounded-xl my-7 bg-white h-full">
          <div className="flex gap-6 py-3 justify-start w-full px-3">
            <Image src={'/admin.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
            <p className="w-full">administrator</p>
            <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit sm:mt-1"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParentDashboardSidemenu;