'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";


const Menu = ({ menu, url, icon }) => {
  return (
    <Link href={`${url}`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
      <Image src={`/${icon}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
      <p className={`w-full`}>{menu}</p>
      <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
    </Link>
  )
}

const Cash = () => {

  const params = useParams();
  const student_id = params.child

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <div className="fixed top-0 pt-16 w-full pb-1 bg-gray-100 z-[2]">
        <Link href={`/fees/${student_id}/pay`} className="flex w-full text-blue-700">
          <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>pay
        </Link>
      </div>
      <div className="z-[1]">
        <div className="pb-10 ">
          <h1 className="w-full text-center pb-20 text-4xl">Cash</h1>
          <Image src={'/cash-pay.svg'} alt="pay in cash"  height={100} width={100} className="mx-auto"/>
          <p className="text-center mx-auto text-gray-400 text-sm pt-3">You can go to the office to settle any outstanding balance with cash</p>
        </div>
        <div className="rounded-xl bg-white mt-10">
          <Menu menu={'Give Notice'} url={`/fees/${student_id}/pay/cash/notice`} icon={'speech-black'} />
        </div>
        <p className="w-[90%] mx-auto text-center text-sm text-gray-400 pt-3">Or you could give notice and we&apos;ll notify the register teacher to collect the amount from the child during register class</p>
      </div>
         </div>
  )
};

export default Cash;