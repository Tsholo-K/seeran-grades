'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Classes from '@/components/(classes components)/classes';
import SingleMenuLink from '@/components/(general components)/signlemenulink';
import UserMenu from '@/components/(general components)/usermenu';
import MultipleMenuLinks from '@/components/(general components)/multiplemenulinks';


const MyRegisterClass = () => {

  const params = useParams();
  const grade = params.grade
  const class_id = params.class

  const teacher = '2938438420';
  
  let register_classroom = []
  data.register_classes.forEach( (cls) => {
    if (cls.teacher_id === teacher) {
      register_classroom.push(cls)
    }
  });

  let students = []
  register_classroom[0].students.forEach( student_id => {
    data.students.forEach( student => {
      if ( student.id === student_id) {
          students.push(student)
      }
    });
  });

  const menus = {
    section : [
        {
            title : 'Attendance Register',
            url : `/admindashboard/console/grades/${grade}/registerclasses/${class_id}/attendance`,
            icon: `take-attendance`
        },
        {
            title : 'Activities',
            url : `/admindashboard/console/grades/${grade}/registerclasses/${class_id}/activities`,
            icon : `eye`
        }
    ]
  }

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <Crumbs url={`admindashboard/console/grades/${grade}/registerclasses`} title={'register classes'} heading={`register class`}/>
      {/* transcripts */}
      <Classes classrooms={register_classroom} teacher={false} subject={false} url={false}/>
      <MultipleMenuLinks menu={menus} />
      <p className='text-sm text-gray-400 mt-3 pl-2 pb-3'>students</p>
      <SingleMenuLink title={`Add Student`} url={`/admindashboard/console/grades/${grade}/registerclasses/${class_id}/addstudent`} border={true} icon={`users`} />
      <p className="py-2"></p>
      <div className='mt-3 py-1 rounded-xl bg-white'>
        <UserMenu all_users={students} dashboard={'admin'} section={`console/grades/${grade}/registerclasses/${class_id}/student`} grade={false}/>
      </div>
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto py-10"></p>
    </div>
  )
};

export default MyRegisterClass;