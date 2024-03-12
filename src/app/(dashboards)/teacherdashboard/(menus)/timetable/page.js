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
        url: `/teacherdashboard/timetable/monday`
      },
      {
        title: "Tuesday",
        url: `/teacherdashboard/timetable/tuesday`
      },
      {
        title: "Wednesday",
        url: `/teacherdashboard/timetable/wednesday`
      },
      {
        title: "Thursday",
        url: `/teacherdashboard/timetable/thursday`
      },
      {
        title: "Friday",
        url: `/teacherdashboard/timetable/friday`
      }
    ]
  }
  
  return (
    <div>
      <Aligner/>
      <Crumbs url={`teacherdashboard`} title={'dashboard'} hide={true}/>
      <PageHeading title={'My Time Table'} subheading={'your weekly time table'}/>
      <MultipleMenuLinks menu={days} />
    </div>
  )
};

export default MyClasses;