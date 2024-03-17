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

  let student 
  data.students.forEach( teach => {
    if ( teach.id === student_id ) {
      student = teach
    }
  });

  return (
    <div>
      <Crumbs url={`admindashboard/console/students`} title={'students'}/>
      <UserImage image={`${student.image}`} name={student.name} surname={student.surname} email={`${student.email}`}/>
      <p className="pb-0"></p>
      <SingleMenuLink title={`Student ID`} icon={`user-round-blue`} border={true} url={`/admindashboard/console/students/profile/${student_id}/id`} />
      <p className="py-4"></p>
    </div>
  )
};

export default TeacherId;