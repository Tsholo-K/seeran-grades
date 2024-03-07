//components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";


const MultiFactorAuthentication = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <Crumbs url={'parentdashboard/profile/security'} title={'security'}/>
      {/* page heading */}
      <PageHeading title={'Multi-Factor Authentication'} />
      {/* phone number */}
      <p className="text-sm text-gray-400 pl-2 pb-1">phone number</p>
      <SingleMenuLink title={'Phone number'} url={'/parentdashboard/profile/security/mfa/phonenumber'} border={true}/>
      {/* email */}
      <p className="text-sm text-gray-400 pl-2 mt-5 pb-1">email</p>
      <SingleMenuLink title={'Email'} url={'/parentdashboard/profile/security/mfa/email'} border={true}/>
      <p className="text-sm text-gray-400 mx-auto pt-3">select one of the methods above</p>
    </div>
  )
};

export default MultiFactorAuthentication;