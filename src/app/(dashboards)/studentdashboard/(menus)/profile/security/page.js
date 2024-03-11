// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import Menu from "@/components/(general components)/menu";
import Link from 'next/link';


const Security = () => {

  const student_id = "220212349"
  
  let student 
  data.students.forEach(( stu ) => {
    if( stu.id === student_id ) {
      student = stu
    }
  });

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <Crumbs url={'studentdashboard/profile'} title={'profile settings'}/>
      {/* page heading */}
      <PageHeading title={'Sign-in and Security'} subheading={'these can be used to sign-in into your account'} />
      {/* email and phone number */}
      <div className="rounded-xl bg-white mt-20 ">
        <Link href={'/studentdashboard/profile/security/email'}>
          <Menu title={'Email'} icon={true} info={`${student.email}`} />
        </Link>
        <hr className="mx-5"></hr>
        <Link href={'/studentdashboard/profile/security/phonenumber'}>
          <Menu title={'Phone Number'} icon={true} info={`${student.phone_number}`}/>
        </Link>
      </div>
      {/* password & mfa */}
      <div className="rounded-xl bg-white mt-20 ">
        {/* two factor authentication */}
        <SingleMenuLink title={'Two Factor Authentication'} url={'/studentdashboard/profile/security/mfa'} />
        <hr className="mx-5"></hr>
        {/* password change */}
        <div className="text-red-600">
          <SingleMenuLink title={'Change Password'} url={'/studentdashboard/profile/security/password'} />
        </div>
      </div>
    </div>
  )
};

export default Security;