// dummy data
import data from '@/app/(dashboards)/dummydata.json'

//components
import ChildMenu from "@/components/childmenu";
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/pageheading";


const Children = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      {/* back link */}
      <Crumbs title={'dashboard'} url={'parentdashboard'} hide={true} />
      {/* page heading */}
      <PageHeading title={'Children'} subheading={'check attendance'} />
      {/* children menu */}
      <div className="rounded-xl bg-white">
        <ChildMenu  all_children={data.students} section={'attendance'}/>
      </div>
    </div>
  )
};

export default Children;