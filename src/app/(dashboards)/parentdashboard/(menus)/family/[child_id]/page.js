'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import UserImage from "@/components/(general components)/userimage";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import SingleMenuLink from "@/components/(general components)/signlemenulink";


const ChildId = () => {

  const params = useParams();
  const student_id = params.child_id

  let student = ''
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
      {/* back link */}
      <Crumbs url={`parentdashboard/family`} title={'family'}/>
      {/* child id */}
      <UserImage image={`${student.image}`} name={student.name} surname={student.surname}/>
      {/* child information */}
      <MultipleMenu menu={student_info} />
      {/* remove child */}
      <div className="text-red-600">
        <SingleMenuLink title={'Remove Child From Account'} border={true} url={`/parentdashboard/family/${student.id}/remove`}/>
      </div>
      <p className="text-center text-gray-400 text-sm w-[90%] mx-auto pt-3">to reverse this you&apos;d need to go to school to have it relinked</p>
    </div>
  )
}

export default ChildId;