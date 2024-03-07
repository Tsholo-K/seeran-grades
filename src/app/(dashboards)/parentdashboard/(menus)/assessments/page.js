// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components 
import Crumbs from "@/components/crumbs";
import Assessments from "@/components/(achievements components)/(assessments components)/assessments";
import PageHeading from '@/components/(general components)/pageheading';


const Grades = () => {

  let children = []
  data.parents[0].children.forEach( child_id => {
    data.students.forEach( child => {
      if ( child.id === child_id ) {
      children.push(child)
      }
    });
  });

  let classes = []
  children.forEach( child => {
    data.classes.forEach( (cls) => {
      cls.students.forEach( student => {
        if ( child.id === student ) {
          classes.push(cls)
        }
      });
    });
  });

  let assessments = []
  classes.forEach( cls => {
    data.assessments.forEach( (assessment) => {
      if ( cls.id === assessment.class_id ) {
        assessments.push(assessment)
      }
    });
  });

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      {/* back link */}
      <Crumbs url={`parentdashboard`} title={'dashboard'} hide={true}/>
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