// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Classes from '@/components/(classes components)/classes';


const MyClasses = () => {

  const teacher = '2938438420';
  let classroom = []
  data.classes.forEach( (cls) => {
    if (cls.teacher_id === teacher) {
      classroom.push(cls)
    }
  });

  const classroom_sorted = classroom.sort((a, b) => b.grade - a.grade )

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      {/* back link */}
      <Crumbs url={`teacherdashboard`} title={'dashboard'} hide={true}/>
      {/* page heading */}
      <PageHeading title={'Performance'} subheading={'all your classes'}/>
      {/* transcripts */}
      <Classes classrooms={classroom_sorted} teacher={false}/>
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto py-10">that&apos;s allyour classes</p>
    </div>
  )
};

export default MyClasses;