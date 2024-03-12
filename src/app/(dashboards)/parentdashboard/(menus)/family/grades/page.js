// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Transcripts from "@/components/(grades components)/transcripts";
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

  let grades = []
  children.forEach( child => {
    data.grades.forEach( transcript => {
      if ( transcript.submitted_by === child.id && transcript.marked ) {
        grades.push(transcript)
      }
    });
  });

  return (
    <div>
      <Aligner/>
      <Crumbs url={`parentdashboard/family`} title={'family'}/>
      {/* page heading */}
      <PageHeading title={'Transcripts'} subheading={'all assessment results'}/>
      {/* transcripts */}
      <Transcripts transcripts={grades} dashboard={'parent'} section={'family/grades'}/>
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto py-10">all caught up..</p>
    </div>
  )
};

export default Grades;