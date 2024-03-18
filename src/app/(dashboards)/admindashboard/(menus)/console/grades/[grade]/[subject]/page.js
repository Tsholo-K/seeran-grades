'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import Classes from "@/components/(classes components)/classes";


const Grade = ({}) => {

  const params = useParams();
  const grade = params.grade
  const subject = params.subject

  let grade_level
  data.grade.forEach( (level) => {
      if ( level.grade === grade ) {
          grade_level = level
      }
  });

  let subject_name
  grade_level.subjects.forEach( sub => {
    if ( sub.id === subject ) {
      subject_name = sub.subject
    }
  })

  return (
    <div className="w-full">
      <Crumbs url={`admindashboard/console/grades/${grade}`} title={`grade ${grade}`} heading={`${subject_name} classes`} />
      <PageHeading title={`Grade ${grade}`} subheading={`${subject_name}`}/>
      <p className="pt-4 pl-2 text-sm text-gray-400">classes</p>
      <Classes dashbaord={`admin`} section={`console/grades/${grade}/${subject}`} classrooms={data.classes} subject={false} teacher={false} grade={false}/>
      <SingleMenuLink title={`Add Class`} icon={`class`} border={true}/>
      <p className=" text-sm w-[80%] text-gray-400 text-center mx-auto py-10">that&apos;s all subjects</p>
    </div>
  )
};

export default Grade;