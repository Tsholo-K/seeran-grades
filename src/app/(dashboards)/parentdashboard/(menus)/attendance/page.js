// dummy data
import data from '@/app/(dashboards)/dummydata.json'

//components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import UserMenu from '@/components/(general components)/childmenu';


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
    <div>
      {/* back link */}
      <Crumbs title={'dashboard'} url={'parentdashboard'} hide={true} />
      {/* page heading */}
      <PageHeading title={'Children'} subheading={'check attendance'} />
      {/* children menu */}
      <div className="rounded-xl bg-white">
        <UserMenu  all_users={children} dashboard={'parent'} section={'attendance'}/>
      </div>
    </div>
  )
};

export default Children;