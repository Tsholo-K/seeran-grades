// dummy data
import data from '@/app/(dashboards)/dummydata.json'

//components
import Crumbs from "@/components/crumbs";
import UserImage from "@/components/(general components)/userimage";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import MultipleMenuLinks from "@/components/(general components)/multiplemenulinks";


const ProfileSettings = () => {

  const admin_user = data.admins[0]

  const menuitems = {
      section : [
        {
          title: 'Personal Information',
          icon: 'book-lock',
          url: `/admindashboard/profile/user/${admin_user.id}`,
        },
        {
          title: 'Sign-in And Security',
          icon: 'fingerprint',
          url: '/admindashboard/profile/security',
        },
      ]
  };

  return (
    <div>
      {/* back link */}
      <Crumbs title={'dashboard'} url={`admindashboard`} hide={true}/>
      {/* profile info section */}
      <UserImage image={admin_user.image} name={admin_user.name} surname={admin_user.surname} email={admin_user.email}/>
      {/* menu links section */}
      <MultipleMenuLinks menu={menuitems} />
      <SingleMenuLink title={`School Settings`} url={`/admindashboard/profile/schoolsettings`} icon={`school-settings`} border={true}/>
      <p className="pt-7"></p>
      <SingleMenuLink title={'Sign Out'} chevron='red' icon={'log-out'} url={'/loggedout'} border={true}/>
    </div>
  )
};

export default ProfileSettings;