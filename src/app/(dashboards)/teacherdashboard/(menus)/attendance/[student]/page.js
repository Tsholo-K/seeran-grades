'use client'

import Image from "next/image";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";


const Days = ({ day }) => {
  return (
    <p className="flex relative py-3 gap-5 px-3 justify-start w-full cursor-pointer">
      <div className="absolute top-6 left-0 text-center rounded-full text-white">
        <Image src={'/alert-circle.svg'} alt='try it button' width={10} height={10} className="w-6 m-0"/>
      </div>
      <div className="pl-7 w-full">
        <p className="font-bold">{day}</p>
        <p className="text-sm text-gray-500">2024</p>
      </div>
    </p>
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
      <Crumbs title={'children'} url={'parentdashboard/attendance'} />
      <PageHeading title={'Attendance'} />
      {/* counter section */}
      <div className="w-full pb-10">
        <div className="mx-auto bg-[#66b0f0] grid grid-cols-1 place-content-center w-[150px] h-[150px] text-white rounded-full text-7xl">
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
  )
};

export default Attendance;