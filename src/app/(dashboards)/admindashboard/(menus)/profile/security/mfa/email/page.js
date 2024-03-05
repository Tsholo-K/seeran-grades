// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Button from "@/components/(general components)/button";
import InputArea from "@/components/(general components)/inputarea";


const PhoneNumberAuthentication = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <Crumbs url={'parentdashboard/profile/security/mfa'} title={'mfa'}/>
      {/* page heading */}
      <PageHeading title={'Multi-Factor Authentication'} />
      {/* input area */}
      <InputArea title='One Time Passcode' type={'text'}/>
      <p className="text-sm text-gray-400 mx-auto pt-3 mb-16">we sent an OTP to your email</p>
      {/* button */}
      <Button title={'authenticate'}/>
    </div>
  )
};

export default PhoneNumberAuthentication;