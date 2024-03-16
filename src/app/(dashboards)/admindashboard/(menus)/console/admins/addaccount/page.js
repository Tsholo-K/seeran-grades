import Button from '@/components/(general components)/button'
import InputArea from '@/components/(general components)/inputarea'
import PageHeading from '@/components/(general components)/pageheading'
import Crumbs from '@/components/crumbs'
import React from 'react'


const page = () => {
  return (
    <div>
        <Crumbs title={'admins'} url={'admindashboard/console/admins'} heading={`account creation`} />
        <PageHeading title={`Add Account`} subheading={`admin account creation`}/>
        <InputArea type={`text`} title={`ID Number`} />
        <InputArea type={`text`} title={`Surname`} />
        <InputArea type={`text`} title={`Name`} />
        <InputArea type={`text`} title={`Email Address`} />
        <InputArea type={`text`} title={`Phone Number`} />
        <p className='py-4'></p>
        <Button title={`add account`} />
        <p className='text-sm text-gray-400 text-center pt-1'>user needs to sign in to activate account</p>
    </div>
  )
}

export default page