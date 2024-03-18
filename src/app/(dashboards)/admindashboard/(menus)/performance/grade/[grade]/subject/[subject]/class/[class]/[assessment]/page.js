'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import Transcripts from "@/components/(grades components)/transcripts";
import Topics from "@/components/(general components)/topics";


const ClassAssessment = () => {

  const params = useParams();
  const class_id = params.class;
  const grade_id = params.grade;
  const subject_id = params.subject;
  const assessment_id = params.assessment;

  let assessment 
  data.assessments.forEach( assess => {
    if ( assess.id === assessment_id ) {
      assessment = assess
    }
  });

  let grades = []
  data.grades.forEach( transcript => {
    if ( transcript.assessment_id === assessment_id ) {
      grades.push(transcript)
    }
  });

    const menuitems = [
      {
        // we need it to be an array so thats why
        section : [
          {
            title: 'Assessment',
            info : `${assessment.assessment}`
          },{
            title: `Total`,
            info : `${assessment.total}`
          },
          {
            title: 'Average Score',
            info : `${assessment.average_score}`
          },
          {
            title: 'Date Assessed',
            info : `${assessment.due_date}`
          },
          {
            title: 'Students Assessed',
            info : `3`
          }
        ]
      }
    ];

  return (
    <div>
      <Crumbs url={`admindashboard/performance/grade/${grade_id}/subject/${subject_id}/class/${class_id}`} title={'class'} heading={`assessment summary`}/>
      {/* page heading */}
      <PageHeading title={`${assessment.title}`} subheading={'assessment summary'}/>
      {
        menuitems.map( ( item,index ) => (
          <MultipleMenu key={index} menu={item.section} />
        ))
      }
      <Topics topics={assessment.topics} />
      <p className='text-sm text-gray-400 mt-7 pl-2'>scores</p>
      <Transcripts  dashboard={'admin'} assessment={false} date={false} section={`performance/grade/${grade_id}/subject/${subject_id}/class/${class_id}/${assessment_id}`} icon={false} transcripts={grades} subject={false} submitter={false} />
      <p className="py-7 text-center text-sm text-gray-400">that&apos;s all scores</p>
    </div>
  )
};

export default ClassAssessment;