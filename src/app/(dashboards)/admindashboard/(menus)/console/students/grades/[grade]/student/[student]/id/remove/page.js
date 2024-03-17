'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import UserImage from "@/components/(general components)/userimage";
import Button from "@/components/(general components)/button";

const RemoveTeacher = () => {

  const params = useParams();
  const student_id = params.student;
  const grade = params.grade;

  let student 
  data.students.forEach( teach => {
    if ( teach.id === student_id ) {
      student = teach
    }
  });
  
  return (
    <div>
      <Crumbs url={`admindashboard/console/students/grades/${grade}/student/${student_id}/id`} title={'student ID'} heading={`remove student`}/>
      <div className="lg:hidden">
        <PageHeading title={'Remove Student'} />
      </div>
      <UserImage image={`${student.image}`} name={student.name} surname={student.surname} />
      <p className="text-center text-gray-400 text-sm w-[90%] mx-auto mb-10">you are about to remove this student from this account</p>
      <Button title={'confirm'} type={'submit'} />
    </div>
  )
}

export default RemoveTeacher;