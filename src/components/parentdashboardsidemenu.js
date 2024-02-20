
import Image from "next/image";
import Link from "next/link";


const Menu = {
  grades : {
    title: 'Grades',
    icon: 'graduation-cap',
    url: '/grades',
  },
  assessments : {
    title: 'Assessments',
    icon: 'calendar-clock',
    url: '/assessments',
  },
  achievements : {
    title: 'Achievements',
    icon: 'award',
    url: 'achievements',
  },
  teachers: {
    title: 'Teachers',
    icon: 'teacher',
    url: 'teachers',
  },
  notifications: {
    title: 'Notifications',
    icon: 'bell-ring',
    url: 'notifications',
  },
  activities : {
    title: 'Activities',
    icon: 'eye',
    url: 'activities',
  },
  attendance: {
    title: 'Attendance',
    icon: 'calendar-days',
    url: 'attendance',
  },
  fees: {
    title: 'Fees',
    icon: 'wallet',
    url: 'fees',
  },
  helpdesk: {
    title: 'Help Desk',
    icon: 'admin',
    url: 'helpdesk',
  },
  settings: {
    title: 'Settings',
    icon: 'settings',
    url: 'settings',
  },
}

const MenuLink = ({Menu}) => {
  return (
    <Link href={`${Menu.url}`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
      <Image src={`/${Menu.icon}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
      <p className={`w-full`}>{Menu.title}</p>
      <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
    </Link>
  )
}

const SmallDevices = () => {
  return (
    <div className="w-full mb-20">
      {/* accounts section */}
      <div className="rounded-xl bg-white">
        <Link href={'/profile'} className="flex py-2 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
          <Image priority src={'/profile-icon-1.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-16 max-w-16" />
          <div className="w-full">
            <p className="pt-3 ">Seeran Dion</p>
            <p className="text-sm text-gray-400 ">profile settings</p>
          </div>
          <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit pt-5"/>
        </Link>
        <hr className="mx-5"></hr>
        <Link href={'/family'} className="flex py-2 px-3 gap-5 justify-start w-full cursor-pointer md:hover:text-blue-700">
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
        <MenuLink Menu={Menu.grades}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.assessments}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.achievements}/>
      </div>
      {/* notifications section */}
      <div className="rounded-xl my-7 bg-white">
        <MenuLink Menu={Menu.teachers}/>
        
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.activities}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.attendance}/>
      </div>
      {/* help section */}
      <div className="rounded-xl my-7 bg-white">
        <MenuLink Menu={Menu.fees}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.notifications}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.helpdesk}/>
      </div>
      {/* settings section */}
      <div className="rounded-xl mt-7 bg-white">
        <MenuLink Menu={Menu.settings}/>
      </div>
    </div>
  )
}


const ParentDashboardSidemenu = () => {
  return (
    <div className="h-full">
      <SmallDevices/>
    </div>
  )
}

export default ParentDashboardSidemenu;