// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import UserMenu from '@/components/(general components)/childmenu';


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
    <div>
      {/* back link */}
      <Crumbs title={'dashboard'} url={`parentdashboard`} hide={true}/>
      {/* page heading */}
      <PageHeading title={'Family'} subheading={'these are all the children linked to your account'}/>
      {/* children menu */}
      <div className="rounded-xl bg-white">
        <UserMenu all_users={children} dashboard={'parent'} section={'family'} />
      </div>
    </div>
  )
};

export default Family;