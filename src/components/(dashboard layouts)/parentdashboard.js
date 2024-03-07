import data from '@/app/(dashboards)/dummydata.json'

import Link from "next/link";
import Image from "next/image";
import MultipleMenuLinks from "../(general components)/multiplemenulinks";


const menuitems = [
    {
      section : [
        {
          title: 'Grades',
          icon: 'graduation-cap',
          url: '/parentdashboard/grades',
        },
        {
          title: 'Assessments',
          icon: 'calendar-clock',
          url: '/parentdashboard/assessments',
        },
        {
          title: 'Achievements',
          icon: 'award',
          url: '/parentdashboard/achievements',
        }
      ]
    },
    {
      section : [
        {
          title: 'Messages',
          icon: 'admin',
          url: '/parentdashboard/messages',
        },
        {
          title: 'Activities',
          icon: 'eye',
          url: '/parentdashboard/activities',
        },
        {
          title: 'Attendance',
          icon: 'calendar-days',
          url: '/parentdashboard/attendance',
        }
      ]
    },
    {
      section : [
        {
          title: 'Fees',
          icon: 'wallet',
          url: '/parentdashboard/fees',
        },
        {
          title: 'Notifications',
          icon: 'bell-ring',
          url: '/parentdashboard/notifications',
        },
        {
          title: 'Help Desk',
          icon: 'admin',
          url: '/parentdashboard/helpdesk',
        }
      ]
    },
    {
      section : [
        {
          title: 'Settings',
          icon: 'settings',
          url : '/parentdashboard/settings'
        }
      ]
    }
]

const Parentdashboard = () => {
  
  let children = []

  data.parents[0].children.forEach( child_id => {
    data.students.forEach( child => {
      if ( child.id === child_id ) {
      children.push(child)
      }
    });
  });

  return (
    <>
        <div className="w-full h-full relative">
          <div className="">
              {/* accounts section */}
              <div className="rounded-xl bg-white ">
                <Link href={'/parentdashboard/profile'} className="flex py-2 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
                  <Image priority src={'/profile-icon-1.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-16 max-w-16" />
                  <div className="w-full">
                    <p className="pt-3 ">Seeran Dion</p>
                    <p className="text-sm text-gray-400 ">profile settings</p>
                  </div>
                  <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit pt-5"/>
                </Link>
                <hr className="mx-5"></hr>
                <Link href={'/parentdashboard/family'} className="flex py-2 px-3 gap-5 justify-start w-full cursor-pointer md:hover:text-blue-700">
                  <div className="flex w-fit">
                    {
                      children.map( child => (
                        <>
                          <Image src={`/${child.image}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10 max-w-10" />

                        </>
                      ))
                    }
                  </div>
                  <p className="pt-2 w-full">Family</p>
                  <Image src={'/chevron-right-black.svg'} alt='try it button' width={50} height={50} className="w-fit h-fit pt-2"/>
                </Link>
              </div>
              {
                menuitems.map( ( item,index ) => (
                  <>
                    <MultipleMenuLinks key={index} menu={item} />
                  </>
                ))
              }
          </div>
        </div>
    </>
  )
};

export default Parentdashboard;