'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json';

// components
import Crumbs from "@/components/crumbs";
import UserImage from "@/components/(general components)/userimage";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import Aligner from "@/components/(general components)/aligner";
import SingleMenuLink from "@/components/(general components)/signlemenulink";


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
      <Aligner/>
      <Crumbs url={`studentdashboard/classes/${class_id}`} title={'class'}/>
      {/* child id */}
      <UserImage image={`${teacher.image}`} name={teacher.name} surname={teacher.surname} email={`${teacher.email}`}/>
      <MultipleMenu menu={teacher_info} />
      <p className="pb-4"></p>
      <SingleMenuLink title={`Message`} icon={`admin`} border={true} url={`/studentdashboard/messages/${teacher.id}`} />
      <p className="text-sm text-gray-400 text-center pt-1">this will send you to the messages section</p>
    </div>
  )
};

export default TeacherId;