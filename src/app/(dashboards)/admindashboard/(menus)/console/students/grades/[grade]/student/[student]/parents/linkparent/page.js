'use client'

import { useParams } from "next/navigation";

// components
import PageHeading from '@/components/(general components)/pageheading';
import Crumbs from '@/components/crumbs';
import ParentCreationFrom from "@/components/(forms)/parentcreationform";


const ParentLinking = () => {

  const params = useParams();
  const grade = params.grade
  const student_id = params.student

  return (
    <div>
      <Crumbs title={'student parents'} url={`admindashboard/console/students/grades/${grade}/student/${student_id}/parents`} heading={`account creation`} />
      <PageHeading title={`Link Parent`} subheading={`parent account creation`}/>
      <ParentCreationFrom/>
      <p className='text-sm text-gray-400 text-center pt-1'>user needs to sign in to activate the account</p>
    </div>
  )
};

export default ParentLinking;