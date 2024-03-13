// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components 
import Crumbs from "@/components/crumbs";
import Assessments from "@/components/(assessments components)/assessments";
import PageHeading from '@/components/(general components)/pageheading';
import Aligner from '@/components/(general components)/aligner';


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

  let assesments_set = []
  assessments.forEach( assessment => {
    const already_there = assesments_set.find((assess) => assess.id === assessment.id);
    if (already_there) {
      null
    } else {
      assesments_set.push(assessment)
    }
  });
  
  return (
    <div>
      <Aligner/>
      <Crumbs url={`parentdashboard/family`} title={'family'} heading={`assessments`}/>
      {/* page heading */}
      <PageHeading title={'Assessments'} subheading={'due assessments'} />
      {/* assesments */}
      {
        assesments_set.map( ( assessment, index ) => (
          <>
            <Assessments dashboard={'parent'} section={'family/assessments'} key={index} date_title={'Due'} assessment={assessment}/>
          </>
        ))
      }
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto py-10">all caught up..</p>
    </div>
  )
};

export default Grades;