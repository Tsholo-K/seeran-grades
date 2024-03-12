'use client'

import { useParams } from "next/navigation";
import { useEffect } from "react";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Subject from "@/components/(general components)/subject";
import Menu from "@/components/(general components)/menu";
import Score from "@/components/(grades components)/score";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import UserMenu from "@/components/(general components)/childmenu";
 
const Transcript = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const params = useParams();
  const transcript_id = params.transcript

  let transcript = null
  data.grades.forEach(( grade ) => {
    if ( grade.id === transcript_id ) {
      transcript = grade
    }
  })

  let student = []
  data.students.forEach(( stu ) => {
    if ( stu.id === transcript.submitted_by ) {
      student.push(stu)
    }
  })

  let teacher = []
  data.teachers.forEach( teach => {
    if ( teach.id === transcript.teacher ) {
      teacher.push(teach)
    }
  })

  const transcript_info = [
    {
      title: 'Assessment',
      info: transcript.assessment
    },
    {
      title: 'Grade',
      info: `${transcript.score} / ${transcript.total}`
    },
    {
      title: 'Date submitted',
      info: transcript.date_submitted
    }
  ]

  return (
    <div>
      {/* back link */}
      <Crumbs url={`parentdashboard/family/grades`} title={'grades'}/>
      {/* student */}
      <Score score={transcript.score} total={transcript.total}/>
      {/* subject */}
      <Subject subject={transcript.subject} icon={transcript.icon} submitter={transcript.submitted_by}/>
      {/* info */}
      <MultipleMenu menu={transcript_info} />
      <p className="pl-2 mb-1 text-sm mt-12 text-gray-400">submitted by</p>
      <div className="rounded-xl bg-white">
        <UserMenu all_users={student} url={false} />
      </div>
      {/* teacher */}
      <p className="pl-2 mb-1 text-sm mt-8 text-gray-400">teacher</p>
      <div className="rounded-xl bg-white">
        <UserMenu all_users={teacher} url={false} grade={false} />
      </div>
      <div className="py-4"></div>
    </div>
  )
};

export default Transcript;