'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(menus)/dummydata.json';


const MenuLink = ({ description, amount }) => {
  return (
    <div className="relative flex py-3 gap-1 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p>{description}</p>
      <p className="text-gray-400 absolute right-4">R {amount}</p>
    </div>
  )
};


const Structure = () => {

  const params = useParams()
  const student_id = params.child

  let structure
  data.fees.forEach( ( balance ) => {
    if( balance.student == student_id ) {
      structure = balance.fee_structure
    }
  });

  let total = 0
  structure.forEach( fee => {
    total = total + parseInt(fee.amount)
  })

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <div className="fixed top-0 pt-16 w-full pb-1 bg-gray-100 z-[2]">
        <Link href={`/fees/${student_id}`} className="flex w-full text-blue-700">
          <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>balance
        </Link>
      </div>
      <div className="z-[1]">
        <div >
            <h1 className="w-full text-center pb-20 text-4xl">Structure</h1>
        </div>
        <div className="rounded-xl bg-white">
          {
            structure.map( ( fee, index )=> (
              <MenuLink key={index} description={fee.description} amount={fee.amount}/>
            ))
          }
        </div>
        <div className="rounded-xl bg-white mt-16">
          <MenuLink description={'total'} amount={total}/>
        </div>
        <p className="mx-auto text-sm text-gray-400 py-1">total debitable amount p/m</p>
      </div>
      
    </div>
  )
};

export default Structure;