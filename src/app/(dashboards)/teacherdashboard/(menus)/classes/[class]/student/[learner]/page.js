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
  const class_id = params.class

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
        url: `/teacherdashboard/classes/${class_id}/student/${student.id}/log`,
        icon : "eye"
      },
      {
        title: "Parents",
        url: `/teacherdashboard/classes/${class_id}/student/${student.id}/parents`,
        icon : "family"
      },
    ]
  }

  return (
    <div>
      <Aligner/>
      <Crumbs url={`teacherdashboard/classes/${class_id}`} title={'class'} heading={`student profile`}/>
      {/* child id */}
      <UserImage image={`${student.image}`} name={student.name} surname={student.surname}/>
      <p className="py-2"></p>
      <SingleMenuLink title={'Student ID'} border={true} icon={'user-round-blue'} url={`/teacherdashboard/classes/${class_id}/student/${student.id}/profile`}/>
      <p className="py-2"></p>
      <MultipleMenuLinks menu={menulinks} />
    </div>
  )
};

export default StudentId;