'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Subject from "@/components/(general components)/subject";
import Score from "@/components/(grades components)/score";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import Topics from "@/components/(general components)/topics";
 
const Transcript = () => {

  const params = useParams();
  const transcript_id = params.transcript
  const class_id = params.class

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

  let teacher
  data.teachers.forEach( teach => {
    if ( teach.id === transcript.teacher ) {
      teacher = teach
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
      <Crumbs url={`studentdashboard/classes/${class_id}/performance`} title={'grades'} heading={`transcript`}/>
      {/* student */}
      <Score score={transcript.score} total={transcript.total}/>
      {/* subject */}
      <Subject subject={transcript.subject} icon={transcript.icon} submitter={transcript.submitted_by}/>
      <MultipleMenu menu={transcript_info} />
      <p className="py-2"></p>
      <Topics topics={transcript.topics} />
      <div className="py-4"></div>
    </div>
  )
};

export default Transcript;