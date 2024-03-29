'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import PageHeading from '@/components/(general components)/pageheading';
import Crumbs from '@/components/crumbs';
import AddStudentFrom from "@/components/(forms)/addstudentform";


const SubjectCreation = () => {

  const params = useParams();
  const grade = params.grade;
  const class_id = params.class;

  return (
    <div>
      <Crumbs title={'class'} url={`admindashboard/console/grades/${grade}/registerclasses/${class_id}`} heading={`add student`} />
      <PageHeading title={`Add Student`} subheading={`students without register classes`}/>
      <AddStudentFrom students={data.students}/>
      <p className='text-sm text-gray-400 text-center pt-1'></p>
    </div>
  )
};

export default SubjectCreation;