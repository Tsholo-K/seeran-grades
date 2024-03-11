// dummy data
import data from '@/app/(dashboards)/dummydata.json'

//components
import Crumbs from "@/components/crumbs";
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
        url: '/admindashboard/profile/user/1928742173',
      },
      {
        title: 'Sign-in And Security',
        icon: 'fingerprint',
        url: '/admindashboard/profile/security',
      },
    ]
  }
];

const ProfileSettings = () => {

  const admin_user = data.parents[0]

  return (
    <div>
      {/* back link */}
      <Crumbs title={'dashboard'} url={`admindashboard`} hide={true}/>
      {/* profile info section */}
      <UserImage image={admin_user.image} name={admin_user.name} surname={admin_user.surname} email={admin_user.email}/>
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