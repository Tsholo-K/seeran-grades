'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// componenets
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Menu from "@/components/(general components)/menu";
import SingleMenuLink from "@/components/(general components)/signlemenulink";


const Structure = () => {

  const params = useParams()
  const grade = params.grade

  let total = 0
  data.fees[0].fee_structure.forEach( fee => {
    total = total + parseInt(fee.info)
  })

  return (
    <div>
      <Crumbs title={'grade'} url={`admindashboard/fees/${grade}`} />
      <PageHeading title={'Structure'} subheading={`grade ${grade}`}/>
      <Menu title={'total'} info={total} money={true} border={true}/>
      <p className="mx-auto text-sm text-center text-gray-400 py-1 mb-8">total debitable/payable amount p/m</p>
      <div className="bg-white rounded-xl mb-6">
        {
          data.fees[0].fee_structure.map( (fee, index) => (
              ( data.fees[0].fee_structure.length > 1 && index !== data.fees[0].fee_structure.length - 1 )
              ?
              <>
                <SingleMenuLink key={index} title={fee.title} info={`R ${fee.info}`} url={`/admindashboard/fees/${grade}/structure/${index}`} />
                <hr className="mx-5"></hr>
              </>
              :
              <SingleMenuLink key={index} title={fee.title} info={`R ${fee.info}`} url={`/admindashboard/fees/${grade}/structure/${index}`} />            
          ))
        }
      </div>
      <SingleMenuLink title={`Add Fee`} icon={`edit-structure`} border={true} url={`/admindashboard/fees/${grade}/structure/addfee`} />
    </div>
  )
};

export default Structure;

