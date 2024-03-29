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
      <Crumbs url={`admindashboard/console/admins`} title={'admins'}/>
      {/* child id */}
      <UserImage image={`${admin.image}`} name={admin.name} surname={admin.surname} email={`${admin.email}`}/>
      <p className="pb-4"></p>
      <SingleMenuLink title={`Admin ID`} icon={`user-round-blue`}  border={true} url={`/admindashboard/console/admins/profile/${admin.id}/id`} />
    </div>
  )
};

export default TeacherId;