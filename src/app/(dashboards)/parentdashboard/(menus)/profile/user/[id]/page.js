'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import MultipleMenu from "@/components/(general components)/multiplemenu";


const ID = () => {

  const searchParams = useParams();

  let parent_user 
  data.parents.forEach( parent => {
    if( parent.id === searchParams.id ){
      parent_user = parent
    }
  });
  
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
    <div>
      {/* back link */}
      <Crumbs title={'profile settings'} url={`parentdashboard/profile`} hide={false}/>
      {/* page heading */}
      <PageHeading title={'ID'} />
      {/* personal infomation */}
      <MultipleMenu menu={menus}/>
    </div>
  )
};

export default ID;
