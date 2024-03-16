'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import UserImage from "@/components/(general components)/userimage";
import Button from "@/components/(general components)/button";

const RemoveTeacher = () => {

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
      <Crumbs url={`admindashboard/console/teachers/profile/${teacher_id}/id`} title={'teacher ID'} heading={`remove teacher`}/>
      <div className="lg:hidden">
        <PageHeading title={'Remove Teacher'} />
      </div>
      <UserImage image={`${teacher.image}`} name={teacher.name} surname={teacher.surname} />
      <p className="text-center text-gray-400 text-sm w-[90%] mx-auto mb-10">you are about to remove this teacher from this account</p>
      <Button title={'confirm'} type={'submit'} />
    </div>
  )
}

export default RemoveTeacher;