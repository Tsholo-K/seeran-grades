
import Image from "next/image";
import Link from "next/link";


const Menu = {
  grades : {
    title: 'Grades',
    icon: 'graduation-cap',
  },
  assessments : {
    title: 'Assessments',
    icon: 'calendar-clock',
  },
  achievements : {
    title: 'Achievements',
    icon: 'award',
  },
  teachers: {
    title: 'Teachers',
    icon: 'teacher',
  },
  notifications: {
    title: 'Notifications',
    icon: 'bell-ring',
  },
  activities : {
    title: 'Activities',
    icon: 'eye',
  },
  attendance: {
    title: 'Attendance',
    icon: 'calendar-days',
  },
  fees: {
    title: 'Fees',
    icon: 'wallet',
  },
  helpdesk: {
    title: 'Help Desk',
    icon: 'admin',
  },
  settings: {
    title: 'Settings',
    icon: 'settings',
  },
}

const MenuLink = ({Menu}) => {
  return (
    <div className="flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <Image src={`/${Menu.icon}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
      <p className={`w-full`}>{Menu.title}</p>
      <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
    </div>
  )
}

const SmallDevices = () => {
  return (
    <div className="w-full h-full md:hidden mb-20">
      {/* accounts section */}
      <div className="border rounded-xl bg-white">
        <Link href={'/parentdashboard/profile'} className="flex py-2 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
          <Image priority src={'/profile-icon-1.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-16 max-w-16" />
          <p className="pt-3 w-full"> Surname Name</p>
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
      <div className="border rounded-xl mt-7 bg-white">
        <MenuLink Menu={Menu.settings}/>
      </div>
    </div>
  )
}


const ParentDashboardSidemenu = () => {
  return (
    <div className="h-full">
      <div className="w-full">
        <SmallDevices/>
      </div>
    </div>
    
  )
}

export default ParentDashboardSidemenu;