'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json';

// components
import Crumbs from "@/components/crumbs";
import UserImage from "@/components/(general components)/userimage";
import MultipleMenu from "@/components/(general components)/multiplemenu";


const TeacherId = () => {

  const params = useParams();
  const teacher_id = params.teacher
  const class_id = params.class

  let teacher 
  data.teachers.forEach( teach => {
    if ( teach.id === teacher_id ) {
      teacher = teach
    }
  });

  const teacher_info = [
    {
      title: 'Name',
      icon: false,
      info: `${teacher.name.charAt(0).toUpperCase() + teacher.name.slice(1)}`
    },
    {
      title: 'Surname',
      icon: false,
      info: `${teacher.surname.charAt(0).toUpperCase() + teacher.surname.slice(1)}`
    },
    {
      title: 'Teacher number',
      icon: false,
      info: teacher.id
    },
  ];

  return (
    <div>
      {/* back link */}
      <Crumbs url={`studentdashboard/classes/${class_id}`} title={'class'}/>
      {/* child id */}
      <UserImage image={`${teacher.image}`} name={teacher.name} surname={teacher.surname} email={`${teacher.email}`}/>
      <p className="pb-4"></p>
      <MultipleMenu menu={teacher_info} />
    </div>
  )
};

export default TeacherId;