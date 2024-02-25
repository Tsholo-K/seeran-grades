'use client';

import Link from "next/link";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'
import Subject from "@/components/subject";

// components 
import Crumbs from "@/components/crumbs";
import MultipleMenu from "@/components/multiplemenu";
import Menu from "@/components/menu";
import PageHeading from "@/components/pageheading";


const Assessment = () => {

  const params = useParams();
  const assessment_id = params.assessment

  let assessment = null
  data.assessments.forEach( ( assess ) => {
    if ( assess.id === assessment_id ) {
      assessment = assess
    }
  });

  let teacher
  data.teachers.forEach( teach => {
    if ( teach.id === assessment.teacher_id ) {
      teacher = teach
    }
  })

  const assessment_info = [
    {
      title: 'Assessment',
      info: assessment.assessment
    },
    {
      title: 'Total',
      info: assessment.total
    },
    {
      title: 'Due Date',
      info: assessment.due_date
    }
  ]

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      <Crumbs url={`parentdashboard/assessments`} title={`assessments`}/>
        <PageHeading title={'Assessment'} />
        <Subject subject={assessment.subject} icon={assessment.icon} submitter={assessment.student}/>
        <MultipleMenu menu={assessment_info} />
        {/* teacher */}
        <div className="relative pt-7">
          <Link href={'/teachers/teacher'} className="w-full text-end pr-2 text-blue-700 absolute top-0 right-4">message</Link>
          <Menu title={'Set By'} info={`${teacher.name.charAt(0).toUpperCase() + teacher.name.slice(1)} ${teacher.surname.charAt(0).toUpperCase() + teacher.surname.slice(1)}`} border={true}/>
      </div>
    </div>
  )
};

export default Assessment;