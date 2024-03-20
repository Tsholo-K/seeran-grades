'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import MultipleMenu from "@/components/(general components)/multiplemenu";


const ChildId = () => {

  const params = useParams();
  const student_id = params.student
  const grade = params.grade

  let student 
  data.students.forEach( child => {
    if ( child.id === student_id ) {
      student = child
    }
  });

  const student_info = [
    {
      title: 'Name',
      icon: false,
      info: `${student.name.charAt(0).toUpperCase() + student.name.slice(1)}`
    },
    {
      title: 'Surname',
      icon: false,
      info: `${student.surname.charAt(0).toUpperCase() + student.surname.slice(1)}`
    },
    {
      title: 'Date of birth',
      icon: false,
      info: student.date_of_birth
    },
    {
      title: 'Grade',
      icon: false,
      info: student.grade
    },
    {
      title: 'Student Number',
      icon: false,
      info: student.id
    },
  ];

  return (
    <div>
      <Crumbs url={`admindashboard/fees/${grade}/${student_id}`} title={'student'} heading={`student ID`}/>
      <PageHeading title={'ID'}  />
      {/* child information */}
      <MultipleMenu menu={student_info} />
    </div>
  )
}

export default ChildId;