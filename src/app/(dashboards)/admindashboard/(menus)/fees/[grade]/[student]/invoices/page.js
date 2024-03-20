'use client';

import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import { useParams } from "next/navigation";


const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const Invoices = () => {

  const params = useParams();
  const student_id = params.student
  const grade = params.grade

  return (
    <div>
      <Crumbs title={'student'} url={`admindashboard/fees/${grade}/${student_id}`} />
      <PageHeading title={'Invoices'} subheading={`year  2024`} />
      <p className="pl-2 text-gray-400 text-sm">invoices</p>
      {
        months.map( ( mont, index ) => (
          <div key={index} className="py-2">
            <SingleMenuLink title={mont} border={true}/>
          </div>
        ))
      }
      <p className="w-[90%] mx-auto text-center text-sm text-gray-400 py-10">all invoices</p>
    </div>
  )
};

export default Invoices;