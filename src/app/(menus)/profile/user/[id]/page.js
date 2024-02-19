'use client'

import Image from "next/image";
import Link from "next/link";

import { useParams } from "next/navigation";


// dummy data
import data from '@/app/(menus)/dummydata.json'


const Menu = {
  name : {
    title: 'Name',
    icon: false,
  },
  surname : {
    title: 'Surname',
    icon: false,
  },
  phonenumber : {
    title: 'Phone Number',
    icon: false,
  },
  email : {
    title: 'Email',
    icon: false,
  },
  children : {
    title: 'Children',
    icon: false,
  },
  communication : {
    title: 'Communication preferance',
    icon: true,
  },
}

const MenuLink = ({ Menu, User_info }) => {
  return (
    <div className="relative flex py-3 gap-1 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p>{Menu.title}</p>
      <p className="text-gray-400 absolute right-4">{ User_info }</p>
      {Menu.icon 
        ? (<Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit absolute right-3"/>)
        : null
      }
    </div>
  )
}


const ID = () => {

  const searchParams = useParams();

  let parent_user = null
  if( data.parent.id === searchParams.id ){
    parent_user = data.parent
  }

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <div className="fixed top-0 pt-16 pb-1 w-full bg-gray-100">
        <Link href={'/profile'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>profile</Link>
      </div>
      {/* page heading */}
      <div>
        <h1 className="w-full text-center pb-20 text-4xl">ID</h1>
      </div>
      {/* personal infomation */}
      <div className="rounded-xl bg-white">
        <MenuLink Menu={Menu.name} User_info={parent_user.name.charAt(0).toUpperCase() + parent_user.name.slice(1)} />
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.surname} User_info={parent_user.surname.charAt(0).toUpperCase() + parent_user.surname.slice(1)}  />
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.phonenumber} User_info={parent_user.phone_number}  />
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.email} User_info={parent_user.email}  />
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.children} User_info={parent_user.children.length}  />
      </div>
      {/* communication preferance */}
      <Link href={'/profile/user/1928742173/communication'} className="rounded-xl bg-white mt-20">
        <MenuLink Menu={Menu.communication}/>
      </Link>
    </div>
  )
};

export default ID;