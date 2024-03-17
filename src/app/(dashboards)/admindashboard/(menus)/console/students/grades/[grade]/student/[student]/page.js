'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json';

// components
import Crumbs from "@/components/crumbs";
import UserImage from "@/components/(general components)/userimage";
import SingleMenuLink from "@/components/(general components)/signlemenulink";


const TeacherId = () => {

  const params = useParams();
  const student_id = params.student
  const grade = params.grade

  let student 
  data.students.forEach( teach => {
    if ( teach.id === student_id ) {
      student = teach
    }
  });

  return (
    <div>
      <Crumbs url={`admindashboard/console/students/grades/${grade}`} title={'students'}/>
      <UserImage image={`${student.image}`} name={student.name} surname={student.surname} email={`${student.email}`}/>
      <SingleMenuLink title={`Student ID`} icon={`user-round-blue`} border={true} url={`/admindashboard/console/students/grades/${grade}/student/${student_id}/id`} />
      <p className="py-4"></p>
      <SingleMenuLink title={`Parents`} border={true} icon={`family`} url={`/admindashboard/console/students/grades/${grade}/student/${student_id}/parents`} />
    </div>
  )
};

export default TeacherId;