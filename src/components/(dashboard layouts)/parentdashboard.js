import data from '@/app/(dashboards)/dummydata.json'

import Link from "next/link";
import Image from "next/image";
import MultipleMenuLinks from "../(general components)/multiplemenulinks";


const menuitems = [
    {
      section : [
        {
          title: 'Family',
          icon: 'family',
          url: '/parentdashboard/family',
        }
      ]
    },
    {
      section : [
        
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
          title: 'Messages',
          icon: 'admin',
          url: '/parentdashboard/messages',
        },
        {
          title: 'Notifications',
          icon: 'bell-ring',
          url: '/parentdashboard/notifications',
        },
        {
          title: 'Fees',
          icon: 'wallet',
          url: '/parentdashboard/fees',
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
  
  let parent = data.parents[0]
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
              {/* profile section */}
              <div className="rounded-xl bg-white ">
                <Link href={'/parentdashboard/profile'} className="flex py-2 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
                  <Image priority={true} src={`/${parent.image}.svg`} alt="profile icon" width={30} height={30} className="w-fit rounded-full h-fit max-h-16 max-w-16" />
                  <div className="w-full">
                    <p className="pt-3 ">Seeran Dion</p>
                    <p className="text-sm text-gray-400 ">profile settings</p>
                  </div>
                  <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit pt-5"/>
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