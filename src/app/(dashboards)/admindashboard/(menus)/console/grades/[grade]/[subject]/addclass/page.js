'use client';

import { useParams } from "next/navigation";

// components
import PageHeading from '@/components/(general components)/pageheading';
import Crumbs from '@/components/crumbs';
import ClassCreationFrom from "@/components/(forms)/classcreationform";


const SubjectCreation = () => {

  const params = useParams();
  const grade = params.grade;
  const subject_id = params.subject;

  return (
    <div>
      <Crumbs title={'all classes'} url={`admindashboard/console/grades/${grade}/${subject_id}`} heading={`class creation`} />
      <PageHeading title={`Add Class`} subheading={`class creation`}/>
      <ClassCreationFrom/>
      <p className='text-sm text-gray-400 text-center pt-1'></p>
    </div>
  )
};

export default SubjectCreation;