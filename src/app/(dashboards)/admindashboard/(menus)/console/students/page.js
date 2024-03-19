// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Menu from "@/components/(general components)/menu";
import MultipleMenuLinks from "@/components/(general components)/multiplemenulinks";
import PageHeading from "@/components/(general components)/pageheading";
import Crumbs from "@/components/crumbs";

const Admins = () => {
  
  const grades = {
    section : [
      {
        title: "Grade 1",
        url: `/admindashboard/console/students/grades/1`,
        icon: `grade-level`
      },
      {
        title: "Grade 2",
        url: `/admindashboard/console/students/grades/2`,
        icon: `grade-level`
      },
      {
        title: "Grade 3",
        url: `/admindashboard/console/students/grades/3`,
        icon: `grade-level`
      },
      {
        title: "Grade 4",
        url: `/admindashboard/console/students/grades/4`,
        icon: `grade-level`
      },
      {
        title: "Grade 5",
        url: `/admindashboard/console/students/grades/5`,
        icon: `grade-level`
      },
      {
        title: "Grade 6",
        url: `/admindashboard/console/students/grades/6`,
        icon: `grade-level`
      },
      {
        title: "Grade 7",
        url: `/admindashboard/console/students/grades/7`,
        icon: `grade-level`
      }
    ]
  }

  return (
    <div>
      <Crumbs title={'console'} url={'admindashboard/console'} heading={`all students`} />
      <PageHeading title={`Students`} subheading={`manage student accounts`}/>
      <p className="py-1"></p>
      <Menu border={true} title={`Student Accounts`} info={`${data.students.length}`}/>
      <p className="py-3"></p>
      <MultipleMenuLinks icon={true} menu={grades} />
      <p className="text-sm text-gray-400 pl-2 pb-2 pt-6"></p>

    </div>
  )
};

export default Admins;