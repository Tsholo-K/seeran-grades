'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Classes from '@/components/(classes components)/classes';
import UserMenu from '@/components/(general components)/usermenu';
import Aligner from '@/components/(general components)/aligner';
import MultipleMenuLinks from '@/components/(general components)/multiplemenulinks';
import Subject from '@/components/(general components)/subject';
import SingleMenuLink from "@/components/(general components)/signlemenulink";


const Class = () => {

  const params = useParams();
  const classroom_id = params.class
  const grade = params.grade
  const subject = params.subject
  
  let classroom = []
  data.classes.forEach( (classroo )=> {
    if ( classroo.id ===  classroom_id ) {
      classroom.push(classroo)
    }  
  } )

  let students = []
  classroom[0].students.forEach( student_id => {
    data.students.forEach( student => {
      if ( student.id === student_id) {
          students.push(student)
      }
    });
  });

  const menus = {
    section : [
      {
        title : 'Performance',
        url : `/teacherdashboard/registerclass/activities`,
        icon : `performance`
      },
      {
          title : 'Activities',
          url : `/teacherdashboard/registerclass/activities`,
          icon : `eye`
      },
      {
        title : 'Assessments',
        url : `/teacherdashboard/registerclass/activities`,
        icon : `calendar-clock`
      },
    ]
}

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <Aligner/>
      <Crumbs url={`admindashboard/console/grades/${grade}/${subject}`} title={'dashboard'} hide={true}  heading={`register class`}/>
      {/* transcripts */}
      <Classes classrooms={classroom} teacher={false} subject={false} url={false}/>
      <Subject title={`subject`} subject={`${classroom[0].subject}`} icon={`${classroom[0].icon}`} />
      <MultipleMenuLinks menu={menus} />
      <p className='text-sm text-gray-400 mt-6 pl-2 pb-2'>students</p>
      <SingleMenuLink title={`Add Student`} border={true} icon={`users`} />
      <div className='mt-3 py-1 rounded-xl bg-white'>
        <UserMenu all_users={students} dashboard={'admin'} section={'registerclass/student'} grade={false}/>
      </div>
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto py-10"></p>
    </div>
  )
};

export default Class;