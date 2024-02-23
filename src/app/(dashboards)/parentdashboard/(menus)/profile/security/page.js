import Image from "next/image";
import Link from "next/link";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'


const MenuLink = ({ menu, user_info=null }) => {
  return (
    <div className="relative flex py-3 gap-1 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p>{menu}</p>
      <p className="text-gray-400 absolute right-9">{user_info}</p>
      <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit absolute right-3"/>
    </div>
  )
};


const Security = () => {

  const user = data.parent

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <div className="fixed top-0 pt-16 pb-1 w-full bg-gray-100">
        <Link href={'/profile'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>profile</Link>
      </div>
      {/* page heading */}
      <div>
        <h1 className="w-full text-center pb-20 text-4xl">Sign-in and<br></br> Security</h1>
      </div>
      {/* email and phone number */}
      <div className="relative">
        <p className="text-sm text-gray-400 pl-2 pb-1">email and phone number</p>
        <div className="rounded-xl bg-white">
          {/* email */}
          <Link href={'/profile/security/email'}>
            <MenuLink menu={'Email'} user_info={user.email}/>
          </Link>
          <hr className="mx-5"></hr>
          {/* phone number */}
          <Link href={'/profile/security/phonenumber'}>
            <MenuLink menu={'Phone Number'} user_info={user.phone_number}/>
          </Link>
        </div>
        <p className="text-gray-400 mx-auto text-center text-sm pt-1">these can be used to sign-in to your account</p>
      </div>
      <div className="rounded-xl bg-white mt-20 ">
        {/* two factor authentication */}
        <Link href={'/profile/security/mfa'} >
          <MenuLink menu={'Two Factor Authentication'} user_info={user.mfa_enabled}/>
        </Link>
        <hr className="mx-5"></hr>
        {/* password change */}
        <Link href={'/profile/security/password'} className="text-blue-700">
          <MenuLink menu={'Password'}/>
        </Link>
      </div>
    </div>
  )
};

export default Security;