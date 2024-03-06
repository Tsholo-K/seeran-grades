// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Classes from '@/components/(classes components)/classes';
import SingleMenuLink from '@/components/(general components)/signlemenulink';
import ChildMenu from '@/components/(general components)/childmenu';


const MyRegisterClass = () => {

  const teacher = '2938438420';
  let register_classroom = []
  data.register_classes.forEach( (cls) => {
    if (cls.register_teacher_id === teacher) {
      register_classroom.push(cls)
    }
  });

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      {/* back link */}
      <Crumbs url={`teacherdashboard`} title={'dashboard'} hide={true}/>
      {/* page heading */}
      <PageHeading title={'Register Class'} subheading={''}/>
      {/* transcripts */}
      <Classes classrooms={register_classroom} teacher={false} subject={false}/>
      <div className='pt-7'>
        <p className='text-center text-sm text-gray-400 my-2'>this form can only be filled once a day</p>
        <SingleMenuLink title={'Take Attendance Register'} url={'/teacherdashboard/registerclass/attendance'} border={true}/>
      </div>
      <p className='text-sm text-gray-400 mt-7'>students</p>
      <div className='mt-3 py-1 rounded-xl bg-white'>
        <ChildMenu all_children={data.students} dashboard={'teacher'} section={'registerclass'} grade={false}/>
      </div>
    </div>
  )
};

export default MyRegisterClass;