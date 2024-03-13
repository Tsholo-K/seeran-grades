'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json';

// components
import Crumbs from "@/components/crumbs";
import UserImage from "@/components/(general components)/userimage";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import MultipleMenuLinks from "@/components/(general components)/multiplemenulinks";
import Aligner from "@/components/(general components)/aligner";


const StudentId = () => {

  const params = useParams();
  const student_id = params.learner

  let student = ''
  data.students.forEach( child => {
    if ( child.id === student_id ) {
      student = child
    }
  });

  const menulinks = {
    section : [
      {
        title: "Log activity",
        url: `/teacherdashboard/registerclass/student/${student.id}/log`,
        icon : "eye"
      },
      {
        title: "Parents",
        url: `/teacherdashboard/registerclass/student/${student.id}/parents`,
        icon : "family"
      },
    ]
  }

  return (
    <div>
      <Aligner/>
      <Crumbs url={`teacherdashboard/registerclass`} title={'class'} heading={`student profile`}/>
      {/* child id */}
      <UserImage image={`${student.image}`} name={student.name} surname={student.surname}/>
      <p className="text-center text-gray-400 text-sm w-[90%] mx-auto py-7"></p>
      <SingleMenuLink title={'Student ID'} border={true} icon={'user-round-blue'} url={`/teacherdashboard/registerclass/student/${student.id}/profile`}/>
      <p className="text-center text-gray-400 text-sm w-[90%] mx-auto py-4"></p>
      <MultipleMenuLinks menu={menulinks} />
    </div>
  )
};

export default StudentId;