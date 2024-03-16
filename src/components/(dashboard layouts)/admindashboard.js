import Link from "next/link";
import Image from "next/image";
import MultipleMenuLinks from "../(general components)/multiplemenulinks";
import Aligner from "../(general components)/aligner";


const menuitems = [
    {
      section : [
        {
          title: 'Console',
          icon: 'management',
          url: '/admindashboard/console',
        }
      ]
    },
    {
      section : [
        {
          title: 'Performance',
          icon: 'performance',
          url: '/admindashboard/performance',
        }
      ]
    },
    {
      section : [
        {
          title: 'Announcements',
          icon: 'megaphone',
          url: '/admindashboard/announcements',
        },
        {
          title: 'Fees',
          icon: 'wallet',
          url: '/admindashboard/fees',
        },
        {
          title: 'Complaints',
          icon: 'mailbox',
          url: '/admindashboard/helpdesk',
        }
      ]
    },
    {
      section : [
        {
          title: 'Settings',
          icon: 'settings',
          url : '/admindashboard/settings'
        }
      ]
    }
]

const Admindashboard = () => {
  return (
    <div className="w-full h-full relative">
      <Aligner/>
      <div className="">
        {/* accounts section */}
        <div className="rounded-xl bg-white ">
          <Link href={'/admindashboard/profile'} className="flex py-2 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
            <Image priority src={'/default-user-icon.svg'} alt="profile icon" width={30} height={30} className="rounded-full w-fit h-fit max-h-16 max-w-16" />
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
  )
};

export default Admindashboard;