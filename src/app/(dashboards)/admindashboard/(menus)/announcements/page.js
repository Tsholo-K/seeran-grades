import Crumbs from "@/components/crumbs";
import Notifications from "@/components/(notifications components)/notifications";
import PageHeading from "@/components/(general components)/pageheading";
import Aligner from "@/components/(general components)/aligner";
import SingleMenuLink from "@/components/(general components)/signlemenulink";


const NotificationsPage = () => {
  return (
    <div>
      <Aligner/>
      <Crumbs title={'dashboard'} url={'admindashboard'} hide={true} heading={`announcements`}/>
      <PageHeading title={'Announcements'} />
      <SingleMenuLink title={`announce`} border={true} url={`/admindashboard/announcements/announce`} icon={`megaphone`}/>
      <p className="text-sm text-gray-400 pl-2 pt-12 pb-2">notifications</p>
      <Notifications dashboard={'admin'} section="announcements" subject_line={'Friday, Fun day'} first_sentance={"we'll be having a fun day this friday so.."}/>
      <Notifications dashboard={'admin'} section="announcements" subject_line={'Time Tables'} first_sentance={"time tables have been released for all.."} read={true}/>
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto py-10">all caught up..</p>
    </div>
  )
};

export default NotificationsPage;