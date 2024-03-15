'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Activities from "@/components/(activities components)/activities";
import PageHeading from "@/components/(general components)/pageheading";
import Aligner from '@/components/(general components)/aligner';

const ActivitiesPage = () => {

  const params = useParams();
  const class_id = params.class

  return (
    <>
      <div>
        <Aligner/>
        <Crumbs title={'class'} url={`teacherdashboard/classes/${class_id}`} heading={`logs`}/>
        <PageHeading title={'Logs'} subheading={'a record of all captured activities'} />
        {/* accounts section */}
        <Activities dashboard={`teacher`} section={`classes/${class_id}/activities`} activities={data.activities}/>
        <p className="text-sm w-[80%] text-gray-500 text-center mx-auto py-10">all caught up..</p>
      </div>
    </>
  )
};

export default ActivitiesPage;