// dummy data
import data from '@/app/(dashboards)/dummydata.json';

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import MultipleMenuLinks from '@/components/(general components)/multiplemenulinks';


const MyPerformance = () => {

  const grades = {
    section : [
      {
        title: "Grade 1",
        url: `/admindashboard/performance/grade/1`
      },
      {
        title: "Grade 2",
        url: `/admindashboard/performance/grade/2`
      },
      {
        title: "Grade 3",
        url: `/admindashboard/performance/grade/3`
      },
      {
        title: "Grade 4",
        url: `/admindashboard/performance/grade/4`
      },
      {
        title: "Grade 5",
        url: `/admindashboard/performance/grade/5`
      },
      {
        title: "Grade 6",
        url: `/admindashboard/performance/grade/6`
      },
      {
        title: "Grade 7",
        url: `/admindashboard/performance/grade/7`
      }
    ]
  }

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      {/* back link */}
      <Crumbs url={`admindashboard`} title={'dashboard'} hide={true}/>
      {/* page heading */}
      <PageHeading title={'Performance'} subheading={'grades'}/>
      <MultipleMenuLinks menu={grades} />
      <p className=" text-sm w-[80%] text-gray-400 text-center mx-auto py-10">that&apos;s all grades</p>
    </div>
  )
};

export default MyPerformance;