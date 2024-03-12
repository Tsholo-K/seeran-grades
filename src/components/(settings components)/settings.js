import MultipleMenuLinks from "@/components/(general components)/multiplemenulinks";
import PageHeading from "@/components/(general components)/pageheading";
import Crumbs from "@/components/crumbs";
import Image from "next/image";
import Aligner from "../(general components)/aligner";


const menulinks = {
  section : [{
    title: 'help',
    icon: 'headset',
  },
  {
    title: 'report a bug',
    icon: 'bug',
  }]
}


const Settings = ({ dashboard }) => {
  return (
    <div>
      <Aligner/>
      <Crumbs title={'dashboard'} url={`${dashboard}dashboard`} hide={true}/>
      <PageHeading title={'Settings'} />
      <div className="w-fit my-10 mx-auto">
          <div className="mx-auto w-fit pb-4">
            <Image priority src={'/favicon.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-[250px] max-w-[250px] " />
          </div>
          <h2 className="w-full text-center text-xl">seeran grades</h2>
      </div>
      {/* menu section */}
      <MultipleMenuLinks menu={menulinks} />
    </div>
  )
};

export default Settings;