'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json';

// components
import Crumbs from "@/components/crumbs";
import UserImage from "@/components/(general components)/userimage";
import SingleMenuLink from "@/components/(general components)/signlemenulink";


const StudentId = () => {

  const params = useParams();
  const student_id = params.learner
  const classroom_id = params.class
  const grade = params.grade
  const subject = params.subject

  let student = ''
  data.students.forEach( child => {
    if ( child.id === student_id ) {
      student = child
    }
  });

  return (
    <div>
      <Crumbs url={`admindashboard/console/grades/${grade}/${subject}/${classroom_id}`} title={'class'} heading={`student profile`}/>
      {/* child id */}
      <UserImage image={`${student.image}`} name={student.name} surname={student.surname}/>
      <p className="text-center text-gray-400 text-sm w-[90%] mx-auto py-7"></p>
      <SingleMenuLink title={'Student ID'} border={true} icon={'user-round-blue'} url={`/admindashboard/console/grades/${grade}/${subject}/${classroom_id}/student/${student_id}/profile`}/>
      <p className="text-center text-gray-400 text-sm w-[90%] mx-auto py-4"></p>
    </div>
  )
};

export default StudentId;