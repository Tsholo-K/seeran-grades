'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import UserImage from "@/components/(general components)/userimage";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import Aligner from "@/components/(general components)/aligner";


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
      title: 'Account ID',
      icon: false,
      info: student.id
    },
  ];

  return (
    <div>
      <Aligner/>
      <Crumbs url={`parentdashboard/family/children`} title={'children'} heading={`child profile`}/>
      <UserImage image={`${student.image}`} name={student.name} surname={student.surname}/>
      <MultipleMenu menu={student_info} />
      <SingleMenuLink title={'Remove Child From Account'} chevron="red" icon={`remove-user`} border={true} url={`/parentdashboard/family/children/${student.id}/remove`}/>
      <p className="text-center text-gray-400 text-sm w-[90%] mx-auto pt-1">to reverse this you&apos;d need to go to school to have it relinked</p>
    </div>
  )
}

export default ChildId;