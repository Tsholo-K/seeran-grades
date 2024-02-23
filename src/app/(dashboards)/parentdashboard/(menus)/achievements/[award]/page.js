'use client'

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

const Student = ({ student_id }) => {

  let user = null
  data.students.forEach( ( student ) => {
    if ( student.student_number === student_id ) {
      user = student
    }
  });

  return (
    <>
      <p className=" text-sm pt-1 text-gray-400 text-center mx-auto">awarded to : {user.name.charAt(0).toUpperCase() + user.name.slice(1)} {user.surname.charAt(0).toUpperCase() + user.surname.slice(1)}</p>
    </>
  )
}

const For = ({ award, icon, student_id }) => {
  return (
    <div className="py-4 mb-10">
        <div className="flex">
          <p className=" text-sm pl-2 pb-1 text-gray-400">for</p>
        </div>
        <div className="relative rounded-xl bg-white py-1">
          <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
              <Image priority src={`/${icon}.svg`} alt="profile icon" width={30} height={30} className="h-8 w-8" />
              <div className="pt-1 pl-2">
                  <p>{award}</p>
              </div>
          </div>
        </div>
        <Student student_id={student_id}/>
      </div>
  )
};

const Award = () => {

  const params = useParams();
  const award_id = params.award

  let award = null
  data.achievements.forEach( achievement => {
    if ( achievement.id === award_id ) {
      award = achievement
    }
  });

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      <div className="fixed top-0 pt-16 pb-1 w-full bg-gray-100 z-[2]">
        <Link href={'/achievements'} className="flex w-full text-blue-700">
          <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>achievements
        </Link>
      </div>
      <div className="z-[1]">
        {/* page heading */}
        <div>
          <h1 className="w-full text-center pb-16 text-4xl">Award</h1>
        </div>
        <For award={award.for} icon={award.icon} student_id={award.student}/>
        {/* award info */}
        <div className="rounded-xl bg-white mb-8">
          <MenuLink menu={'assessment'} info={award.assessment}/>
          <hr className="mx-5"></hr>
          <MenuLink menu={'Score'} info={award.score}/>
          <hr className="mx-5"></hr>
          <MenuLink menu={'Date Granted'} info={award.date_granted}/>
        </div>
        {/* authority */}
        <div>
          <div className="flex">
            <p className="pb-1 w-full pr-3 text-gray-400 text-sm pl-2">awarded by</p>
          </div>
          <div className="rounded-xl bg-white">
            <MenuLink menu={'Authority'} info={award.authority}/>
          </div>
        </div>
      </div>
      
    </div>
  )
};

export default Award;