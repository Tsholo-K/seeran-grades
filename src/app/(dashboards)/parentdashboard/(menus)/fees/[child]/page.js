'use client';

import Image from "next/image";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/pageheading";
import SingleMenuLink from "@/components/signlemenulink";
import MultipleMenuLinks from "@/components/multiplemenulinks";


const Balance = () => {

  const params = useParams();
  const student_id = params.child

  let fee
  data.fees.forEach( ( balance ) => {
    if ( balance.student === student_id ) {
      fee = balance
    }
  });

  const fee_info = {
      section : [
        {
          title: 'Pay',
          url: `/parentdashboard/fees/${student_id}/pay`,
          icon: 'credit-card'
        },
        {
          title: 'Fees Structure',
          url: `/parentdashboard/fees/${student_id}/structure`,
          icon: 'layers'
        },
      ]
  }

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <Crumbs title={'fees'} url={'parentdashboard/fees'} />
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
      <MultipleMenuLinks menu={fee_info} />
      <SingleMenuLink title={'Invoices'} icon={'coins'} url={`/parentdashboard/fees/${student_id}/invoices`} border={true}/>
    </div>
  )
};

export default Balance;