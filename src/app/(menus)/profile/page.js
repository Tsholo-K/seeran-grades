import Image from "next/image"
import Link from "next/link"


const MenuLinks = {
  personalinformation : {
    title: 'Personal Information',
    icon: 'book-lock',
    url: 'profile/id',
  },
  signinandsecurity : {
    title: 'Sign-in And Security',
    icon: 'fingerprint',
    url: 'profile/security',
  },
  signout : {
    title: 'Sign Out',
    icon: 'log-out',
    url: 'loggedout',
  }
}

const MenuLink = ({ menu }) => {
  return (
    <Link href={`/${menu.url}`} className="flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <Image src={`/${menu.icon}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
      <p className={`w-full`}>{menu.title}</p>
      <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
    </Link>
  )
}


const User = {
  img: 'profile-icon-1.svg',
  names: 'Surname Name',
  email: 'Email'
}

const ProfileInfo = ({ user }) => {
  return (
    <div className="w-fit my-10 mx-auto">
      <div className="mx-auto w-fit pb-4">
          <Image priority src={`/${user.img}`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-40 max-w-40" />
      </div>
      <h2 className="w-full text-center text-2xl">{user.names}</h2>
      <p className="w-full text-center text-gray-400">{user.email}</p>
    </div>
  )
}


const ProfileSettings = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      <div className="fixed top-0 pt-16 pb-1 w-full bg-gray-100">
        <Link href={'/parentdashboard'} className="flex w-full text-blue-700">
          <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>dashboard
        </Link>
      </div>
      <div>
        <h1 className="w-full text-center pb-5 text-4xl">Profile Settings</h1>
      </div>
      {/* profile info section */}
      <ProfileInfo user={User}/>
      {/* menulinks section */}
      <div className="rounded-xl bg-white">
        <MenuLink menu={MenuLinks.personalinformation}/>
        <hr className="mx-5"></hr>
        <MenuLink menu={MenuLinks.signinandsecurity}/>
      </div>
      <div className="rounded-xl bg-white mt-12">
        <MenuLink menu={MenuLinks.signout}/>
      </div>
    </div>
  )
}

export default ProfileSettings;