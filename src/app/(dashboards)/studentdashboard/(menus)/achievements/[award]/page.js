'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components 
import Crumbs from "@/components/crumbs";
import Subject from "@/components/(general components)/subject";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import UserMenu from "@/components/(general components)/usermenu";
import Aligner from "@/components/(general components)/aligner";
import Image from "next/image";


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
      <Aligner/>
      <Crumbs url={`studentdashboard/achievements`} title={`achievements`} heading={`award`}/>
      <Image priority src={`/handshake.svg`} alt="profile icon" width={30} height={30} className="w-full h-full max-h-[250px] mx-auto px-16 mb-4" />
      <p className="text-center text-gray-400">well done</p>
      <Subject subject={award.for} icon={award.icon} submitter={award.student}/>
      {/* award info */}
      <MultipleMenu menu={award_info} />
    </div>
  )
};

export default Award;