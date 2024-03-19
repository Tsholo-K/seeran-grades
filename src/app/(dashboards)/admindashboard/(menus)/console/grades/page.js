// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Menu from "@/components/(general components)/menu";
import MultipleMenuLinks from "@/components/(general components)/multiplemenulinks";
import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import Crumbs from "@/components/crumbs";

const Grades = () => {

  const grades = {
    section : [
      {
        title: "Grade 1",
        url: `/admindashboard/console/grades/1`,
        icon: `grade-level`
      },
      {
        title: "Grade 2",
        url: `/admindashboard/console/grades/2`,
        icon: `grade-level`
      },
      {
        title: "Grade 3",
        url: `/admindashboard/console/grades/3`,
        icon: `grade-level`
      },
      {
        title: "Grade 4",
        url: `/admindashboard/console/grades/4`,
        icon: `grade-level`
      },
      {
        title: "Grade 5",
        url: `/admindashboard/console/grades/5`,
        icon: `grade-level`
      },
      {
        title: "Grade 6",
        url: `/admindashboard/console/grades/6`,
        icon: `grade-level`
      },
      {
        title: "Grade 7",
        url: `/admindashboard/console/grades/7`,
        icon: `grade-level`
      }
    ]
  }

  return (
    <div>
      <Crumbs title={'console'} url={'admindashboard/console'} heading={`grades`} />
      <PageHeading title={`Grades`} subheading={`manage grades`}/>
      <p className="py-1"></p>
      <Menu border={true} title={`Grades`} info={`${data.grade.length}`}/>
      <p className="py-3"></p>
      <MultipleMenuLinks icon={true} menu={grades} />
      <SingleMenuLink title={`Add Grade`} border={true} url={`/admindashboard/console/grades/addgrade`}/>
    </div>
  )
};

export default Grades;