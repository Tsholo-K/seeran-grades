import Link from "next/link";
import Image from "next/image";
import MultipleMenuLinks from "../(general components)/multiplemenulinks";
import SingleMenuLink from "../(general components)/signlemenulink";


const menuitems = [
  {
    section : [
      {
        title: 'Classes',
        icon: 'classes',
        url: '/teacherdashboard/classes',
      },
      {
        title: 'Attendance',
        icon: 'calendar-days',
        url: '/teacherdashboard/attendance',
      },
      {
        title: 'Log Activity',
        icon: 'eye',
        url: '/teacherdashboard/activities',
      }
    ]
  },
  {
    section : [
      {
        title: 'Messages',
        icon: 'teacher',
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
  return (
    <>
      <div className="w-full h-full relative">
        <div>
          {/* accounts section */}
          <div className="rounded-xl bg-white mb-7">
            <Link href={'/teacherdashboard/profile'} className="flex py-2 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
              <Image priority src={'/profile-icon-1.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-16 max-w-16" />
              <div className="w-full">
                <p className="pt-3 ">Seeran Dion</p>
                <p className="text-sm text-gray-400 ">profile settings</p>
              </div>
              <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit pt-5"/>
            </Link>
          </div>
           <SingleMenuLink title={'Performance'} icon={'performance'} url={'/teacherdashboard/performance'} border={true}/>
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