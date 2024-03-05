import Image from "next/image";
import Link from "next/link";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

//components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";


const Menu = {
  email : {
    title: 'Email',
    icon: false,
    info: 'email@example.com',
    url : '',
  },
  phonenumber : {
    title: 'Phone number',
    icon: false,
    info: '0711740824',
    url : '/parentdashboard/profile/security/mfa/phonenumber',
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
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <Crumbs url={'parentdashboard/profile/security'} title={'security'}/>
      {/* page heading */}
      <PageHeading title={'Multi-Factor Authentication'} />
      {/* phone number */}
      <p className="text-sm text-gray-400 pl-2 pb-1">phone number</p>
      <SingleMenuLink title={'Phone number'} url={'/parentdashboard/profile/security/mfa/phonenumber'} border={true}/>
      {/* email */}
      <p className="text-sm text-gray-400 pl-2 mt-5 pb-1">email</p>
      <SingleMenuLink title={'Email'} url={'/parentdashboard/profile/security/mfa/email'} border={true}/>
      <p className="text-sm text-gray-400 mx-auto pt-3">select one of the methods above</p>
    </div>
  )
};

export default MultiFactorAuthentication;