'use client';


import Image from "next/image";
import { useParams } from "next/navigation";

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/pageheading";
import MultipleMenu from "@/components/multiplemenu";


const Subject = ({ subject }) => {
  return (
    <>
      <div className="py-4">
        <div className="flex">
          <p className=" text-sm lg:text-base pl-2 pb-1 text-gray-400">Bank</p>
        </div>
        <div className="relative rounded-xl bg-white py-1">
          <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
              <div className="pt-1 pl-2">
                  <p>{subject}</p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Card = () => {

  const params = useParams();
  const student_id = params.child

  const bank_details = [
    {
      title: 'Account Name',
      info: 'account name'
    },
    {
      title: 'Account Number',
      info: '00000000000'
    },
    {
      title: 'Account Type',
      info: 'Cheque'
    },
    {
      title: 'Branch',
      info: 'Centurion'
    },
    {
      title: 'Branch Code',
      info: '250130'
    },
  ]

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <Crumbs title={'pay'} url={`parentdashboard/fees/${student_id}/pay`} />
      <PageHeading title={'Card'} />
      <div className="pb-10">
        <Image src={'/card-pay.svg'} alt="pay in cash"  height={100} width={100} className="w-32 lg:w-40 mx-auto"/>
        <p className="text-center mx-auto text-gray-400 text-sm lg:text-base pt-3">Once the deposit or transfer has been made please email the payment confirmation to school@email.co.za directly from the app.</p>
      </div>
      <Subject subject={'FNB'} />
      <MultipleMenu menu={bank_details} />
    </div>
  )
};

export default Card;