// dummy data
import data from '@/app/(dashboards)/dummydata.json'

import Link from "next/link";
import Image from "next/image";
import MultipleMenuLinks from "../(general components)/multiplemenulinks";


const menuitems = [
  {
    section : [
      {
        title: 'Performance',
        icon: 'performance',
        url: '/teacherdashboard/performance',
      }
    ]
  },
  {
    section : [
      {
        title: 'Classes',
        icon: 'classes',
        url: '/teacherdashboard/classes',
      },
      {
        title: 'Register Class',
        icon: 'register-class',
        url: '/teacherdashboard/registerclass',
      },
      {
        title: 'timetable',
        icon: 'time-table',
        url: '/teacherdashboard/timetable',
      }
    ]
  },
  {
    section : [
      {
        title: 'Messages',
        icon: 'admin',
        url: '/teacherdashboard/messages',
      },
      {
        title: 'Notifications',
        icon: 'bell-ring',
        url: '/teacherdashboard/notifications',
      }
    ]
  },
  {
    section : [
      {
        title: 'Settings',
        icon: 'settings',
        url: '/teacherdashboard/settings',
      }
    ]
  }
]

const Teacherdashboard = () => {

  const teacher_id = '2938438420'
  let teacher 
  data.teachers.forEach((teach) => {
    if( teach.id === teacher_id ) {
      teacher = teach
    }
  });

  return (
    <>
      <div className="w-full h-full relative">
        <div>
          {/* account settings */}
          <div className="rounded-xl bg-white mb-7">
            <Link href={'/teacherdashboard/profile'} className="flex py-2 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
              <Image priority src={`/${teacher.image}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-16 max-w-16 rounded-full" />
              <div className="w-full">
                <p className="pt-3 ">{teacher.name.charAt(0).toUpperCase() + teacher.name.slice(1)} {teacher.surname.charAt(0).toUpperCase() + teacher.surname.slice(1)}</p>
                <p className="text-sm text-gray-400 ">profile settings</p>
              </div>
              <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit pt-5"/>
            </Link>
          </div>
          {/* menu links */}
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

export default Teacherdashboard;