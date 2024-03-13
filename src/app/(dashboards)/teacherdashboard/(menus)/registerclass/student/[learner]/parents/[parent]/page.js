'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

//components
import Crumbs from "@/components/crumbs";
import UserImage from "@/components/(general components)/userimage";
import MultipleMenuLinks from "@/components/(general components)/multiplemenulinks";
import Aligner from "@/components/(general components)/aligner";


const ParentProfile = () => {

  const params = useParams()
  const class_id = params.class
  const parent_id = params.parent
  const student_id = params.learner

  
  let learner
  data.students.forEach( child => {
    if ( child.id === student_id ) {
      learner = child
    }
  });

  let parent
  data.parents.forEach( rent => {
    if ( rent.id === parent_id ) {
      parent = rent
    }
  })

  const menuitems = [
    {
      // we need it to be an array so thats why
      section : [
        {
          title: 'Personal Information',
          icon: 'book-lock',
          url: `/teacherdashboard/registerclass/student/${student_id}/parents/${parent.id}/id`,
        },
        {
          title: 'Message',
          icon: 'admin',
          url: `/teacherdashboard/messages/${parent.id}`,
        },
      ]
    }
  ];

  return (
    <div>
      <Aligner/>
      <Crumbs title={'parents'} url={`teacherdashboard/registerclass/student/${student_id}/parents`} hide={true} heading={`parent profile`}/>
      {/* profile info section */}
      <UserImage image={parent.image} name={parent.name} surname={parent.surname} email={parent.email}/>
      <p className="py-4"></p>
      {/* menu links section */}
      <div className="relative">
        {
          menuitems.map( ( item,index ) => (
            <>
              <MultipleMenuLinks key={index} menu={item} />
            </>
          ))
        }
        <div className="absolute top-[103px] w-full flex justify-center text-gray-400 text-sm">
          <p>this will send you to the messages section</p>
        </div>
      </div>
    </div>
  )
};

export default ParentProfile;