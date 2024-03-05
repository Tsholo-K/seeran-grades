'use client';

import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import { useParams } from "next/navigation";


const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const Invoices = () => {

  const params = useParams();
  const student_id = params.child

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <Crumbs title={'invoices'} url={`parentdashboard/fees/${student_id}`} />
      <PageHeading title={'Invoices'} />
      <p className="pl-2 font-bold text-gray-400 pb-3 text-center mx-auto">Year : 2024</p>
      {
        months.map( ( mont, index ) => (
          <>
            <div className="py-3">
              <SingleMenuLink key={index} title={mont} border={true}/>
            </div>
          </>
          
        ))
      }
      <p className="w-[90%] mx-auto text-center text-sm text-gray-400 py-10">all invoices</p>
    </div>
  )
};

export default Invoices;