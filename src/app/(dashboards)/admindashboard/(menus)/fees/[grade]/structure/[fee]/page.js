'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// componenets
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import AddFeeFrom from "@/components/(forms)/addfeeform";


const Structure = () => {

  const params = useParams()
  const grade = params.grade
  const fee_id = params.fee

  const fee = data.fees[0].fee_structure[fee_id]

  return (
    <div>
    <Crumbs title={'structure'} url={`admindashboard/fees/${grade}/structure`} />
    <PageHeading title={'Edit Fee'} subheading={` grade ${grade}`} />
    <AddFeeFrom existing_fee={fee} />
  </div>
  )
};

export default Structure;