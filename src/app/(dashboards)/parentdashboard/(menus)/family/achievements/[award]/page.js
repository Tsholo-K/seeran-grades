'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components 
import Crumbs from "@/components/crumbs";
import Subject from "@/components/(general components)/subject";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import UserMenu from "@/components/(general components)/childmenu";
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
      <Crumbs url={`parentdashboard/family/achievements`} title={`achievements`}/>
      <Image priority src={`/handshake.svg`} alt="profile icon" width={30} height={30} className="w-full h-full rounded-full mx-auto px-16 mb-4" />

      <Subject subject={award.for} icon={award.icon} submitter={award.student}/>
      {/* award info */}
      <MultipleMenu menu={award_info} />
      <p className="pl-2 mb-2 text-sm mt-12 text-gray-400">granted to</p>
      <div className="rounded-xl bg-white">
        <UserMenu all_users={student} url={false}  />
      </div>
    </div>
  )
};

export default Award;