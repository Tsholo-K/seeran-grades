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

  return (
    <div className="w-full">
      <Crumbs url={`admindashboard/console/grades/${grade}`} title={`grade ${grade}`} heading={`${subject} classes`} />
      <PageHeading title={`Grade ${grade}`} subheading={`${subject}`}/>
      <p className="py-4"></p>
      <SingleMenuLink title={`Add Class`} icon={`class`} border={true}/>
      <p className="pt-8 pl-2 text-sm text-gray-400">{subject} classes</p>
      <Classes dashbaord={`admin`} section={`console/grades/${grade}/${subject}`} classrooms={data.classes} subject={false} teacher={false} grade={false}/>
      <p className=" text-sm w-[80%] text-gray-400 text-center mx-auto py-10">that&apos;s all subjects</p>
    </div>
  )
};

export default Grade;