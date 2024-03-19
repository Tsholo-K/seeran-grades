'use client'

import { useParams } from "next/navigation";

// components
import PageHeading from '@/components/(general components)/pageheading';
import Crumbs from '@/components/crumbs';
import SubjectCreationFrom from "@/components/(forms)/subjectcreationform";


const SubjectCreation = () => {

  const params = useParams();
  const grade = params.grade

  return (
    <div>
      <Crumbs title={'all grades'} url={`admindashboard/console/grades/${grade}`} heading={`subject creation`} />
      <PageHeading title={`Add Subject`} subheading={`subject creation`}/>
      <SubjectCreationFrom/>
      <p className='text-sm text-gray-400 text-center pt-1'></p>
    </div>
  )
};

export default SubjectCreation;