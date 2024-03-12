// dummy data
import data from '@/app/(dashboards)/dummydata.json';

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Classes from '@/components/(classes components)/classes';
import Aligner from '@/components/(general components)/aligner';


const MyClasses = () => {

  const student = '220212349';
  
  let classroom = []
  data.classes.forEach( ( cls ) => {
    cls.students.forEach( learner_id => {
      if ( learner_id === student ) {
        classroom.push(cls)
      }
    });
  });

  const classroom_sorted = classroom.sort((a, b) => b.grade - a.grade );

  return (
    <div>
      <Aligner/>
      <Crumbs url={`studentdashboard`} title={'dashboard'} hide={true}/>
      {/* page heading */}
      <PageHeading title={'My Classes'} subheading={'all your classes'}/>
      {/* transcripts */}
      <Classes classrooms={classroom_sorted} teacher={false} grade={false} dashbaord={'student'} section={'classes'} info={false}/>
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto py-10">that&apos;s all your classes</p>
    </div>
  )
};

export default MyClasses;