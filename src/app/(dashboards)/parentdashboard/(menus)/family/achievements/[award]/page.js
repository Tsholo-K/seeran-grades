'use client'

import { useParams } from "next/navigation";
import { useEffect } from "react";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components 
import Crumbs from "@/components/crumbs";
import Subject from "@/components/(general components)/subject";
import Menu from "@/components/(general components)/menu";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import UserMenu from "@/components/(general components)/childmenu";


const Award = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

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
      <Crumbs url={`parentdashboard/family/achievements`} title={`achievements`}/>
      <Subject subject={award.for} icon={award.icon} submitter={award.student}/>
      {/* award info */}
      <MultipleMenu menu={award_info} />
      {/* authority */}
      <p className="pb-1 w-full pr-3 text-gray-400 text-sm pl-2 pt-4">awarded by</p>
      <Menu title={'Authority'} info={award.authority} border={true} />
      <p className="pl-2 mb-2 text-sm mt-12 text-gray-400">granted to</p>
      <div className="rounded-xl bg-white">
        <UserMenu all_users={student} url={false}  />
      </div>
    </div>
  )
};

export default Award;