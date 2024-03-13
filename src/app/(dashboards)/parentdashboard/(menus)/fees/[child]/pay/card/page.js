'use client';


import Image from "next/image";
import { useParams } from "next/navigation";

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import Subject from "@/components/(general components)/subject";
import Aligner from "@/components/(general components)/aligner";


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
    <div>
      <Aligner/>
      <Crumbs title={'pay'} url={`parentdashboard/fees/${student_id}/pay`} heading={`card`} />
      <PageHeading title={'Card'} />
      <div className="pb-10">
        <Image src={'/card-pay.svg'} alt="pay in cash"  height={100} width={100} className="w-32 lg:w-40 mx-auto"/>
        <p className="text-center mx-auto text-gray-400 text-sm lg:text-base pt-3">Once the deposit or transfer has been made please email the payment confirmation to school@email.co.za directly from the app.</p>
      </div>
      <Subject subject={'FNB'} title="Bank" />
      <MultipleMenu menu={bank_details} />
    </div>
  )
};

export default Card;