// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import MultipleMenuLinks from '@/components/(general components)/multiplemenulinks';


const MyPerformance = () => {

  const grades = {
    section : [
      {
        title: "Grade 1",
        url: `/admindashboard/console/students/grades/1`,
        icon: `grade-level`
      },
      {
        title: "Grade 2",
        url: `/admindashboard/console/students/grades/2`,
        icon: `grade-level`
      },
      {
        title: "Grade 3",
        url: `/admindashboard/console/students/grades/3`,
        icon: `grade-level`
      },
      {
        title: "Grade 4",
        url: `/admindashboard/console/students/grades/4`,
        icon: `grade-level`
      },
      {
        title: "Grade 5",
        url: `/admindashboard/console/students/grades/5`,
        icon: `grade-level`
      },
      {
        title: "Grade 6",
        url: `/admindashboard/console/students/grades/6`,
        icon: `grade-level`
      },
      {
        title: "Grade 7",
        url: `/admindashboard/console/students/grades/7`,
        icon: `grade-level`
      }
    ]
  }

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <Crumbs url={`admindashboard/console/students`} title={'students'} heading={`grades`}/>
      {/* page heading */}
      <PageHeading title={'Grades'} subheading={'all grades'}/>
      <MultipleMenuLinks icon={true} menu={grades} />
      <p className=" text-sm w-[80%] text-gray-400 text-center mx-auto py-10">that&apos;s all grades</p>
    </div>
  )
};

export default MyPerformance;