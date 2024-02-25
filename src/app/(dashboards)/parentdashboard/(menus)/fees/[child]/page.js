'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'


const Menu = ({ menu, icon, url, student_id }) => {
  return (
    <Link href={`/fees/${student_id}/${url}`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <Image src={`/${icon}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
      <p className={`w-full`}>{menu}</p>
      <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
    </Link>
  )
}

const Balance = () => {

  const params = useParams();
  const student_id = params.child

  let fee
  data.fees.forEach( ( balance ) => {
    if ( balance.student === student_id ) {
      fee = balance
    }
  });

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <div className="fixed top-0 pt-16 w-full pb-1 bg-gray-100 z-[2]">
        <Link href={'/fees'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>fees</Link>
      </div>
      <div className="z-[1]">
        <div >
            <h1 className="w-full text-center pb-16 text-4xl">Balance</h1>
        </div>
        {/* balance section */}
        <div className="rounded-xl bg-white p-3  mb-7">
            <p className="text-sm text-gray-500 pl-3 pb-3">outstanding balance :</p>
            <p className="mx-auto w-fit text-5xl pt-4 pb-3 text-blue-700 font-extrabold">R{fee.outstanding_blalnce}</p>
            <div className="flex w-fit mx-auto">
              <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
              <p className=" text-sm pl-2 text-gray-500">next debit order date : {fee.debit_order} march</p>
            </div>
        </div>
        <div className="rounded-xl bg-white mt-10">
          <Menu menu={'Pay'} icon={'credit-card'} url={'pay'} student_id={student_id}/>
          <hr className="mx-5"></hr>
          <Menu menu={'Fees Structure'} icon={'layers'} url={'structure'} student_id={student_id}/>
        </div>
        <div className="rounded-xl bg-white mt-10">
          <Menu menu={'Invoices'} icon={'coins'} url={'invoices'} student_id={student_id}/>
        </div>
        <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto pt-2"></p>
      </div>
    </div>
  )
};

export default Balance;