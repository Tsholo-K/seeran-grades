import Image from "next/image";
import Link from "next/link";

// dummy data
import data from '@/app/(menus)/dummydata.json'


const Menu = {
  email : {
    title: 'Email',
    icon: false,
    info: 'email@example.com',
    url : '/profile/security/mfa/email',
  },
  phonenumber : {
    title: 'Phone number',
    icon: false,
    info: '0711740824',
    url : '/profile/security/mfa/phonenumber',
  },
};

const MenuLink = ({ Menu}) => {
  return (
    <Link href={`${Menu.url}`} className="relative flex py-3 gap-1 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p>{Menu.title}</p>
      <p className="text-gray-400 absolute right-9">{Menu.info}</p>
      <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit absolute right-3"/>
    </Link>
  )
};


const MultiFactorAuthentication = () => {

  const user = data.parent

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <div className="fixed top-0 pt-16 pb-1 w-full bg-gray-100">
        <Link href={'/profile/security'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>profile</Link>
      </div>
      {/* page heading */}
      <div>
        <h1 className="w-full text-center pb-32 text-4xl">Multi-Factor<br></br> Authentication</h1>
      </div>
      <div className="relative">
        {/* phone number */}
        <p className="text-sm text-gray-400 pl-2 pb-1">phone number</p>
        <div className="rounded-xl bg-white">
          <MenuLink Menu={Menu.phonenumber}/>
        </div>
        {/* email */}
        <p className="text-sm text-gray-400 pl-2 mt-5 pb-1">email</p>
        <div className="rounded-xl bg-white">
          <MenuLink Menu={Menu.email}/>
        </div>
      </div>
      <p className="text-sm text-gray-400 mx-auto pt-1">select one of the methods above</p>
    </div>
  )
};

export default MultiFactorAuthentication;