'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components 
import Crumbs from "@/components/crumbs";
import Subject from "@/components/(general components)/subject";
import Menu from "@/components/(general components)/menu";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import ChildMenu from "@/components/(general components)/childmenu";


const Award = () => {

  const params = useParams();
  const award_id = params.award

  let award = null
  data.achievements.forEach( achievement => {
    if ( achievement.id === award_id ) {
      award = achievement
    }
  });

  let student = []
  data.students.forEach( stu => {
    if ( stu.id === award.student ) {
      student.push(stu)
    }
  }); 

  const award_info = [
    {
      title: 'Assessment',
      info: award.assessment
    },
    {
      title: 'Score',
      info: award.score
    },
    {
      title: 'Date Granted',
      info: award.date_granted
    }
  ]

  return (
    <div>
      <Crumbs url={`parentdashboard/achievements`} title={`achievements`}/>
      <Subject subject={award.for} icon={award.icon} submitter={award.student}/>
      {/* award info */}
      <MultipleMenu menu={award_info} />
      {/* authority */}
      <p className="pb-1 w-full pr-3 text-gray-400 text-sm pl-2 pt-4">Awarded by</p>
      <Menu title={'Authority'} info={award.authority} border={true} />
      <p className="pl-2 mb-2 mt-12 text-gray-400">Granted to:</p>
      <div className="rounded-xl bg-white">
        <ChildMenu all_children={student} url={false}  />
      </div>
    </div>
  )
};

export default Award;