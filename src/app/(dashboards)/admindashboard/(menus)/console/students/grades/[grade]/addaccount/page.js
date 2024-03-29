'use client'

import { useParams } from "next/navigation";

// components
import PageHeading from '@/components/(general components)/pageheading';
import Crumbs from '@/components/crumbs';
import StudentCreationFrom from '@/components/(forms)/studentcreationform';


const AccountCreation = () => {

  const params = useParams();
  const grade = params.grade

  return (
    <div>
      <Crumbs title={'students'} url={`admindashboard/console/students/grades/${grade}`} heading={`account creation`} />
      <PageHeading title={`Add Account`} subheading={`student account creation`}/>
      <p className="pl-2 text-sm text-gray-400 pt-8 pb-1">notice</p>
      <p className="w- full text-center py-3 lg:py-7 bg-white rounded-xl text-gray-500 px-6 lg:px-16">we use ID/Passport numbers for identification purposes, as a child cannot be expected to have an email address.</p>
      <StudentCreationFrom/>
      <p className='text-sm text-gray-400 text-center pt-1'>user needs to sign in to activate the account</p>
    </div>
  )
};

export default AccountCreation;