// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Classes from '@/components/(classes components)/classes';


const MyRegisterClasse = () => {

  const teacher = '2938438420';
  let register_classroom = []
  data.classes.forEach( (cls) => {
    if (cls.register_teacher_id === teacher) {
      register_classroom.push(cls)
    }
  });


  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      {/* back link */}
      <Crumbs url={`teacherdashboard`} title={'dashboard'} hide={true}/>
      {/* page heading */}
      <PageHeading title={'Register Class(s)'} subheading={'all your register classes'}/>
      {/* transcripts */}
      <Classes classrooms={register_classroom} teacher={false} subject={false}/>
    </div>
  )
};

export default MyRegisterClasse;