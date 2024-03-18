'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json';

// components
import Crumbs from "@/components/crumbs";
import UserImage from "@/components/(general components)/userimage";
import MultipleMenuLinks from "@/components/(general components)/multiplemenulinks";


const StudentProfile = () => {

  const params = useParams();
  const student_id = params.student
  const grade = params.grade

  let student 
  data.students.forEach( teach => {
    if ( teach.id === student_id ) {
      student = teach
    }
  });

  const menulinks = {
    section : [
      {
        title: "Student ID",
        icon: "user-round-blue",
        url: `/admindashboard/console/students/grades/${grade}/student/${student_id}/id`
      },
      {
        title: "Parents",
        icon: "family",
        url: `/admindashboard/console/students/grades/${grade}/student/${student_id}/parents`
      }
    ]
  }

  return (
    <div>
      <Crumbs url={`admindashboard/console/students/grades/${grade}`} title={'students'}/>
      <UserImage image={`${student.image}`} name={student.name} surname={student.surname} email={`${student.email}`}/>
      <p className="py-3"></p>
      <MultipleMenuLinks menu={menulinks}/>
    </div>
  )
};

export default StudentProfile;