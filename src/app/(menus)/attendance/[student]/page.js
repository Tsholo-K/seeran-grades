'use client'

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(menus)/dummydata.json';



const Days = ({ day }) => {
  return (
    <Link href={'/profile'} className="flex relative py-3 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
      <div className="absolute top-6 left-0 text-center rounded-full text-white">
        <Image src={'/alert-circle.svg'} alt='try it button' width={10} height={10} className="w-6 m-0"/>
      </div>
      <div className="pl-7 w-full">
        <p className="font-bold">{day}</p>
        <p className="text-sm text-gray-500">2024</p>
      </div>
    </Link>
  )
}

const Attendance = () => {

  const params = useParams();
  const student_id = params.student

  let attendance
  data.attendances.forEach( record => {
    if ( record.student === student_id ) {
      attendance = record
    }
  });

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <div className="fixed top-0 pt-16 w-full pb-1 bg-gray-100 z-[2]">
        <Link href={'/attendance'} className="flex w-full text-blue-700">
          <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>children
        </Link>
      </div>
      <div className="z-[1]">
        <div >
            <h1 className="w-full text-center pb-16 text-4xl">Attendance</h1>
        </div>
        {/* counter section */}
        <div className="w-full pb-10">
          <div className="mx-auto bg-blue-700 grid grid-cols-1 place-content-center w-[150px] h-[150px] text-white rounded-full text-7xl">
            <p className="mx-auto ">{attendance.days_absent.length}</p>
          </div>
          <p className="w-full text-center pt-3 text-gray-500 text-sm">days absent so far..</p>
        </div>
        {
          attendance.days_absent.map( ( day, index ) => (
            <Days key={index} day={day}/>
          ))
        }
      </div>
    </div>
  )
};

export default Attendance;