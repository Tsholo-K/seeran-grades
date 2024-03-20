'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// componenets
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import FeeStructureFrom from "@/components/(forms)/addfeeform";


const Structure = () => {

  const params = useParams()
  const grade = params.grade

  let total = 0
  data.fees[0].fee_structure.forEach( fee => {
    total = total + parseInt(fee.info)
  })

  return (
    <div>
    <Crumbs title={'structure'} url={`admindashboard/fees/${grade}/structure`} />
    <PageHeading title={'Add Fee'} subheading={` grade ${grade}`} />
    <FeeStructureFrom fees={data.fees[0].fee_structure} />
  </div>
  )
};

export default Structure;