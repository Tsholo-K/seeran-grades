'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
 

const Notice = () => {

  const params = useParams();
  const student_id = params.child

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <div className="fixed top-0 pt-16 w-full pb-1 bg-gray-100 z-[2]">
        <Link href={`/fees/${student_id}/pay/cash`} className="flex w-full text-blue-700">
          <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>cash
        </Link>
      </div>
      <div className="z-[1]">
        <div className="pb-10 ">
            <h1 className="w-full text-center pb-20 text-4xl">Give Notice</h1>
        </div>
        <div className="relative mb-3">
          <p className="text-sm text-gray-400 pl-2 py-1">amount</p>
          <div className="relative rounded-xl bg-white mb-3">
            <p className="absolute top-[9px] left-[14px]">R</p>
            <input type={``} placeholder={``} className="w-full rounded-xl pl-10 h-10 px-3 focus:outline-none"/>
          </div>
          <p className="text-sm text-gray-400 pl-2 py-1">info ( optional )</p>
          <div className="rounded-xl bg-white mb-3 py-2">
            <textarea type={``} placeholder={``} className="w-full rounded-xl h-[200px] px-3 focus:outline-none"></textarea>
          </div>
        </div>
        <p className="w-[90%] mx-auto text-center mb-4 text-sm text-gray-400">this can be anything... e.g i put the money in his flipfile, please make sure to look at it there</p>
      </div>
      <Link href={`/fees/${student_id}/pay/cash/notice/approved`}  type="submit" className="text-center w-full border border-white rounded-xl bg-black active:bg-blue-700 text-white lg:hover:bg-blue-700 focus:bg-blue-700 lg:hover:scale-[1.01] transition-all duration-500 py-1">notify</Link>
    </div>
  )
};

export default Notice;