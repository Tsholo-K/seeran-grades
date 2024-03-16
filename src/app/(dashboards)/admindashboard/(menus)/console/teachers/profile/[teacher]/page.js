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
  const teacher_id = params.teacher

  let teacher 
  data.teachers.forEach( teach => {
    if ( teach.id === teacher_id ) {
      teacher = teach
    }
  });

  return (
    <div>
      <Crumbs url={`admindashboard/console/teachers`} title={'teachers'}/>
      <UserImage image={`${teacher.image}`} name={teacher.name} surname={teacher.surname} email={`${teacher.email}`}/>
      <p className="pb-0"></p>
      <SingleMenuLink title={`Teacher ID`} icon={`user-round-blue`} border={true} url={`/admindashboard/console/teachers/profile/${teacher.id}/id`} />
      <p className="py-4"></p>
      <SingleMenuLink title={`timetable`} url={``} icon={`time-table`} border={true} />
    </div>
  )
};

export default TeacherId;