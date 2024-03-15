// dummy data
import data from '@/app/(dashboards)/dummydata.json';

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import MultipleMenuLinks from '@/components/(general components)/multiplemenulinks';
import Aligner from '@/components/(general components)/aligner';


const MyClasses = () => {
  
  const days = {
    section : [
      {
        title: "Monday",
        url: `/studentdashboard/timetable/monday`,
        icon : "time-table"
      },
      {
        title: "Tuesday",
        url: `/studentdashboard/timetable/tuesday`,
        icon : "time-table"
      },
      {
        title: "Wednesday",
        url: `/studentdashboard/timetable/wednesday`,
        icon : "time-table"
      },
      {
        title: "Thursday",
        url: `/studentdashboard/timetable/thursday`,
        icon : "time-table"
      },
      {
        title: "Friday",
        url: `/studentdashboard/timetable/friday`,
        icon : "time-table"
      }
    ]
  }
  
  return (
    <div>
      <Aligner/>
      <Crumbs url={`studentdashboard`} title={'dashboard'} hide={true}/>
      <PageHeading title={'My Time Table'} subheading={'your weekly time table'}/>
      <MultipleMenuLinks menu={days} />
    </div>
  )
};

export default MyClasses;