import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import UserMenu from "@/components/(general components)/usermenu";
import Crumbs from "@/components/crumbs";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'


const Admins = () => {
  return (
    <div>
        <Crumbs title={'console'} url={'admindashboard/console'}hide={true} />
        <PageHeading title={`Admins`} subheading={`manage admin accounts`}/>
        <SingleMenuLink title={`Add Admin Account`} border={true} url={`/admindashboard/console/admins/addaccount`}/>
        <p className="text-sm text-gray-400 pl-2 pb-2 pt-10">admins</p>
        <div className="bg-white rounded-xl">
            <UserMenu all_users={data.admins} dashboard={`admin`} grade={false} section={`console/admins/profile`}/>
        </div>
    </div>
  )
};

export default Admins;