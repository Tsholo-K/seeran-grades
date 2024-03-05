// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import InputArea from "@/components/(general components)/inputarea";
import Button from "@/components/(general components)/button";

const Email = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <Crumbs title={'security'} url={'parentdashboard/profile/security'}/>
      {/* page heading */}
      <PageHeading title={'Update Phone Number'} />
      {/* input area */}
      <div className="relative mb-32">
        <InputArea title='new phone number'/>
        <p className="text-center text-sm text-gray-400 mx-auto pt-3">we&apos;ll send an OTP to your phone number to confirm your identity</p>
      </div>
      <Button title={'update'} type={'submit'} />
    </div>
  )
};

export default Email;