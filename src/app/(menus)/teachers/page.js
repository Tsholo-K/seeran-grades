import Image from "next/image";
import Link from "next/link";


const Menu = {
  personalinformation : {
    title: 'Personal Information',
    icon: 'book-lock',
  },
  signinandsecurity : {
    title: 'Sign-in And Security',
    icon: 'fingerprint',
  },
  signout : {
    title: 'Sign Out',
    icon: 'log-out',
  }
};

const MenuLink = ({Menu}) => {
  return (
    <div className="flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <Image src={`/${Menu.icon}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
      <p className={`w-full`}>{Menu.title}</p>
      <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
    </div>
  )
};

const Teachers = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <div className="fixed top-0 pt-16 w-full pb-1 bg-gray-100">
        <Link href={'/parentdashboard'} className="flex w-full text-blue-700">
          <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>dashboard
        </Link>
      </div>
      <div>
        <h1 className="w-full text-center pb-10 text-4xl">Chats</h1>
        <Link href={'/profile'} className="flex relative py-3 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
          <p className="absolute top-0 left-3 bg-blue-600 w-6 text-center rounded-full text-white">1</p>
          <Image priority src={'/profile-icon-1.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-12 max-w-12" />
          <div className=" w-full">
            <p className="font-bold">Surname Name</p>
            <p className="text-sm text-gray-500">your child is having...</p>
          </div>
          <div>
            <p className="text-sm text-blue-700">13:00</p>
          </div>
        </Link>
        <hr className="ml-16 py-1"></hr>
        <Link href={'/profile'} className="relative flex py-3 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
          <p className="absolute top-0 left-3 bg-blue-600 w-6 text-center rounded-full text-white">3</p>
          <Image priority src={'/profile-icon-3.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-12 max-w-12" />
          <div className=" w-full">
            <p className="font-bold">Surname Name</p>
            <p className="text-sm text-gray-500">we need you to come...</p>
          </div>
          <div>
            <p className="text-sm text-blue-700">14:00</p>
          </div>
        </Link>
        <hr className="ml-16 py-1"></hr>
        <Link href={'/profile'} className="flex py-3 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
          <Image priority src={'/profile-icon-2.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-12 max-w-12" />
          <div className=" w-full">
            <p className="font-bold">Surname Name</p>
            <p className="text-sm text-gray-500">your child did not do...</p>
          </div>
          <div>
            <p className="text-sm">12:00</p>
          </div>
        </Link>
        <hr className="ml-16 py-1"></hr>
        <Link href={'/profile'} className="flex relative py-3 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
          <p className="absolute top-0 left-3 bg-blue-600 w-6 text-center rounded-full text-white">1</p>
          <Image priority src={'/profile-icon-4.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-12 max-w-12" />
          <div className=" w-full">
            <p className="font-bold">Surname Name</p>
            <p className="text-sm text-gray-500">your child is having...</p>
          </div>
          <div>
            <p className="text-sm text-blue-700">09:00</p>
          </div>
          
        </Link>
        <hr className="ml-16 py-1"></hr>
      </div>
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto pt-2">all caught up..</p>
    </div>
  )
};

export default Teachers;