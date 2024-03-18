'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Menu from "@/components/(general components)/menu";
import UserMenu from "@/components/(general components)/usermenu";
import SearchComponent from "@/components/(general components)/searchcomponent";


const MyPerformance = ({ searchParams, }) => {

  const query = searchParams?.query || '';

  let students = []
  if ( query === '' ) {
    students = data.students
  } else {
    data.students.forEach( stu => {
      if( stu.name.includes(query.toLowerCase()) || stu.surname.includes(query.toLowerCase()) || stu.id.includes(query) ) {
        students.push(stu)
      }
    });
  }

  const params = useParams();
  const grade = params.grade

  return (
    <div className="w-full">
      <Crumbs url={`admindashboard/console/students/grades`} title={'grades'} heading={`grade ${grade} students`} align={false}/>
      {/* page heading */}
      <PageHeading title={`Grade ${grade}`} subheading={`grade ${grade} students`}/>
      <Menu border={true} title={`Students`} info={`${data.students.length}`}/>
      <SearchComponent />
      <p className="mt-2 pl-2 text-sm text-gray-400 pb-1 ">students</p>
      <div className="bg-white rounded-xl">
        <UserMenu all_users={students} grade={false} dashboard={`admin`} section={`console/students/grades/${grade}/student`}/>
      </div>
      <p className=" text-sm w-[80%] text-gray-400 text-center mx-auto py-10">that&apos;s all students</p>
    </div>
  )
};

export default MyPerformance;