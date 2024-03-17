'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json';

// components
import Crumbs from "@/components/crumbs";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import PageHeading from "@/components/(general components)/pageheading";


const StudentId = () => {

  const params = useParams();
  const student_id = params.student

  let student 
  data.students.forEach( teach => {
    if ( teach.id === student_id ) {
      student = teach
    }
  });

  const student_info = [
    {
      title: 'Surname',
      icon: false,
      info: `${student.surname.charAt(0).toUpperCase() + student.surname.slice(1)}`
    },
    {
      title: 'Name',
      icon: false,
      info: `${student.name.charAt(0).toUpperCase() + student.name.slice(1)}`
    },
    {
      title: 'Email',
      icon: false,
      info: `${student.email}`
    },
    {
      title: 'Phone Number',
      icon: false,
      info: `${student.phone_number}`
    },
    {
      title: 'Account ID',
      icon: false,
      info: student.id
    },
  ];

  return (
    <div>
      <Crumbs url={`admindashboard/console/students/profile/${student_id}`} title={'student profile'} head/>
      <PageHeading title={`ID`} />
      <MultipleMenu menu={student_info} />
      <p className="pb-4"></p>
      <SingleMenuLink title={`remove account`} icon={`remove-user`} chevron="red" border={true} url={`/admindashboard/console/students/profile/${student_id}/id/remove`} />
    </div>
  )
};

export default StudentId;