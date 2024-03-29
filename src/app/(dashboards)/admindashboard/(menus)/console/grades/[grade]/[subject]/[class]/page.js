'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json';

// components
import Crumbs from "@/components/crumbs";
import Classes from '@/components/(classes components)/classes';
import UserMenu from '@/components/(general components)/usermenu';
import MultipleMenuLinks from '@/components/(general components)/multiplemenulinks';
import Subject from '@/components/(general components)/subject';
import SingleMenuLink from "@/components/(general components)/signlemenulink";


const Class = () => {

  const params = useParams();
  const class_id = params.class
  const grade = params.grade
  const subject = params.subject
  
  let classroom = []
  data.classes.forEach( (classroo )=> {
    if ( classroo.id ===  class_id ) {
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

  const menulinks = {
    section : [
      {
        title : 'Performance',
        url : `/admindashboard/console/grades/${grade}/${subject}/${class_id}/performance`,
        icon : `performance`
      },
      {
          title : 'Activities',
          url : `/admindashboard/console/grades/${grade}/${subject}/${class_id}/activities`,
          icon : `eye`
      }
    ]
  }

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <Crumbs url={`admindashboard/console/grades/${grade}/${subject}`} title={'classes'} heading={`${classroom[0].subject}, group ${classroom[0].group}`}/>
      {/* transcripts */}
      <Classes classrooms={classroom} teacher={false} subject={false} url={false}/>
      <Subject title={`subject`} subject={`${classroom[0].subject}`} icon={`${classroom[0].icon}`} />
      <MultipleMenuLinks menu={menulinks} />
      <p className='text-sm text-gray-400 mt-6 pl-2 pb-3'>students</p>
      <SingleMenuLink title={`Add Student`} border={true} icon={`users`} url={`/admindashboard/console/grades/${grade}/${subject}/${class_id}/addstudent`} />
      <div className='mt-6 py-1 rounded-xl bg-white'>
        <UserMenu all_users={students} dashboard={'admin'} section={`console/grades/${grade}/${subject}/${class_id}/student`} grade={false}/>
      </div>
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto py-10"></p>
    </div>
  )
};

export default Class;