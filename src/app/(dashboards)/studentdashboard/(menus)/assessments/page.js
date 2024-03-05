// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components 
import Crumbs from "@/components/crumbs";
import Assessments from "@/components/(assessments components)/assessments";
import PageHeading from '@/components/(general components)/pageheading';


const Grades = () => {

  const assessments = data.assessments

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      {/* back link */}
      <Crumbs url={`studentdashboard`} title={'dashboard'} hide={true}/>
      {/* page heading */}
      <PageHeading title={'Assessments'} subheading={'due assessments'} />
      {/* assesments */}
      {
        assessments.map( ( assessment, index ) => (
          <>
            <Assessments key={index} assessment={assessment}/>
          </>
        ))
      }
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto py-10">all caught up..</p>
    </div>
  )
};

export default Grades;