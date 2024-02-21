'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";


const Menu = ({ menu, info }) => {
  return (
    <p className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
      <p className={`w-full`}>{menu}</p>
      <p className="absolute right-4 text-gray-400">{info}</p>
    </p>
  )
}

const Subject = ({ subject }) => {
  return (
    <>
      <div className="py-4">
        <div className="flex">
          <p className=" text-sm pl-2 pb-1 text-gray-400">Bank</p>
        </div>
        <div className="relative rounded-xl bg-white py-1">
          <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
              <div className="pt-1 pl-2">
                  <p>{subject}</p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Card = () => {

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
          <h1 className="w-full text-center pb-20 text-4xl">Card</h1>
          <Image src={'/card-pay.svg'} alt="pay in cash"  height={100} width={100} className="mx-auto"/>
          <p className="text-center mx-auto text-gray-400 text-sm pt-3">Once the deposit or transfer has been made please email the payment confirmation to school@email.co.za directly from the app or fax payment confirmation to 000 000 0000.</p>
        </div>
        <Subject subject={'FNB'} />
        <div className="rounded-xl bg-white">
          <Menu menu={'Account Name'} info={'account name'}/>
          <hr className="mx-5"></hr>
          <Menu menu={'Account Number'} info={'00000000000'}/>
          <hr className="mx-5"></hr>
          <Menu menu={'Account Type'} info={'Cheque'}/>
          <hr className="mx-5"></hr>
          <Menu menu={'Branch'} info={'Centurion'}/>
          <hr className="mx-5"></hr>
          <Menu menu={'Branch Code'} info={'250130'}/>
        </div>
      </div>
    </div>
  )
};

export default Card;