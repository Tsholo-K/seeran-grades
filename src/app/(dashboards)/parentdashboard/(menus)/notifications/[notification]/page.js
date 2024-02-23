import Image from "next/image";
import Link from "next/link";


const Menu = {
  sender : {
    title: 'Sender',
    info: 'Principal',
  },
  date : {
    title: 'Date',
    info: '12 febuary 2024',
  },
  signout : {
    title: 'Sign Out',
    icon: 'log-out',
  }
};

const MenuLink = ({Menu}) => {
  return (
    <div className="relative flex py-3 gap-1 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p>{Menu.title}</p>
      <p className="text-gray-400 absolute right-4">{Menu.info}</p>
    </div>
  )
}


const Notifications = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <div className="fixed top-0 pt-16 w-full pb-1 bg-gray-100">
        <Link href={'/notifications'} className="flex w-full text-blue-700">
          <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>messages
        </Link>
      </div>
      <div className="mb-16">
        <div className="w-full mx-auto">
          <Image src={'/mail-open.svg'} alt='back to main menu' height={100} width={100} className="mx-auto"/>
          <p className="text-xl text-center pt-6 w-[95%] mx-auto">seeran grades our new school management system</p>
        </div>
      </div>
      <div className="py-4 mb-10">
        <div className="flex">
          <p className=" text-sm pl-2 pb-1 text-gray-400">message</p>
        </div>
        <div className="relative rounded-xl bg-white py-1">
          <p className="w-full py-1 px-2">
            We understand the importance of staying connected and informed about your child&apos;s education journey. 
            That&apos;s why we&apos;re excited to introduce Seeran Grades, a user-friendly platform designed to empower you with
            real-time insights into your child&apos;s academic progress and well-being
          </p>
        </div>
      </div>
      <div>
        <div className="rounded-xl bg-white">
          <MenuLink Menu={Menu.sender}/>
          <hr className="mx-5"></hr>
          <MenuLink Menu={Menu.date}/>
        </div>
      </div>
    </div>
  )
};

export default Notifications;