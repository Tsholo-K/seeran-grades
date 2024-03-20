'use client';

import Image from "next/image";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import MultipleMenuLinks from "@/components/(general components)/multiplemenulinks";
import UserMenu from "@/components/(general components)/usermenu";


const Balance = () => {

  const params = useParams();
  const student_id = params.student
  const grade = params.grade

  let fee
  data.fees.forEach( ( balance ) => {
    if ( balance.student === student_id ) {
      fee = balance
    }
  });

  const fee_info = {
      section : [
        {
          title: 'Profile',
          url: `/admindashboard/fees/${grade}/${student_id}/profile`,
          icon: 'user-round-blue'
        },
        {
          title: 'Fees Structure',
          url: `/admindashboard/fees/${grade}/${student_id}/structure`,
          icon: 'layers'
        },
      ]
  }

  let student = []
  data.students.forEach( stu => {
    if ( stu.id === student_id ) {
      student.push(stu)
    }
  });

  return (
    <div>
      <Crumbs title={'fees'} url={`admindashboard/fees/${grade}`} heading={`balance`} />
      <PageHeading title={'Balance'} />
      <div className="rounded-xl bg-white px-3 py-4">
        <p className="text-sm text-gray-500 pl-3 pb-3 lg:text-base">outstanding balance :</p>
        <p className="mx-auto w-fit text-5xl lg:text-7xl py-4 lg:py-6 text-[#66b0f0] font-extrabold">R{fee.outstanding_blalnce}</p>
        <div className="flex">
          <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-7"/>
          <div className="grid grid-cols-1 place-content-center">
            <p className=" text-sm pl-2 text-gray-500 lg:text-base">last updated : {fee.debit_order} march</p>
          </div>
        </div>
      </div>
      <p className="pt-8 pl-2 text-sm text-gray-400 pb-1">notice</p>
      <p className="bg-white py-4 px-6 lg:px-16 rounded-xl text-center text-sm text-gray-400 mt-1 mb-8">this amount will auto increment every month based on the fee structure amount. To disable fee tracking through the system visit the school settings in the profile settings section</p>
      <div className="flex gap-3 mb-8">
        <input
          placeholder={`update balance`}
          type={`number`}
          className="w-full text-base rounded-xl h-10 px-3 focus:outline-none resize-none "
        />
        <button 
          className={`w-fit px-4 text-center border focus:bg-[#ffcf2e] focus:text-white lg:hover:text-white active:bg-[#ffcf2e] lg:hover:bg-[#ffcf2e] border-white rounded-md bg-[#d0f0e4] text-black transition-all duration-300 py-1`}
        >
            update
        </button>
      </div>
      <p className="pl-2 pb-1 text-sm text-gray-400">student</p>
      <div className="rounded-xl bg-white">
        <UserMenu dashboard={`admin`} section={`fees/${grade}/${student_id}/profile`} all_users={student} url={false} />
      </div>
      <p className="py-2"></p>
      <MultipleMenuLinks menu={fee_info} />
      <SingleMenuLink title={'Invoices'} icon={'coins'} url={`/admindashboard/fees/${grade}/${student_id}/invoices`} border={true}/>
    </div>
  )
};

export default Balance;