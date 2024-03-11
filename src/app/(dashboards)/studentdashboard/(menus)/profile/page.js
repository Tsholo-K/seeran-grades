// dummy data
import data from '@/app/(dashboards)/dummydata.json'

//components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import UserImage from "@/components/(general components)/userimage";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import MultipleMenuLinks from "@/components/(general components)/multiplemenulinks";

const menuitems = [
  {
    // we need it to be an array so thats why
    section : [
      {
        title: 'Personal Information',
        icon: 'book-lock',
        url: '/studentdashboard/profile/user/220212349',
      },
      {
        title: 'Sign-in And Security',
        icon: 'fingerprint',
        url: '/studentdashboard/profile/security',
      },
    ]
  }
];

const ProfileSettings = () => {

  const student_id = "220212349"

  let student 
  data.students.forEach((stu) => {
    if( stu.id === student_id ) {
      student = stu
    }
  });

  return (
    <div className="">
      {/* back link */}
      <Crumbs title={'dashboard'} url={`studentdashboard`} hide={true}/>
      {/* profile info section */}
      <UserImage image={student.image} name={student.name} surname={student.surname} email={student.email}/>
      {/* menu links section */}
      {
        menuitems.map( ( item,index ) => (
          <>
            <MultipleMenuLinks key={index} menu={item} />
          </>
        ))
      }
      {/* sign out */}
      <div className="pt-7">
        <SingleMenuLink title={'Sign Out'} icon={'log-out'} url={'/loggedout'} border={true}/>
      </div>
    </div>
  )
};

export default ProfileSettings;