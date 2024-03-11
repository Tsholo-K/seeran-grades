// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import InputArea from "@/components/(general components)/inputarea";
import Button from "@/components/(general components)/button";

const Email = () => {
  return (
    <div>
      {/* back link */}
      <Crumbs title={'security'} url={'admindashboard/profile/security'}/>
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