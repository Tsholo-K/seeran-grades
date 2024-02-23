'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";


const Menu = ({ menu, url, icon }) => {
  return (
    <Link href={`${url}`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
      <Image src={`/${icon}`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-6" />
      <p className={`w-full`}>{menu}</p>
      <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
    </Link>
  )
}

const Pay = () => {

  const params = useParams();
  const student_id = params.child

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <div className="fixed top-0 pt-16 w-full pb-1 bg-gray-100 z-[2]">
        <Link href={`/fees/${student_id}`} className="flex w-full text-blue-700">
          <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>balance
        </Link>
      </div>
      <div className="z-[1]">
        <div >
            <h1 className="w-full text-center pb-20 text-4xl">Pay</h1>
        </div>
        <div className="rounded-xl bg-white mt-10">
          <Menu menu={'cash'} url={`/fees/${student_id}/pay/cash`} icon={'coins.svg'} />
          <hr className="mx-5"></hr>
          <Menu menu={'eft/deposit'} url={`/fees/${student_id}/pay/card`} icon={'credit-card-animated.gif'} />
        </div>
        <p className="w-[90%] mx-auto text-center text-sm text-gray-400 pt-3">choose method</p>
      </div>
    </div>
  )
};

export default Pay;