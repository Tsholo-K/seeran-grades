import Image from "next/image";
import Link from "next/link";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'
import Crumbs from "@/components/crumbs";

const MenuLinks = {
  personalinformation : {
    title: 'Personal Information',
    icon: 'book-lock',
    url: 'parentdashboard/profile/user/1928742173',
  },
  signinandsecurity : {
    title: 'Sign-in And Security',
    icon: 'fingerprint',
    url: 'parentdashboard/profile/security',
  },
  signout : {
    title: 'Sign Out',
    icon: 'log-out',
    url: 'loggedout',
  }
};

const MenuLink = ({ menu }) => {
  return (
    <Link href={`/${menu.url}`} className="flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <Image src={`/${menu.icon}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
      <p className={`w-full`}>{menu.title}</p>
      <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
    </Link>
  )
};


const ProfileInfo = () => {

  const parent_user = data.parent

  return (
    <div className="w-fit my-10 mx-auto">
      <div className="mx-auto w-fit pb-4">
          <Image priority src={`/${parent_user.img}`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-40 max-w-40" />
      </div>
      <h2 className="w-full text-center text-2xl">{parent_user.name.charAt(0).toUpperCase() + parent_user.name.slice(1)} {parent_user.surname.charAt(0).toUpperCase() + parent_user.surname.slice(1)}</h2>
      <p className="w-full text-center text-gray-400">{parent_user.email}</p>
    </div>
  )
};


const ProfileSettings = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <Crumbs title={'dashboard'} url={`parentdashboard`} hide={true}/>
      {/* page heading */}
      <div>
        <h1 className="w-full text-center pb-5 text-4xl lg:text-8xl">Profile Settings</h1>
      </div>
      {/* profile info section */}
      <ProfileInfo/>
      {/* menulinks section */}
      <div className="rounded-xl bg-white">
        <MenuLink menu={MenuLinks.personalinformation}/>
        <hr className="mx-5"></hr>
        <MenuLink menu={MenuLinks.signinandsecurity}/>
      </div>
      {/* sign out */}
      <div className="rounded-xl bg-white mt-12">
        <MenuLink menu={MenuLinks.signout}/>
      </div>
    </div>
  )
};

export default ProfileSettings;