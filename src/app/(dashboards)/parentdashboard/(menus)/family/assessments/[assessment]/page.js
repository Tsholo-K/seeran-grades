'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'
import Subject from "@/components/(general components)/subject";

// components 
import Crumbs from "@/components/crumbs";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import UserMenu from "@/components/(general components)/usermenu";
import Aligner from "@/components/(general components)/aligner";
import Image from "next/image";
import Topics from "@/components/(general components)/topics";


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

  let teacher = []
  data.teachers.forEach( teach => {
    if ( teach.id === classroom.teacher_id ) {
      teacher.push(teach)
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

  let due_for = []
  children.forEach( child => {
    classroom.students.forEach( child_id => {
      if ( child.id === child_id) {
        due_for.push(child)
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
      title: 'Due date',
      info: assessment.due_date
    }
  ]

  return (
    <div>
      <Aligner/>
      <Crumbs url={`parentdashboard/family/assessments`} title={`assessments`} heading={`assessment`}/>
      <Subject subject={assessment.subject} icon={assessment.icon}/>
      <MultipleMenu menu={assessment_info} />
      <Topics topics={assessment.topics} />
      <p className="pl-2 mb-2 text-sm mt-12 text-gray-400">set for</p>
      <div className="rounded-xl bg-white">
        <UserMenu all_users={due_for} url={false} />
      </div>
      <p className="pl-2 mb-2 text-sm mt-12 text-gray-400">set by</p>
      <div className="rounded-xl bg-white">
        <UserMenu all_users={teacher} dashboard={`parent`} section={`family/assessments/${assessment_id}`} grade={false} />
      </div>
      <p className="py-2"></p>
    </div>
  )
};

export default Assessment;