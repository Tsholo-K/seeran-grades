'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import MultipleMenu from "@/components/(general components)/multiplemenu";


const ID = () => {

  const searchParams = useParams();

  const teacher_id = searchParams.id
  
  let teacher 
  data.teachers.forEach((teach) => {
    if( teach.id === teacher_id ) {
      teacher = teach
    }
  });

  let register 
  data.register_classes.forEach((classroom) => {
    if( classroom.class_id === teacher.register_class ) {
      register = classroom
    }
  });

  const menus = [
      {
        title: 'Name',
        info: `${teacher.name.charAt(0).toUpperCase() + teacher.name.slice(1)}`
      },
      {
        title: 'Surname',
        info:`${teacher.surname.charAt(0).toUpperCase() + teacher.surname.slice(1)}`
      },
      {
        title: 'Phone Number',
        info: `${teacher.phone_number}`
      },
      {
        title: 'Email',
        info: `${teacher.email}`
      },
      {
        title: 'Classroom',
        info: `${register.classroom}`
      }
  ]

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <Crumbs title={'profile settings'} url={`teacherdashboard/profile`} hide={false}/>
      {/* page heading */}
      <PageHeading title={'ID'} />
      {/* personal infomation */}
      <MultipleMenu menu={menus}/>
      {/* communication preferance */}
      <div className="text-red-600 pt-16">
        <SingleMenuLink title={'Communication Prefferance'} icon={''} url={`/teacherdashboard/profile/user/${teacher_id}/communication`} border={true}/>
      </div>
    </div>
  )
};

export default ID;
