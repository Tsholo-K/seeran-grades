'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// componenets
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Menu from "@/components/(general components)/menu";
import MultipleMenu from "@/components/(general components)/multiplemenu";


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
    total = total + parseInt(fee.info)
  })

  return (
    <div>
      <Crumbs title={'balance'} url={`parentdashboard/fees/${student_id}`} />
      <PageHeading title={'Structure'} />
      <MultipleMenu menu={structure} />
      <Menu title={'total'} info={total} border={true}/>
      <p className="mx-auto text-sm text-center text-gray-400 py-1">total debitable amount p/m</p>
    </div>
  )
};

export default Structure;