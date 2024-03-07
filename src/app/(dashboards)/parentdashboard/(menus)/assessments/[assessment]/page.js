'use client';

import Link from "next/link";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'
import Subject from "@/components/(general components)/subject";

// components 
import Crumbs from "@/components/crumbs";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import Menu from "@/components/(general components)/menu";
import PageHeading from "@/components/(general components)/pageheading";


const Assessment = () => {

  const params = useParams();
  const assessment_id = params.assessment

  let assessment = null
  data.assessments.forEach( ( assess ) => {
    if ( assess.id === assessment_id ) {
      assessment = assess
    }
  });

  let classroom
  data.classes.forEach( cls => {
    if ( cls.id === assessment.class_id ) {
      classroom = cls
    }
  })

  let teacher
  data.teachers.forEach( teach => {
    if ( teach.id === classroom.teacher_id ) {
      teacher = teach
    }
  })

  let children = []
  data.parents[0].children.forEach( child_id => {
    data.students.forEach( child => {
      if ( child.id === child_id ) {
      children.push(child)
      }
    });
  });

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
        <Subject subject={assessment.subject} icon={assessment.icon}/>
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