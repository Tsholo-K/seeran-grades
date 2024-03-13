'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import UserMenu from "@/components/(general components)/usermenu";
import Aligner from "@/components/(general components)/aligner";


const Parents = () => {

  const params = useParams()
  const class_id = params.class
  const student_id = params.learner

  
  let learner
  data.students.forEach( child => {
    if ( child.id === student_id ) {
      learner = child
    }
  });

  let parents = []
  data.parents.forEach( parent => {
    learner.parents.forEach( id => {
      if ( parent.id === id ) {
        parents.push(parent)
      }
    })   
  })

  return (
    <div>
      <Aligner/>
      <Crumbs url={`teacherdashboard/classes/${class_id}/student/${student_id}`} title={'student'}/>
      {/* page heading */}
      <PageHeading title={'Parents'} subheading={'these are all the parents linked to the students account'}/>
      {/* children menu */}
      <div className="rounded-xl bg-white">
        <UserMenu all_users={parents} dashboard={'teacher'} section={`classes/${class_id}/student/${student_id}/parents`} grade={false} />
      </div>
    </div>
  )
};

export default Parents;