'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json';

// components
import Crumbs from "@/components/crumbs";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import PageHeading from "@/components/(general components)/pageheading";


const TeacherId = () => {

  const params = useParams();
  const teacher_id = params.teacher

  let teacher 
  data.teachers.forEach( teach => {
    if ( teach.id === teacher_id ) {
      teacher = teach
    }
  });

  const teacher_info = [
    {
      title: 'Surname',
      icon: false,
      info: `${teacher.surname.charAt(0).toUpperCase() + teacher.surname.slice(1)}`
    },
    {
      title: 'Name',
      icon: false,
      info: `${teacher.name.charAt(0).toUpperCase() + teacher.name.slice(1)}`
    },
    {
      title: 'Email',
      icon: false,
      info: `${teacher.email}`
    },
    {
      title: 'Phone Number',
      icon: false,
      info: `${teacher.phone_number}`
    },
    {
      title: 'Account ID',
      icon: false,
      info: teacher.id
    },
  ];

  return (
    <div>
      <Crumbs url={`admindashboard/console/teachers/profile/${teacher_id}`} title={'teacher profile'} head/>
      <PageHeading title={`ID`} />
      <MultipleMenu menu={teacher_info} />
      <p className="pb-4"></p>
      <SingleMenuLink title={`remove account`} icon={`remove-user`} chevron="red" border={true} url={`/admindashboard/console/teachers/profile/${teacher.id}/id/remove`} />
    </div>
  )
};

export default TeacherId;