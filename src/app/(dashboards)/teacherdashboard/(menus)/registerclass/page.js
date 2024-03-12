// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Classes from '@/components/(classes components)/classes';
import SingleMenuLink from '@/components/(general components)/signlemenulink';
import UserMenu from '@/components/(general components)/childmenu';
import Aligner from '@/components/(general components)/aligner';


const MyRegisterClass = () => {

  const teacher = '2938438420';
  
  let register_classroom = []
  data.register_classes.forEach( (cls) => {
    if (cls.teacher_id === teacher) {
      register_classroom.push(cls)
    }
  });

  let students = []
  register_classroom[0].students.forEach( student_id => {
    data.students.forEach( student => {
      if ( student.id === student_id) {
          students.push(student)
      }
    });
  });

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <Aligner/>
      <Crumbs url={`teacherdashboard`} title={'dashboard'} hide={true}/>
      {/* transcripts */}
      <Classes classrooms={register_classroom} teacher={false} subject={false} url={false}/>
      <div className='pt-6'>
        <SingleMenuLink title={'Attendance Register'} url={'/teacherdashboard/registerclass/attendance'} icon={'take-attendance'} border={true}/>
      </div>
      <p className='text-sm text-gray-400 mt-10 pl-2'>students</p>
      <div className='mt-3 py-1 rounded-xl bg-white'>
        <UserMenu all_users={students} dashboard={'teacher'} section={'registerclass/student'} grade={false}/>
      </div>
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto py-10"></p>
    </div>
  )
};

export default MyRegisterClass;