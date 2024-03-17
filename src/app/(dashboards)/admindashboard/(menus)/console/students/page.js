// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Menu from "@/components/(general components)/menu";
import MultipleMenuLinks from "@/components/(general components)/multiplemenulinks";
import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import Crumbs from "@/components/crumbs";

const Admins = () => {

  const menulinks = {
    section: [
      {
        title: "Students",
        icon: "users",
        url: "/admindashboard/console/students/grades"
      }
    ]
  }

  return (
    <div>
      <Crumbs title={'console'} url={'admindashboard/console'} heading={`students`} />
      <PageHeading title={`Students`} subheading={`manage student accounts`}/>
      <SingleMenuLink title={`Add Student Account`} border={true} url={`/admindashboard/console/students/addaccount`}/>
      <p className="py-4"></p>
      <Menu border={true} title={`Student Accounts`} info={`${data.students.length}`}/>
      <p className="text-sm text-gray-400 pl-2 pb-2 pt-6"></p>
      <MultipleMenuLinks menu={menulinks}/>
    </div>
  )
};

export default Admins;