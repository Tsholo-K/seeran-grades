'use client';

import { useParams } from "next/navigation";
import Image from "next/image";

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import Aligner from "@/components/(general components)/aligner";


const Cash = () => {

  const params = useParams();
  const student_id = params.child

  return (
    <div>
      <Aligner/>
      <Crumbs title={'pay'} url={`parentdashboard/fees/${student_id}/pay`} heading={`cash`}/>
      <PageHeading title={'Cash'} />
      <div className="pb-10 ">
        <Image src={'/cash-pay.svg'} alt="pay in cash"  height={100} width={100} className="w-32 lg:w-40 mx-auto"/>
        <p className="text-center mx-auto text-gray-400 text-sm lg:text-base pt-3">You can go to the office to settle any outstanding balance with cash</p>
      </div>
      <SingleMenuLink title={'Give Notice'} url={`/parentdashboard/fees/${student_id}/pay/cash/notice`} icon={'speech-black'} border={true}/>
      <p className="w-[90%] mx-auto text-center text-sm lg:text-base text-gray-400 pt-3">Or you could give notice and we&apos;ll notify the register teacher to collect the amount from the child during register class</p>
    </div>
  )
};

export default Cash;