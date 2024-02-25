// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/pageheading";
import InputArea from "@/components/inputarea";
import Button from "@/components/button";


const PasswordChange = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <Crumbs url={'parentdashboard/profile/security'} title={'security'}/>
      {/* page heading */}
      <PageHeading title={'Password Change'} />
      {/* input areas */}
      <div className="relative mb-20">
        <InputArea title='old password' type={'text'}/>
        <div className="mt-16">
          <InputArea title='new password' type={'text'}/>
          <InputArea title='confirm new password' type={'text'}/>
        </div>
      </div>
      {/* button */}
      <Button title={'update'} type={'submit'} />
    </div>
  )
};

export default PasswordChange;