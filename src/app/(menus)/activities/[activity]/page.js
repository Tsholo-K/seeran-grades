'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(menus)/dummydata.json';


const MenuLink = ({ menu, info }) => {
  return (
    <div className="relative flex py-3 gap-1 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p>{menu}</p>
      <p className="text-gray-400 absolute right-4">{info}</p>
    </div>
  )
};

const Activity = () => {

  const param = useParams();
  const activity_id = param.activity

  let log
  data.activities.forEach( activity => {
    if( activity.id === activity_id ) {
      log = activity
    }
  });

  let student
  data.students.forEach( stu => {
    if ( stu.student_number === log.student ) {
      student = stu
    }
  })

  let teacher
  data.teachers.forEach( teach => {
    if ( teach.id === log.logger ) {
      teacher = teach
    }
  })

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
        <div className="fixed top-0 pt-16 pb-1 w-full bg-gray-100 z-[2]">
            <Link href={'/activities'} className="flex w-full text-blue-700">
              <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>logs
            </Link>
        </div>
        <div className="z-[1]">
          <div>
              <h1 className="w-full text-center pb-7 text-4xl">Activity</h1>
          </div>
          <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
              <Image priority src={`/${log.icon}.svg`} alt="profile icon" width={30} height={30} className="h-36 w-36" />
          </div>
          <div className="mb-10">
              <p className="text-sm text-gray-500 pt-1 w-full text-center">{log.activity}</p>
          </div>
          <div className="py-4 mb-10">
              <div className="flex">
              <p className=" text-sm pl-2 pb-1 text-gray-400">record</p>
              </div>
              <div className="relative rounded-xl opacity-75 bg-white py-1">
              <p className="w-full py-1 px-3 opacity-80">
                {log.record}
              </p>
              </div>
          </div>
          <div className="rounded-xl bg-white mb-8">
              <MenuLink menu={'Logged By'} info={`${teacher.name.charAt(0).toUpperCase() + teacher.name.slice(1)} ${teacher.surname.charAt(0).toUpperCase() + teacher.surname.slice(1)}`}/>
              <hr className="mx-5"></hr>
              <MenuLink menu={'Recipient'} info={`${student.name.charAt(0).toUpperCase() + student.name.slice(1)} ${student.surname.charAt(0).toUpperCase() + student.surname.slice(1)}`}/>
              <hr className="mx-5"></hr>
              <MenuLink menu={'Date Issued'} info={log.date_logged}/>
          </div>
        </div>
    </div>
  )
};

export default Activity;