import Link from "next/link"
import Image from "next/image"
import MultipleMenuLinks from "../(general components)/multiplemenulinks"


const studentdashboardmenuitems = [
    {
      section : [
        {
          title: 'Classes',
          icon: 'classes',
          url: '/studentdashboard/classes',
        },
        {
          title: 'timetable',
          icon: 'time-table',
          url: '/studentdashboard/timetable',
        }
      ]
    },
    {
      section : [
        {
          title: 'Achievements',
          icon: 'award',
          url: '/studentdashboard/achievements',
        },
      ]
    },
    {
      section : [
        {
          title: 'Messages',
          icon: 'admin',
          url: '/studentdashboard/messages',
        },
        {
          title: 'Notifications',
          icon: 'bell-ring',
          url: '/studentdashboard/notifications',
        },
      ]
    },
    {
      section : [
        {
          title: 'Settings',
          icon: 'settings',
          url : '/studentdashboard/settings'
        }
      ]
    }
]

const Studentdashboard = () => {
  return (
    <>
      <div className="w-full h-full relative">
        {/* accounts section */}
        <div className="rounded-xl bg-white mb-7">
          <Link href={'/studentdashboard/profile'} className="flex py-2 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
            <Image priority src={'/default-user-icon.svg'} alt="profile icon" width={30} height={30} className="rounded-full w-fit h-fit max-h-16 max-w-16" />
            <div className="w-full">
              <p className="pt-3 ">Tsholo Koketso</p>
              <p className="text-sm text-gray-400 ">profile settings</p>
            </div>
            <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit pt-5"/>
          </Link>
        </div>
        {
          studentdashboardmenuitems.map( ( item,index ) => (
            <>
              <MultipleMenuLinks key={index} menu={item} />
            </>
          ))
        }
      </div>
    </>
  )
}

export default Studentdashboard