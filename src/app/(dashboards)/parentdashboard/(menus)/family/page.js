// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import ChildMenu from "@/components/(general components)/childmenu";


const Family = () => {

  let children = []

  data.parents[0].children.forEach( child_id => {
    data.students.forEach( child => {
      if ( child.id === child_id ) {
      children.push(child)
      }
    });
  });
  
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      {/* back link */}
      <Crumbs title={'dashboard'} url={`parentdashboard`} hide={true}/>
      {/* page heading */}
      <PageHeading title={'Family'} subheading={'these are all the children linked to your account'}/>
      {/* children menu */}
      <div className="rounded-xl bg-white">
        <ChildMenu all_children={children} dashboard={'parent'} section={'family'} />
      </div>
    </div>
  )
};

export default Family;