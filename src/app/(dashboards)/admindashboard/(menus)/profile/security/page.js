// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import Menu from "@/components/(general components)/menu";
import Link from 'next/link';


const Security = () => {

  const admin = data.admins[0]

  return (
    <div>
      {/* back link */}
      <Crumbs url={'admindashboard/profile'} title={'profile settings'}/>
      {/* page heading */}
      <PageHeading title={'Sign-in and Security'} subheading={'these can be used to sign-in into your account'} />
      {/* email and phone number */}
      <div className="rounded-xl bg-white mt-20 ">
        <Link href={'/admindashboard/profile/security/email'}>
          <Menu title={'Email'} icon={true} info={`${admin.email}`} />
        </Link>
        <hr className="mx-5"></hr>
        <Link href={'/admindashboard/profile/security/phonenumber'}>
          <Menu title={'Phone Number'} icon={true} info={`${admin.phone_number}`}/>
        </Link>
      </div>
      {/* password & mfa */}
      <div className="rounded-xl bg-white mt-20 ">
        {/* two factor authentication */}
        <SingleMenuLink icon={`authentication`} title={'Two Factor Authentication'} url={'/admindashboard/profile/security/mfa'} />
        <hr className="mx-5"></hr>
        {/* password change */}
        <SingleMenuLink icon={`password-change`} title={'Change Password'} chevron='red' url={'/admindashboard/profile/security/password'} />
      </div>
    </div>
  )
};

export default Security;