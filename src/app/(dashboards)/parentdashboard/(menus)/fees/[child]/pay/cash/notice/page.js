'use client';

import { useParams } from "next/navigation";

// components
import Button from "@/components/button";
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/pageheading";


const Notice = () => {

  const params = useParams();
  const student_id = params.child

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <Crumbs title={'cash'} url={`parentdashboard/fees/${student_id}/pay/cash`} />
      <PageHeading title={'Give Notice'} />
      <div className="relative">
        <p className="text-sm lg:text-base text-gray-400 pl-2 py-1">amount</p>
        <div className="relative rounded-xl bg-white mb-3">
          <p className="absolute top-[9px] left-[14px]">R</p>
          <input type={``} placeholder={``} className="w-full rounded-xl pl-10 h-10 px-3 focus:outline-none"/>
        </div>
        <p className="text-sm lg:text-base text-gray-400 pl-2 py-1">info ( optional )</p>
        <div className="rounded-xl bg-white mb-3 py-2">
          <textarea type={``} placeholder={``} className="w-full resize-none rounded-xl h-[200px] px-3 focus:outline-none"></textarea>
        </div>
      </div>
      <p className="w-[90%] mx-auto text-center mb-7 text-sm lg:text-base text-gray-400">this can be anything... e.g i put the money in his flipfile, please make sure to look at it there</p>
      <Button type={'submit'} title={'notify'} />
    </div>
  )
};

export default Notice;