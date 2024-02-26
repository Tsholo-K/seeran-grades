'use client';

import { useParams } from "next/navigation";

// components
import Crumbs from "@/components/crumbs";
import MultipleMenuLinks from "@/components/multiplemenulinks";
import PageHeading from "@/components/pageheading";


const Pay = () => {

  const params = useParams();
  const student_id = params.child

  const methods = {
    section : [
      {
        title: 'Cash',
        icon: 'coins',
        url: `/parentdashboard/fees/${student_id}/pay/cash`
      },
      {
        title: 'Eft/Deposit',
        icon: 'credit-card',
        url: `/parentdashboard/fees/${student_id}/pay/card`
      },
    ]
  }

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <Crumbs title={'balance'} url={`parentdashboard/fees/${student_id}`} />
      <PageHeading title={'Pay'} />
      <MultipleMenuLinks menu={methods} />
      <p className="w-[90%] mx-auto text-center text-sm lg:text-base text-gray-400">choose method</p>
    </div>
  )
};

export default Pay;