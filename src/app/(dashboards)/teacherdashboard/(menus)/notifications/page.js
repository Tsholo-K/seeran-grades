import Crumbs from "@/components/crumbs";
import Notifications from "@/components/(notifications components)/notifications";
import PageHeading from "@/components/(general components)/pageheading";


const NotificationsPage = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <Crumbs title={'dashboard'} url={'parentdashboard'} hide={true}/>
      <PageHeading title={'Notifications'} />
      <Notifications />
      <Notifications read={true}/>
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto py-10">all caught up..</p>
    </div>
  )
};

export default NotificationsPage;