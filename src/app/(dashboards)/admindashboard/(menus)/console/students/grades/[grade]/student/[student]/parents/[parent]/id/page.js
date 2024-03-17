'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import Aligner from "@/components/(general components)/aligner";
import UserMenu from "@/components/(general components)/usermenu";


const ID = () => {

  const searchParams = useParams();
  const grade = searchParams.grade
  const student_id = searchParams.student
  const parent_id = searchParams.parent

  let parent_user 
  data.parents.forEach( parent => {
    if( parent.id === searchParams.parent ){
      parent_user = parent
    }
  });

  let children = []
  parent_user.children.forEach( child_id => {
    data.students.forEach( child => {
      if ( child.id === child_id ) [
        children.push(child)   
      ]
    })
  })
  
  const menus = [
      {
        title: 'Name',
        info: `${parent_user.name.charAt(0).toUpperCase() + parent_user.name.slice(1)}`
      },
      {
        title: 'Surname',
        info:`${parent_user.surname.charAt(0).toUpperCase() + parent_user.surname.slice(1)}`
      },
      {
        title: 'Phone Number',
        info: `${parent_user.phone_number}`
      },
      {
        title: 'Email',
        info: `${parent_user.email}`
      },
      {
        title: 'Account ID',
        info: `${parent_user.id}`
      }
]

  return (
    <div>
      <Aligner/>
      <Crumbs title={'parent'} url={`admindashboard/console/students/grades/${grade}/student/${student_id}/parents/${parent_id}`} hide={false}/>
      {/* page heading */}
      <PageHeading title={'ID'} />
      {/* personal infomation */}
      <MultipleMenu menu={menus}/>
      <p className="text-sm text-gray-400 pl-2 pb-1 pt-4">children</p>
      <div className="bg-white rounded-xl">
        <UserMenu all_users={children} url={false}/>
      </div>
      
    </div>
  )
};

export default ID;
