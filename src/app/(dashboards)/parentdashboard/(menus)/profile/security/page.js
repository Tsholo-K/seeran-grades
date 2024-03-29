// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import Menu from "@/components/(general components)/menu";
import Link from 'next/link';


const Security = () => {

  const parent_user = data.parents[0]

  return (
    <div>
      {/* back link */}
      <Crumbs url={'parentdashboard/profile'} title={'profile settings'}/>
      {/* page heading */}
      <PageHeading title={'Sign-in and Security'} subheading={'these can be used to sign-in into your account'} />
      {/* email and phone number */}
      <div className="rounded-xl bg-white mt-20 ">
        <Link href={'/parentdashboard/profile/security/email'}>
          <Menu title={'Email'} icon={true} info={`${parent_user.email}`} />
        </Link>
        <hr className="mx-5"></hr>
        <Link href={'/parentdashboard/profile/security/phonenumber'}>
          <Menu title={'Phone Number'} icon={true} info={`${parent_user.phone_number}`}/>
        </Link>
      </div>
      {/* password & mfa */}
      <div className="rounded-xl bg-white mt-20 ">
        {/* two factor authentication */}
        <SingleMenuLink title={'Two Factor Authentication'} url={'/parentdashboard/profile/security/mfa'} />
        <hr className="mx-5"></hr>
        {/* password change */}
        <div className="text-red-600">
          <SingleMenuLink title={'Change Password'} url={'/parentdashboard/profile/security/password'} />
        </div>
      </div>
    </div>
  )
};

export default Security;