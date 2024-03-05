// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Activities from "@/components/(activities components)/activities";
import PageHeading from "@/components/(general components)/pageheading";

const ActivitiesPage = () => {

  return (
    <>
      <div className="w-full relative grid grid-cols-1 place-content-center">
        <Crumbs title={'dashboard'} url={'parentdashboard'} hide={true}/>
        <PageHeading title={'Logs'} subheading={'a record of captured activities'} />
        {/* accounts section */}
        <Activities activities={data.activities}/>
        <p className="text-sm w-[80%] text-gray-500 text-center mx-auto py-10">all caught up..</p>
      </div>
    </>
  )
};

export default ActivitiesPage;