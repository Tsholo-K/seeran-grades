import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import UserMenu from "@/components/(general components)/usermenu";
import Crumbs from "@/components/crumbs";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'
import Menu from "@/components/(general components)/menu";


const Admins = () => {
  return (
    <div>
      <Crumbs title={'console'} url={'admindashboard/console'} heading={`teachers`} />
      <PageHeading title={`Teachers`} subheading={`manage teacher accounts`}/>
      <SingleMenuLink title={`Add Teacher Account`} border={true} url={`/admindashboard/console/teachers/addaccount`}/>
      <p className="py-4"></p>
      <Menu border={true} title={`Teacher Accounts`} info={`${data.teachers.length}`}/>
      <p className="text-sm text-gray-400 pl-2 pb-2 pt-10">teachers</p>
      <div className="bg-white rounded-xl">
        <UserMenu all_users={data.teachers} dashboard={`admin`} grade={false} section={`console/teachers/profile`}/>
      </div>
    </div>
  )
};

export default Admins;