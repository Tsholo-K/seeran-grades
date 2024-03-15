// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import MultipleMenuLinks from '@/components/(general components)/multiplemenulinks';
import Aligner from "@/components/(general components)/aligner";


const MyPerformance = () => {

  const grades = {
    section : [
      {
        title: "Grade 1",
        url: `/admindashboard/performance/grade/1`,
        icon: `grade-level`
      },
      {
        title: "Grade 2",
        url: `/admindashboard/performance/grade/2`,
        icon: `grade-level`
      },
      {
        title: "Grade 3",
        url: `/admindashboard/performance/grade/3`,
        icon: `grade-level`
      },
      {
        title: "Grade 4",
        url: `/admindashboard/performance/grade/4`,
        icon: `grade-level`
      },
      {
        title: "Grade 5",
        url: `/admindashboard/performance/grade/5`,
        icon: `grade-level`
      },
      {
        title: "Grade 6",
        url: `/admindashboard/performance/grade/6`,
        icon: `grade-level`
      },
      {
        title: "Grade 7",
        url: `/admindashboard/performance/grade/7`,
        icon: `grade-level`
      }
    ]
  }

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <Aligner/>
      <Crumbs url={`admindashboard`} title={'dashboard'} hide={true} heading={`performance`}/>
      {/* page heading */}
      <PageHeading title={'Performance'} subheading={'all grades'}/>
      <MultipleMenuLinks icon={true} menu={grades} />
      <p className=" text-sm w-[80%] text-gray-400 text-center mx-auto py-10">that&apos;s all grades</p>
    </div>
  )
};

export default MyPerformance;