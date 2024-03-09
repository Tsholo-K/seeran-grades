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
        url: '/teacherdashboard/profile/user/2938438420',
      },
      {
        title: 'Sign-in And Security',
        icon: 'fingerprint',
        url: '/teacherdashboard/profile/security',
      },
    ]
  }
];

const ProfileSettings = () => {

  const teacher_id = '2938438420'
  let teacher 
  data.teachers.forEach((teach) => {
    if( teach.id === teacher_id ) {
      teacher = teach
    }
  });

  return (
    <div className="">
      {/* back link */}
      <Crumbs title={'dashboard'} url={`teacherdashboard`} hide={true}/>
      {/* profile info section */}
      <UserImage image={teacher.image} name={teacher.name} surname={teacher.surname} email={teacher.email}/>
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