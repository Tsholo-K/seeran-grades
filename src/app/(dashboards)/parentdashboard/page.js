import Link from "next/link";
import Image from "next/image";

{/* components */}

const menu = {
  grades : {
    title: 'Grades',
    icon: 'graduation-cap',
    url: '/parentdashboard/grades',
  },
  assessments : {
    title: 'Assessments',
    icon: 'calendar-clock',
    url: '/parentdashboard/assessments',
  },
  achievements : {
    title: 'Achievements',
    icon: 'award',
    url: '/parentdashboard/achievements',
  },
  teachers: {
    title: 'Teachers',
    icon: 'teacher',
    url: '/parentdashboard/teachers',
  },
  notifications: {
    title: 'Notifications',
    icon: 'bell-ring',
    url: '/parentdashboard/notifications',
  },
  activities : {
    title: 'Activities',
    icon: 'eye',
    url: '/parentdashboard/activities',
  },
  attendance: {
    title: 'Attendance',
    icon: 'calendar-days',
    url: '/parentdashboard/attendance',
  },
  fees: {
    title: 'Fees',
    icon: 'wallet',
    url: '/parentdashboard/fees',
  },
  helpdesk: {
    title: 'Help Desk',
    icon: 'admin',
    url: '/parentdashboard/helpdesk',
  },
  settings: {
    title: 'Settings',
    icon: 'settings',
    url: '/parentdashboard/settings',
  },
}

const SingleMenu = ({Menu}) => {
  return (
    <Link href={`${Menu.url}`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
      <Image src={`/${Menu.icon}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
      <p className={`w-full`}>{Menu.title}</p>
      <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
    </Link>
  )
}

export default function ParentDashboard() {
    return (
      <div>
        {/* parent dashboard for mobile */}
        <div className="w-full mb-20 lg:hidden block">
          {/* accounts section */}
          <div className="rounded-xl bg-white">
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
                <Image src={'/profile-icon-2.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10 max-w-10" />
                <Image src={'/profile-icon-3.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10 max-w-10" />
                <Image src={'/profile-icon-4.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10 max-w-10" />
              </div>
              <p className="pt-2 w-full">Family</p>
              <Image src={'/chevron-right-black.svg'} alt='try it button' width={50} height={50} className="w-fit h-fit pt-2"/>
            </Link>
          </div>
          {/* children section */}
          <div className="rounded-xl my-7 bg-white">
            <SingleMenu Menu={menu.grades}/>
            <hr className="mx-5"></hr>
            <SingleMenu Menu={menu.assessments}/>
            <hr className="mx-5"></hr>
            <SingleMenu Menu={menu.achievements}/>
          </div>
          {/* notifications section */}
          <div className="rounded-xl my-7 bg-white">
            <SingleMenu Menu={menu.teachers}/>
            
            <hr className="mx-5"></hr>
            <SingleMenu Menu={menu.activities}/>
            <hr className="mx-5"></hr>
            <SingleMenu Menu={menu.attendance}/>
          </div>
          {/* help section */}
          <div className="rounded-xl my-7 bg-white">
            <SingleMenu Menu={menu.fees}/>
            <hr className="mx-5"></hr>
            <SingleMenu Menu={menu.notifications}/>
            <hr className="mx-5"></hr>
            <SingleMenu Menu={menu.helpdesk}/>
          </div>
          {/* settings section */}
          <div className="rounded-xl mt-7 bg-white">
            <SingleMenu Menu={menu.settings}/>
          </div>
        </div>
        {/* desktop view */}
        <div className="w-full bg-white hidden lg:block px-7">
          <p>hi</p>
        </div>
      </div>
    )
}