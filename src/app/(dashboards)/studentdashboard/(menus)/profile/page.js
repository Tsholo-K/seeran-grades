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
        url: '/parentdashboard/profile/user/1928742173',
      },
      {
        title: 'Sign-in And Security',
        icon: 'fingerprint',
        url: '/parentdashboard/profile/security',
      },
    ]
  }
];

const ProfileSettings = () => {

  const parent_user = data.parent

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <Crumbs title={'dashboard'} url={`studentdashboard`} hide={true}/>
      {/* page heading */}
      <PageHeading title={'Profile Settings'} />
      {/* profile info section */}
      <UserImage image={parent_user.img} name={parent_user.name} surname={parent_user.surname} email={parent_user.email}/>
      {/* menu links section */}
      {
        menuitems.map( ( item,index ) => (
          <>
            <MultipleMenuLinks key={index} menu={item} />
          </>
        ))
      }
      {/* sign out */}
      <div className="rounded-xl bg-white mt-12">
        <SingleMenuLink title={'Sign Out'} icon={'log-out'} url={'/loggedout'} />
      </div>
    </div>
  )
};

export default ProfileSettings;