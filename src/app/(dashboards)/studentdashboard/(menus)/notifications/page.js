import Crumbs from "@/components/crumbs";
import Notifications from "@/components/(notifications components)/notifications";
import PageHeading from "@/components/(general components)/pageheading";


const NotificationsPage = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <Crumbs title={'dashboard'} url={'studentdashboard'} hide={true} heading={`notifications`}/>
      <PageHeading title={'Notifications'} />
      <Notifications subject_line={'Friday, Fun day'} first_sentance={"we'll be having a fun day this friday so.."} dashboard={'student'}/>
      <Notifications subject_line={'Time Tables'} first_sentance={"time tables have been released for all.."} read={true} dashboard={'student'}/>
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto py-10">all caught up..</p>
    </div>
  )
};

export default NotificationsPage;