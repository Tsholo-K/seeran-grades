// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/pageheading";
import InputArea from "@/components/inputarea";
import Button from "@/components/button";

const Email = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <Crumbs title={'security'} url={'parentdashboard/profile/security'}/>
      {/* page heading */}
      <PageHeading title={'Update Email'} />
      {/* input area */}
      <div className="relative mb-32">
        <InputArea title='new email'/>
        <p className="text-center text-sm text-gray-400 mx-auto pt-3">we&apos;ll send an OTP to the email to confirm your identity</p>
      </div>
      <Button title={'update'} type={'submit'} />
    </div>
  )
};

export default Email;