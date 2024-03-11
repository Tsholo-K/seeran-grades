'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'
import Subject from "@/components/(general components)/subject";

// components 
import Crumbs from "@/components/crumbs";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import Menu from "@/components/(general components)/menu";
import UserMenu from "@/components/(general components)/childmenu";


const Assessment = () => {

  const params = useParams();
  const assessment_id = params.assessment
  const class_id = params.class

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

  let teacher = []
  data.teachers.forEach( teach => {
    if ( teach.id === classroom.teacher_id ) {
      teacher.push(teach)
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
      title: 'Due date',
      info: assessment.due_date
    },
    {
      title: 'Topics',
      info: assessment.topics
    }
  ]

  return (
    <div>
      <Crumbs url={`studentdashboard/classes/${class_id}/assessments`} title={`assessments`}/>
      <Subject subject={assessment.subject} icon={assessment.icon}/>
      <p className="py-8"></p>
      <MultipleMenu menu={assessment_info} />
      {/* teacher */}
      <p className="pl-2 mb-2 text-sm mt-12 text-gray-400">set by</p>
      <div className="rounded-xl bg-white">
        <UserMenu all_users={teacher} url={false} grade={false}/>
      </div>
    </div>
  )
};

export default Assessment;