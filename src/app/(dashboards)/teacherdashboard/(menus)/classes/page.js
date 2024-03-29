// dummy data
import data from '@/app/(dashboards)/dummydata.json';

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Classes from '@/components/(classes components)/classes';
import Aligner from '@/components/(general components)/aligner';


const MyClasses = () => {

  const teacher = '2938438420';
  
  let classroom = []
  data.classes.forEach( (cls) => {
    if (cls.teacher_id === teacher) {
      classroom.push(cls)
    }
  });

  const classroom_sorted = classroom.sort((a, b) => b.grade - a.grade );

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <Aligner/>
      <Crumbs url={`teacherdashboard`} title={'dashboard'} hide={true} heading={`my classes`}/>
      {/* page heading */}
      <PageHeading title={'My Classes'} subheading={'all your classes'}/>
      {/* transcripts */}
      <Classes classrooms={classroom_sorted} teacher={false} dashbaord={'teacher'} section={'classes'} info={false}/>
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto py-10">that&apos;s all your classes</p>
    </div>
  )
};

export default MyClasses;