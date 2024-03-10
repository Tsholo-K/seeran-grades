'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import ChildMenu from "@/components/(general components)/childmenu";


const Parents = () => {

  const params = useParams()
  const class_id = params.class
  const student_id = params.learner

  let children = []
  data.parents[0].children.forEach( child_id => {
    data.students.forEach( child => {
      if ( child.id === child_id ) {
      children.push(child)
      }
    });
  });
  
  return (
    <div>
      {/* back link */}
      <Crumbs url={`teacherdashboard/classes/${class_id}/student/${student_id}`} title={'student'}/>
      {/* page heading */}
      <PageHeading title={'Parents'} subheading={'these are all the parents linked to the students account'}/>
      {/* children menu */}
      <div className="rounded-xl bg-white">
        <ChildMenu all_children={children} dashboard={'parent'} section={'family'} />
      </div>
    </div>
  )
};

export default Parents;