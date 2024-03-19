'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json';

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import Classes from "@/components/(classes components)/classes";
import MultipleMenu from "@/components/(general components)/multiplemenu";


const Grade = () => {

  const params = useParams();
  const grade = params.grade;
  const subject_id = params.subject;

  let grade_level
  data.grade.forEach( (level) => {
      if ( level.grade === grade ) {
          grade_level = level
      }
  });

  let subject_name
  grade_level.subjects.forEach( sub => {
    if ( sub.id === subject_id ) {
      subject_name = sub.subject
    }
  });

  const subject_info = [
    {
        title: `Learners`,
        info: `${grade_level.learners.length}`
    },
    {
        title: `Teachers`,
        info: `${grade_level.teachers.length}`
    },
    {
        title: `Groups`,
        info: `${grade_level.subjects.length}`
    }
  ]

  return (
    <div className="w-full">
      <Crumbs url={`admindashboard/console/grades/${grade}`} title={`grade ${grade}`} heading={`${subject_name} classes`} />
      <PageHeading title={`Grade ${grade}`} subheading={`${subject_name}`}/>
      <MultipleMenu menu={subject_info}/>
      <SingleMenuLink title={`Set Assessment`} url={`/admindashboard/console/grades/${grade}/${subject_id}/setassessment`} icon={`calendar-clock`} border={true}/>
      <p className={`text-sm text-gray-400 text-center pt-1`}>grade wide assessment setting</p>
      <p className="pt-10 pb-3 pl-2 text-sm text-gray-400">classes</p>
      <SingleMenuLink title={`Add Class`} icon={`class`} url={`/admindashboard/console/grades/${grade}/${subject_id}/addclass`} border={true}/>
      <p className="py-3"></p>
      <Classes dashbaord={`admin`} section={`console/grades/${grade}/${subject_id}`} classrooms={data.classes} subject={false} teacher={false} grade={false}/>
      <p className=" text-sm w-[80%] text-gray-400 text-center mx-auto py-10">that&apos;s all subjects</p>
    </div>
  )
};

export default Grade;