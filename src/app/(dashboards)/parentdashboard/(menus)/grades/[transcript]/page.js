'use client'

import Link from "next/link";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/pageheading";
import Subject from "@/components/subject";
import Menu from "@/components/menu";
import Score from "@/components/score";
 

const MenuLink = ({ menu, info }) => {
  return (
    <div className="relative flex py-3 gap-1 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p>{menu}</p>
      <p className="text-gray-400 absolute right-4">{info}</p>
    </div>
  )
};

const Transcript = () => {

  const params = useParams();
  const transcript_id = params.transcript

  let transcript = null
  data.grades.forEach(( grade ) => {
    if ( grade.id === transcript_id ) {
      transcript = grade
    }
  })

  let teacher
  data.teachers.forEach( teach => {
    if ( teach.id === transcript.teacher ) {
      teacher = teach
    }
  })

  return (
    <>
      <div className="w-full relative grid grid-cols-1 place-content-center ">
        {/* back link */}
        <Crumbs url={`parentdashboard/grades`} title={'grades'}/>
        {/* page heading */}
        <div className="lg:hidden">
          <PageHeading title={'Transcript'} />
        </div>
        {/* score */}
        <Score score={transcript.score} total={transcript.total}/>
        {/* subject */}
        <Subject subject={transcript.subject} icon={transcript.icon} submitter={transcript.submitted_by}/>
        {/* info */}
        <div className="rounded-xl bg-white mb-8">
          <MenuLink menu={'Assessment'} info={transcript.assessment}/>
          <hr className="mx-5"></hr>
          <MenuLink menu={'Grade'} info={`${transcript.score} / ${transcript.total}`}/>
          <hr className="mx-5"></hr>
          <MenuLink menu={'Date Submitted'} info={transcript.date_submitted}/>
        </div>
        {/* teacher */}
        <div className="relative pt-7">
          <Link href={'/teachers/teacher'} className="w-full text-end pr-2 text-blue-700 absolute top-0 right-4">message</Link>
          <Menu title={'Teacher'} info={`${teacher.name.charAt(0).toUpperCase() + teacher.name.slice(1)} ${teacher.surname.charAt(0).toUpperCase() + teacher.surname.slice(1)}`} border={true}/>
        </div>
      </div>
    </>
  )
};

export default Transcript;