// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Transcripts from "@/components/(grades components)/transcripts";


const Grades = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      {/* back link */}
      <Crumbs url={`parentdashboard`} title={'dashboard'} hide={true}/>
      {/* page heading */}
      <PageHeading title={'Transcripts'} subheading={'all assessment results'}/>
      {/* transcripts */}
      <Transcripts transcripts={data.grades} />
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto py-10">all caught up..</p>
    </div>
  )
};

export default Grades;