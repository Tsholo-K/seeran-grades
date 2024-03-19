'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json';

// components
import PageHeading from '@/components/(general components)/pageheading';
import Crumbs from '@/components/crumbs';
import AddStudentFrom from "@/components/(forms)/addstudentform";


const SubjectCreation = () => {

  const params = useParams();
  const grade = params.grade;
  const class_id = params.class;
  const subject = params.subject;

  return (
    <div>
      <Crumbs title={'class'} url={`admindashboard/console/grades/${grade}/${subject}/${class_id}`} heading={`add student`} />
      <PageHeading title={`Add Student`} subheading={`students not in a mathematics class`}/>
      <AddStudentFrom students={data.students}/>
      <p className='text-sm text-gray-400 text-center pt-1'></p>
    </div>
  )
};

export default SubjectCreation;