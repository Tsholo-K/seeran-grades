// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import ChildMenu from "@/components/(general components)/childmenu";


const Family = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      {/* back link */}
      <Crumbs title={'dashboard'} url={`parentdashboard`} hide={true}/>
      {/* page heading */}
      <PageHeading title={'Family'} subheading={'these are all the children linked to your account'}/>
      {/* children menu */}
      <div className="rounded-xl bg-white">
        <ChildMenu all_children={data.students} dashboard={'parent'} section={'family'} />
      </div>
    </div>
  )
};

export default Family;