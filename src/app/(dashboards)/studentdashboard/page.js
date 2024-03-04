import Link from "next/link";
import Image from "next/image";

{/* components */}
import MultipleMenuLinks from "@/components/multiplemenulinks";
import SingleMenuLink from "@/components/signlemenulink";


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
]

export default function ParentDashboardLandingPage() {
    return (
      <>
        <div className="h-screen relative">
          {/* sudent dashboard for mobile */}
          <div className="w-full pt-16 pb-7 h-full relative lg:hidden block">
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
            <div className={'absolute bottom-7 w-full'}>
              <SingleMenuLink title={'Settings'} icon={'settings'} url={'/studentdashboard/settings'} border={true}/>
            </div>
          </div>
          {/* desktop view */}
          <div className="w-full hidden lg:block pt-16">
          </div>
        </div>
      </>
    )
}
