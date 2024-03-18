'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import UserMenu from "@/components/(general components)/usermenu";
import SingleMenuLink from "@/components/(general components)/signlemenulink";


const StudentParents = () => {

  const params = useParams()
  const grade = params.grade
  const student_id = params.student

  let learner
  data.students.forEach( child => {
    if ( child.id === student_id ) {
      learner = child
    }
  });

  let parents = []
  data.parents.forEach( parent => {
    parent.children.forEach( id => {
      if ( id === learner.id ) {
        parents.push(parent)
      }
    })   
  })

  return (
    <div>
      <Crumbs url={`admindashboard/console/students/grades/${grade}/student/${student_id}`} title={'student profile'} heading={`parents`} />
      <PageHeading title={'Parents'} subheading={'these are all the parents linked to the students account'}/>
      <SingleMenuLink title={`Link Parent`} icon={`link`} border={true}/>
      <p className="text-sm text-gray-400 text-center mb-8 pt-1 w-[95%]">each student account can only link up to two(2) parents</p>
      <p className="text-sm text-gray-400 pl-2 pt-4 pb-1">parents</p>
      <div className="rounded-xl bg-white">
        <UserMenu all_users={parents} dashboard={'admin'} section={`console/students/grades/${grade}/student/${student_id}/parents`} grade={false} />
      </div>
    </div>
  )
};

export default StudentParents;