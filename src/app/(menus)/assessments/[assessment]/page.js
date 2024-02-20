'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(menus)/dummydata.json'


const MenuLink = ({ menu, info}) => {
  return (
    <div className="relative flex py-3 gap-1 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p>{menu}</p>
      <p className="text-gray-400 absolute right-4">{info}</p>
    </div>
  )
};

const Subject = ({ subject, icon, student }) => {
  return (
    <div className="py-4 mb-10">
      <div className="flex">
        <p className=" text-sm pl-2 pb-1 text-gray-400">subject</p>
      </div>
      <div className="relative rounded-xl bg-white py-1">
        <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
            <Image priority src={`/${icon}.svg`} alt="profile icon" width={30} height={30} className="h-8 w-8" />
            <div className="pt-1 pl-2">
                <p>{subject}</p>
            </div>
        </div>
      </div>
      <p className="mx-auto text-center text-gray-400 text-sm pt-1">for {student}</p>
    </div>
  )
};

const Assessment = () => {

  const params = useParams();
  const assessment_id = params.assessment

  let assessment = null
  data.assessments.forEach( ( assess ) => {
    if ( assess.id === assessment_id ) {
      assessment = assess
    }
  });

  let teacher
  data.teachers.forEach( teach => {
    if ( teach.id === assessment.teacher_id ) {
      teacher = teach
    }
  })

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      <div className="fixed top-0 pt-16 pb-1 w-full bg-gray-100 z-[2]">
        <Link href={'/assessments'} className="flex w-full text-blue-700">
          <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>assessments
        </Link>
      </div>
      <div className="z-[1]">
        <div>
          <h1 className="w-full text-center pb-16 text-4xl">Assessment</h1>
        </div>
        <Subject subject={assessment.subject} icon={assessment.icon} student={assessment.student}/>
        <div className="rounded-xl bg-white mb-8">
          <MenuLink menu={'Assessment'} info={assessment.assessment}/>
          <hr className="mx-5"></hr>
          <MenuLink menu={'Total'} info={assessment.total}/>
          <hr className="mx-5"></hr>
          <MenuLink menu={'Due Date'} info={assessment.due_date}/>
        </div>
        <div className="flex">
          <Link href={`/teachers/${assessment.teacher_id}`} className="pb-1 w-full text-end pr-3 text-blue-700">message</Link>
        </div>
        <div className="rounded-xl bg-white">
          <MenuLink menu={'Teacher'} info={`${teacher.name.charAt(0).toUpperCase() + teacher.name.slice(1)} ${teacher.surname.charAt(0).toUpperCase() + teacher.surname.slice(1)}`}/>
        </div>
      </div>
    </div>
  )
};

export default Assessment;