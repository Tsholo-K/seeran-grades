'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Subject from "@/components/(general components)/subject";
import Button from "@/components/(general components)/button";
import PageHeading from "@/components/(general components)/pageheading";


const LeanerGrading = () => {

  const params = useParams();
  const class_id = params.class
  const transcript_id = params.transcript
  const assessment_id = params.assessment;

  let assessment 
    data.assessments.forEach( assess => {
      if ( assess.id === assessment_id ) {
          assessment = assess
      }
  });

  let transcript
  data.grades.forEach(( grade ) => {
    if ( grade.id === transcript_id ) {
      transcript = grade
    }
  })

  let student
  data.students.forEach(( child ) => {
    if ( child.id === transcript.submitted_by ) {
      student = child
    }
  })

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <Crumbs url={`teacherdashboard/classes/${class_id}/grading/${assessment_id}`} title={'class'}/>
      <Subject title="Student" icon={'user-round-blue'} subject={`${student.name.charAt(0).toUpperCase() + student.name.slice(1)} ${student.surname.charAt(0).toUpperCase() + student.surname.slice(1)}`}/>
      <p className=" text-sm lg:text-base pl-2 pb-1 text-gray-400 pt-7">score</p>
      {
        transcript.marked 
        ?
        <>
          <div className="relative rounded-xl text-gray-500 bg-white">
            <p type={'number'} className="py-2 px-3 w-full">{transcript.score}</p>
            <p className="absolute right-4 top-2">/ {transcript.total}</p>
          </div>
          <p className="text-center text-sm text-gray-400 pt-1">already graded</p>
          <p className=" text-sm lg:text-base pl-2 pb-1 text-gray-400 pt-7">message</p>
          <p className="relative rounded-xl bg-white p-3 text-gray-500 min-h-20">{transcript.message}</p>
        </>
        :
        <>
          <div className="relative rounded-xl bg-white">
            <input type={'number'} className="py-2 px-3 w-full rounded-xl"/>
            <p className="absolute right-4 top-2 text-gray-500">/ {transcript.total}</p>
          </div>
          <p className=" text-sm lg:text-base pl-2 pb-1 text-gray-400 mt-7">message</p>
          <div className="relative h-[100px] rounded-xl bg-white ">
            <textarea className="resize-none rounded-xl h-full w-full p-3" />
          </div>
        </>
      }
      <p className="my-7"></p>
      <Button title={'grade student'} />
      <p className=" text-sm lg:text-base pl-2 pb-1 text-gray-400 mt-1 text-center">you can only submit this form once</p>
    </div>
  )
};

export default LeanerGrading;