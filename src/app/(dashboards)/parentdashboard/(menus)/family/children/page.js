// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import UserMenu from '@/components/(general components)/childmenu';
import Aligner from '@/components/(general components)/aligner';


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
      <Aligner/>
      <Crumbs title={'family'} url={`parentdashboard/family`}/>
      <PageHeading title={'Children'} subheading={'these are all the children linked to your account'}/>
      <div className="rounded-xl bg-white mt-6">
        <UserMenu all_users={children} dashboard={'parent'} section={'family/children'} />
      </div>
    </div>
  )
};

export default Family;