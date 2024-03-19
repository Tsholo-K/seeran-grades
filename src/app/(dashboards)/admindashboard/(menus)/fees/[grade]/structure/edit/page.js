'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// componenets
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Menu from "@/components/(general components)/menu";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import Aligner from "@/components/(general components)/aligner";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import Button from "@/components/(general components)/button";


const Structure = () => {

  const params = useParams()
  const grade = params.grade

  let total = 0
  data.fees[0].fee_structure.forEach( fee => {
    total = total + parseInt(fee.info)
  })

  return (
    <div>
    <Aligner/>
    <Crumbs title={'structure'} url={`admindashboard/fees/${grade}/structure`} />
    <PageHeading title={'Structure'} subheading={` grade ${grade} fee structure`} />
    <Button title={`save`} />
    <p className="py-4"></p>
    <Menu title={'total'} info={total} border={true}/>
    <p className="mx-auto text-sm text-center text-gray-400 py-1 mb-8">total debitable/payable amount per month in rands</p>
    <MultipleMenu menu={data.fees[0].fee_structure} />
    <Button title={`add fee`}/>
  </div>
  )
};

export default Structure;