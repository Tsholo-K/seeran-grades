'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import UserImage from "@/components/(general components)/userimage";
import Button from "@/components/(general components)/button";

const RemoveChild = () => {

  const params = useParams();
  const student_id = params.child_id

  let student
  data.students.forEach( child => {
    if ( child.id === student_id ) {
      student = child
    }
  });
  
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <Crumbs url={`parentdashboard/family/${student.id}`} title={'child id'}/>
      {/* page heading */}
      <div className="lg:hidden">
        <PageHeading title={'Remove Child'} />
      </div>
      {/* child id */}
      <UserImage image={`${student.image}`} name={student.name} surname={student.surname} />
      <p className="text-center text-gray-400 text-sm w-[90%] mx-auto mb-24">
        you are about to remove this child from your account, to reverse this you&apos;d need to go to school to have it relinked
      </p>
      {/* button */}
      <Button title={'confirm'} type={'submit'} />
      <p className="text-center text-red-500 text-sm w-[90%] mx-auto pt-3">this cannot be reversed on the platform</p>
    </div>
  )
}

export default RemoveChild;