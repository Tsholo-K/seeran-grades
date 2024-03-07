// dummy data
import data from '@/app/(dashboards)/dummydata.json'

//components
import ChildMenu from "@/components/(general components)/childmenu";
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";


const Children = () => {
  
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
      <Crumbs title={'dashboard'} url={'parentdashboard'} hide={true} />
      {/* page heading */}
      <PageHeading title={'Children'} subheading={'check outstanding balances and/or invoices'} />
      {/* children menu */}
      <div className="rounded-xl bg-white">
        <ChildMenu  all_children={children} dashboard={'parent'} section={'fees'}/>
      </div>
    </div>
  )
};

export default Children;