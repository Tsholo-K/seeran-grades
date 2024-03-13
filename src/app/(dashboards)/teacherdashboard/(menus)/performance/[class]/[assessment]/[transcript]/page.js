'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Subject from "@/components/(general components)/subject";
import Score from "@/components/(grades components)/score";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import Aligner from "@/components/(general components)/aligner";
 

const Transcript = () => {

  const params = useParams();
  const class_id = params.class
  const assessment_id = params.assessment
  const transcript_id = params.transcript

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

  const transcript_info = [
    {
      title: 'Assessment',
      info: transcript.assessment
    },
    {
      title: 'Score',
      info: `${transcript.score} / ${transcript.total}`
    },
    {
      title: 'Date Submitted',
      info: transcript.date_submitted
    }
  ]

  return (
    <div>
      <Aligner/>
      <Crumbs url={`teacherdashboard/performance/${class_id}/${assessment_id}`} title={'assessment'} heading={`transcript`}/>
      {/* score */}
      <Score score={transcript.score} total={transcript.total}/>
      {/* subject */}
      <Subject title="Student" icon={'user-round-blue'} subject={`${student.name.charAt(0).toUpperCase() + student.name.slice(1)} ${student.surname.charAt(0).toUpperCase() + student.surname.slice(1)}`} submitter={transcript.submitted_by}/>
      {/* info */}
      <MultipleMenu menu={transcript_info} />
    </div>
  )
};

export default Transcript;