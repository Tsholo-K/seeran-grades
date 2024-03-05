'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import MultipleMenu from "@/components/(general components)/multiplemenu";


const ID = () => {

  const searchParams = useParams();

  let parent_user = null
  if( data.parent.id === searchParams.id ){
    parent_user = data.parent
  }
  const menus = [
      {
        title: 'Name',
        info: `${parent_user.name.charAt(0).toUpperCase() + parent_user.name.slice(1)}`
      },
      {
        title: 'Surname',
        info:`${parent_user.surname.charAt(0).toUpperCase() + parent_user.surname.slice(1)}`
      },
      {
        title: 'Phone Number',
        info: `${parent_user.phone_number}`
      },
      {
        title: 'Email',
        info: `${parent_user.email}`
      },
      {
        title: 'Children',
        info: `${parent_user.children.length}`
      },
  ]

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <Crumbs title={'profile settings'} url={`parentdashboard/profile`} hide={false}/>
      {/* page heading */}
      <PageHeading title={'ID'} />
      {/* personal infomation */}
      <MultipleMenu menu={menus}/>
      {/* communication preferance */}
      <div className="text-red-600 pt-16">
        <SingleMenuLink title={'Communication Prefferance'} icon={''} url={'/parentdashboard/profile/user/1928742173/communication'} border={true}/>
      </div>
    </div>
  )
};

export default ID;
