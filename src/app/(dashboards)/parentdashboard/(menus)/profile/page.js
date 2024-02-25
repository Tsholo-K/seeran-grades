// dummy data
import data from '@/app/(dashboards)/dummydata.json'

//components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/pageheading";
import UserImage from "@/components/userimage";
import SingleMenuLink from "@/components/signlemenulink";
import MultipleMenuLinks from "@/components/multiplemenulinks";

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
      <Crumbs title={'dashboard'} url={`parentdashboard`} hide={true}/>
      {/* page heading */}
      <PageHeading title={'Profile Settings'} />
      {/* profile info section */}
      <UserImage image={parent_user.img} />
      <h2 className="w-full text-center text-3xl lg:text-4xl">{parent_user.name.charAt(0).toUpperCase() + parent_user.name.slice(1)} {parent_user.surname.charAt(0).toUpperCase() + parent_user.surname.slice(1)}</h2>
      <p className="w-full text-center text-gray-400 pb-4">{parent_user.email}</p>
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