// components
import Crumbs from "@/components/crumbs";
import MultipleMenu from "@/components/(general components)/multiplemenu";

const notification_info = [
  {
    title: 'Sender',
    info: 'Principal',
  },
  {
    title: 'Date',
    info: '12 febuary 2024',
  }
]

const Notifications = () => {
  return (
    <div>
      <Crumbs title={'notifications'} url={'parentdashboard/notifications'} />
      <div className="mb-16">
        <div className="w-full mx-auto">
          <p className="text-2xl lg:text-5xl text-center pt-6 w-[95%] mx-auto">seeran grades our new school management system</p>
        </div>
      </div>
      <div className="py-4 mb-10">
        <div className="flex">
          <p className=" text-sm lg:text-base pl-2 pb-1 text-gray-400">message</p>
        </div>
        <div className="relative rounded-xl bg-white p-4">
          <p className="w-full py-1 px-2">
            We understand the importance of staying connected and informed about your child&apos;s education journey. 
            That&apos;s why we&apos;re excited to introduce Seeran Grades, a user-friendly platform designed to empower you with
            real-time insights into your child&apos;s academic progress and well-being
          </p>
        </div>
      </div>
      <MultipleMenu menu={notification_info}/>
    </div>
  )
};

export default Notifications;