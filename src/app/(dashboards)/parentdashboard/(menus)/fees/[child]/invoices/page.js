'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";


const Invoice = ({ month }) => {
  return (
    <div className="rounded-xl bg-white mb-7">
      <Link href={`/fees/pay`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
        <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
        <p className={`w-full`}>{month}</p>
        <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
      </Link>
    </div>
  )
};

const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const Invoices = () => {

  const params = useParams();
  const student_id = params.child

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <div className="fixed top-0 pt-16 w-full pb-1 bg-gray-100 z-[2]">
        <Link href={`/fees/${student_id}`} className="flex w-full text-blue-700">
          <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>Invoices
        </Link>
      </div>
      <div className="z-[1]">
        <div >
            <h1 className="w-full text-center pb-20 text-4xl">Invoices</h1>
        </div>
        <p className="pl-2 font-bold text-gray-400 pb-3 text-center mx-auto">Year : 2024</p>
        <div>
        {
          months.map( ( mont, index ) => (
            <Invoice key={index} month={mont} />
          ))
        }
        </div>
        <p className="w-[90%] mx-auto text-center text-sm text-gray-400 pt-1">all invoices</p>
      </div>
     
    </div>
  )
};

export default Invoices;