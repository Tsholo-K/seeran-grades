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
          url: '/studentdashboard/assessments',
        }
      ]
    },
    {
      section : [
        {
          title: 'Grades',
          icon: 'graduation-cap',
          url: '/studentdashboard/grades',
        },
        {
          title: 'Assessments',
          icon: 'calendar-clock',
          url: '/studentdashboard/assessments',
        },
        {
          title: 'Achievements',
          icon: 'award',
          url: '/studentdashboard/achievements',
        }
      ]
    },
    {
      section : [
        {
          title: 'Notifications',
          icon: 'bell-ring',
          url: '/studentdashboard/notifications',
        },
        {
          title: 'Messages',
          icon: 'teacher',
          url: '/studentdashboard/messages',
        },
        {
          title: 'Help Desk',
          icon: 'admin',
          url: '/studentdashboard/helpdesk',
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

const Studentdashboard = () => {
  return (
    <>
        <div className="w-full h-full relative">
            {/* accounts section */}
            <div className="rounded-xl bg-white mb-7">
              <Link href={'/studentdashboard/profile'} className="flex py-2 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
                <Image priority src={'/profile-icon-3.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-16 max-w-16" />
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