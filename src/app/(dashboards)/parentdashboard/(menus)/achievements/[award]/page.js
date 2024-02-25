'use client'

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components 
import Crumbs from "@/components/crumbs";
import Subject from "@/components/subject";
import Menu from "@/components/menu";
import MultipleMenu from "@/components/multiplemenu";


const MenuLink = ({ menu, info }) => {
  return (
    <div className="relative flex py-3 gap-1 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p>{menu}</p>
      <p className="text-gray-400 absolute right-4">{info}</p>
    </div>
  )
};


const Award = () => {

  const params = useParams();
  const award_id = params.award

  let award = null
  data.achievements.forEach( achievement => {
    if ( achievement.id === award_id ) {
      award = achievement
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
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      <Crumbs url={`parentdashboard/achievements`} title={`achievements`}/>
      <div className="z-[1]">
        {/* page heading */}
        <div>
          <h1 className="w-full text-center pb-16 text-4xl">Award</h1>
        </div>
        <Subject subject={award.for} icon={award.icon} submitter={award.student} title="field"/>
        {/* award info */}
        <MultipleMenu menu={award_info} />
        {/* authority */}
        <p className="pb-1 w-full pr-3 text-gray-400 text-sm pl-2 pt-10">awarded by</p>
        <Menu title={'Authority'} info={award.authority} border={true} />
      </div>
      
    </div>
  )
};

export default Award;