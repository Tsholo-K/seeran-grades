'use client';

import Image from "next/image";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// compopnents
import Crumbs from "@/components/crumbs";
import MultipleMenu from "@/components/(general components)/multiplemenu";


const Activity = () => {

  const param = useParams();
  const activity_id = param.activity

  let log
  data.activities.forEach( activity => {
    if( activity.id === activity_id ) {
      log = activity
    }
  });

  let student
  data.students.forEach( stu => {
    if ( stu.id === log.student ) {
      student = stu
    }
  })

  let teacher
  data.teachers.forEach( teach => {
    if ( teach.id === log.logger ) {
      teacher = teach
    }
  })

  const activity_info = [
    {
      title: 'Logged by',
      info: `${teacher.name.charAt(0).toUpperCase() + teacher.name.slice(1)} ${teacher.surname.charAt(0).toUpperCase() + teacher.surname.slice(1)}`
    },
    {
      title: 'Recipient',
      info: `${student.name.charAt(0).toUpperCase() + student.name.slice(1)} ${student.surname.charAt(0).toUpperCase() + student.surname.slice(1)}`
    },
    {
      title: 'Date issued',
      info: log.date_logged
    }
  ]

  return (
    <div>
      <Crumbs title={'logs'} url={'parentdashboard/activities'}/>
      <Image priority src={`/${log.icon}.svg`} alt="profile icon" width={30} height={30} className="h-36 w-auto lg:h-52 mx-auto" />
      <p className="text-sm lg:text-base text-gray-500 pt-3 w-full text-center">{log.activity}</p>
      <div className="py-4 mb-10">
        <p className=" text-sm lg:text-base pl-2 pb-1 text-gray-400">record</p>
        <div className="relative rounded-xl bg-white py-2">
          <p className="w-full py-1 px-3 opacity-80 text-center">
            {log.record}
          </p>
        </div>
      </div>
      <MultipleMenu menu={activity_info} />
    </div>
  )
};

export default Activity;