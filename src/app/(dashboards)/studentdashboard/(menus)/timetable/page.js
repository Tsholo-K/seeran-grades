// dummy data
import data from '@/app/(dashboards)/dummydata.json';

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import MultipleMenuLinks from '@/components/(general components)/multiplemenulinks';


const MyClasses = () => {

  const student = '220212349';
  
  const days = {
    section : [
      {
        title: "Monday",
        url: `/studentdashboard/timetable/monday`
      },
      {
        title: "Tuesday",
        url: `/studentdashboard/timetable/tuesday`
      },
      {
        title: "Wednesday",
        url: `/studentdashboard/timetable/wednesday`
      },
      {
        title: "Thursday",
        url: `/studentdashboard/timetable/thursday`
      },
      {
        title: "Friday",
        url: `/studentdashboard/timetable/friday`
      }
    ]
  }
  
  return (
    <div>
      {/* back link */}
      <Crumbs url={`studentdashboard`} title={'dashboard'} hide={true}/>
      <PageHeading title={'My Time Table'} subheading={'your weekly time table'}/>
      <MultipleMenuLinks menu={days} />
    </div>
  )
};

export default MyClasses;