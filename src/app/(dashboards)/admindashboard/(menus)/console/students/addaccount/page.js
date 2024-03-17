import PageHeading from '@/components/(general components)/pageheading';
import Crumbs from '@/components/crumbs';
import React from 'react';
import StudentCreationFrom from '@/components/(forms)/studentcreationfrom';


const AccountCreation = () => {

  return (
    <div>
      <Crumbs title={'students'} url={'admindashboard/console/students'} heading={`account creation`} />
      <PageHeading title={`Add Account`} subheading={`student account creation`}/>
      <p className="pl-2 text-sm text-gray-400 pt-8 pb-1">notice</p>
      <p className="w- full text-center py-3 px-4 bg-white rounded-xl text-gray-500">we use the ID/Passport number for identification purposes, as a child cannot be expected to have an email address and phone number</p>
      <StudentCreationFrom/>
      <p className='text-sm text-gray-400 text-center pt-1'>user needs to sign in to activate the account</p>
    </div>
  )
};

export default AccountCreation;