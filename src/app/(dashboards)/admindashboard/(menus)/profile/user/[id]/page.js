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

  let admin 
  data.admins.forEach( adm => {
    if( adm.id === searchParams.id ){
      admin = adm
    }
  });
  
  const menus = [
      {
        title: 'Name',
        info: `${admin.name.charAt(0).toUpperCase() + admin.name.slice(1)}`
      },
      {
        title: 'Surname',
        info:`${admin.surname.charAt(0).toUpperCase() + admin.surname.slice(1)}`
      },
      {
        title: 'Phone Number',
        info: `${admin.phone_number}`
      },
      {
        title: 'Email',
        info: `${admin.email}`
      },
      {
        title: 'Account ID',
        info: `${admin.id}`
      },
  ]

  return (
    <div>
      {/* back link */}
      <Crumbs title={'profile settings'} url={`admindashboard/profile`} />
      {/* page heading */}
      <PageHeading title={'ID'} />
      {/* personal infomation */}
      <MultipleMenu menu={menus}/>
    </div>
  )
};

export default ID;
