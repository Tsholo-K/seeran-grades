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
      {/* outstanding balance */}
      <div className="rounded-xl bg-white p-3 mb-7">
        <p className="text-sm text-gray-500 pl-3 pb-3 lg:text-base">outstanding balance :</p>
        <p className="mx-auto w-fit text-5xl lg:text-7xl py-4 lg:py-6 text-[#66b0f0] font-extrabold">R{fee.outstanding_blalnce}</p>
        <div className="flex w-fit mx-auto">
          <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-7"/>
          <div className="grid grid-cols-1 place-content-center">
            <p className=" text-sm pl-2 text-gray-500 lg:text-base">next debit order date : {fee.debit_order} march</p>
          </div>
        </div>
      </div>
      <p className="pl-2 pb-1 text-sm text-gray-400">student</p>
      <div className="rounded-xl bg-white">
        <UserMenu all_users={student}/>
      </div>
      <p className="py-2"></p>
      <MultipleMenuLinks menu={fee_info} />
      <SingleMenuLink title={'Invoices'} icon={'coins'} url={`/admindashboard/fees/${grade}/${student_id}/invoices`} border={true}/>
    </div>
  )
};

export default Balance;