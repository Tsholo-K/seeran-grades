'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
 

const Approved = () => {

  const params = useParams();
  const student_id = params.child

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <div className="fixed top-0 pt-16 w-full pb-1 bg-gray-100 z-[2]">
        <Link href={`/fees/${student_id}/pay/cash`} className="flex w-full text-blue-700">
          <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>cash
        </Link>
      </div>
      <div className="z-[1] mb-20">
        <div className="pb-10 ">
          <h1 className="w-full text-center pb-20 text-4xl">Notice Approved</h1>
          <Image src={'/notice-approved.svg'} alt="notice approved" height={200} width={200} className="mx-auto"/>
          <p className="text-sm text-center text-gray-400 pt-3">we&apos;ll notify the register teacher during register taking to collect the amount</p>
        </div>
      </div>
      <Link href={`/fees/${student_id}`}  type="submit" className="text-center w-full border border-white rounded-xl bg-black active:bg-blue-700 text-white lg:hover:bg-blue-700 focus:bg-blue-700 lg:hover:scale-[1.01] transition-all duration-500 py-1">back</Link>
    </div>
  )
};

export default Approved;