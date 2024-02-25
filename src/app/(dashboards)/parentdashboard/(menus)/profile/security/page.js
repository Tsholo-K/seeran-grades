import Image from "next/image";
import Link from "next/link";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/pageheading";
import MultipleMenu from "@/components/multiplemenu";
import Menu from "@/components/menu";


const Security = () => {

  const user = data.parent

  const userdata = [
    {
      title: 'email and phone number',
      info : `${user.email}`,
      icon: true
    },
    {
      title: 'Phone Number',
      info : `${user.phone_number}`,
      icon: true
    }
  ]

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <Crumbs url={'parentdashboard/profile'} title={'profile settings'}/>
      {/* page heading */}
      <PageHeading title={'Sign-in and Security'} />
      {/* email and phone number */}
      <p className="text-center text-sm text-gray-400">these can be used to sign-in into your account</p>
      <MultipleMenu menu={userdata} />
      {/* password & mfa */}
      <div className="rounded-xl bg-white mt-20 ">
        {/* two factor authentication */}
        <Link href={'/parentdashboard/profile/security/mfa'} >
          <Menu title={'Two Factor Authentication'} icon={true}/>
        </Link>
        <hr className="mx-5"></hr>
        {/* password change */}
        <Link href={'/parentdashboard/profile/security/password'} className="text-[#fe5244]">
          <Menu title={'Change Password'} icon={true}/>
        </Link>
      </div>
    </div>
  )
};

export default Security;