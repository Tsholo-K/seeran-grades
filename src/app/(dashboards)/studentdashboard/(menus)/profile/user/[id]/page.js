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
  const student_id = searchParams.id
  
  let student 
  data.students.forEach((stu) => {
    if( stu.id === student_id ) {
      student = stu
    }
  });

  const menus = [
      {
        title: 'Name',
        info: `${student.name.charAt(0).toUpperCase() + student.name.slice(1)}`
      },
      {
        title: 'Surname',
        info:`${student.surname.charAt(0).toUpperCase() + student.surname.slice(1)}`
      },
      {
        title: 'Phone Number',
        info: `${student.phone_number}`
      },
      {
        title: 'Email',
        info: `${student.email}`
      },
      {
        title: 'Classroom',
        info: `${student.classroom}`
      }
  ]

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <Crumbs title={'profile settings'} url={`studentdashboard/profile`} hide={false}/>
      {/* page heading */}
      <PageHeading title={'ID'} />
      {/* personal infomation */}
      <MultipleMenu menu={menus}/>
      {/* communication preferance */}
      <div className="text-red-600 pt-16">
        <SingleMenuLink title={'Communication Prefferance'} icon={''} url={`/studentdashboard/profile/user/${student_id}/communication`} border={true}/>
      </div>
    </div>
  )
};

export default ID;
