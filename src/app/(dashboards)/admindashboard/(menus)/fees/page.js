// components
import MultipleMenuLinks from "@/components/(general components)/multiplemenulinks";
import PageHeading from "@/components/(general components)/pageheading";
import Crumbs from "@/components/crumbs";

const Grades = () => {

  const grades = {
    section : [
      {
        title: "Grade 1",
        url: `/admindashboard/fees/1`,
        icon: `grade-level`
      },
      {
        title: "Grade 2",
        url: `/admindashboard/fees/2`,
        icon: `grade-level`
      },
      {
        title: "Grade 3",
        url: `/admindashboard/fees/3`,
        icon: `grade-level`
      },
      {
        title: "Grade 4",
        url: `/admindashboard/fees/4`,
        icon: `grade-level`
      },
      {
        title: "Grade 5",
        url: `/admindashboard/fees/5`,
        icon: `grade-level`
      },
      {
        title: "Grade 6",
        url: `/admindashboard/fees/6`,
        icon: `grade-level`
      },
      {
        title: "Grade 7",
        url: `/admindashboard/fees/7`,
        icon: `grade-level`
      }
    ]
  }

  return (
    <div>
      <Crumbs title={'dashboard'} url={'admindashboard'} hide={true} heading={`grades`} />
      <PageHeading title={`Fees`} subheading={`manage fees`}/>
      <MultipleMenuLinks icon={true} menu={grades} />
    </div>
  )
};

export default Grades;