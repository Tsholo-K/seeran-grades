'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json';

// components
import Crumbs from "@/components/crumbs";
import UserImage from "@/components/(general components)/userimage";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import Aligner from "@/components/(general components)/aligner";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import PageHeading from "@/components/(general components)/pageheading";


const TeacherId = () => {

  const params = useParams();
  const admin_id = params.admin

  let admin 
  data.admins.forEach( teach => {
    if ( teach.id === admin_id ) {
      admin = teach
    }
  });

  const admin_info = [
    {
      title: 'Surname',
      icon: false,
      info: `${admin.surname.charAt(0).toUpperCase() + admin.surname.slice(1)}`
    },
    {
      title: 'Name',
      icon: false,
      info: `${admin.name.charAt(0).toUpperCase() + admin.name.slice(1)}`
    },
    {
      title: 'Email',
      icon: false,
      info: `${admin.email}`
    },
    {
      title: 'Phone Number',
      icon: false,
      info: `${admin.phone_number}`
    },
    {
      title: 'Account ID',
      icon: false,
      info: admin.id
    },
  ];

  return (
    <div>
      <Aligner/>
      <Crumbs url={`admindashboard/console/admins/profile/${admin_id}`} title={'admin profile'}/>
      <PageHeading title={`ID`} />
      <MultipleMenu menu={admin_info} />
      <p className="pb-4"></p>
      <SingleMenuLink title={`remove account`} icon={`remove-user`} chevron="red" border={true} url={`/admindashboard/console/admins/profile/${admin.id}/id/remove`} />
      <p className="text-sm text-gray-400 text-center pt-1">only the principal can remove admin accounts</p>
    </div>
  )
};

export default TeacherId;