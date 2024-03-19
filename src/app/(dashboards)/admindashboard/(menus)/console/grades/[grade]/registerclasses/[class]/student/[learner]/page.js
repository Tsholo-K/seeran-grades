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
  const grade = params.grade
  const class_id = params.class

  let student = ''
  data.students.forEach( child => {
    if ( child.id === student_id ) {
      student = child
    }
  });

  return (
    <div>
      <Aligner/>
      <Crumbs url={`admindashboard/console/grades/${grade}/registerclasses/${class_id}`} title={'register class'} heading={`student profile`}/>
      {/* child id */}
      <UserImage image={`${student.image}`} name={student.name} surname={student.surname}/>
      <p className="text-center text-gray-400 text-sm w-[90%] mx-auto py-4"></p>
      <SingleMenuLink title={'Student ID'} border={true} icon={'user-round-blue'} url={`/admindashboard/console/grades/${grade}/registerclasses/${class_id}/student/${student_id}/id`}/>
    </div>
  )
};

export default StudentId;