'use client';

import { useParams } from "next/navigation";

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import MultipleMenuLinks from '@/components/(general components)/multiplemenulinks';
import Aligner from '@/components/(general components)/aligner';
import SingleMenuLink from "@/components/(general components)/signlemenulink";


const MyClasses = () => {

  const params = useParams();
  const teacher_id = params.teacher
  
  const days = {
    section : [
      {
        title: "Monday",
        url: `/admindashboard/console/teachers/profile/${teacher_id}/timetable/monday`,
        icon : "time-table"
      },
      {
        title: "Tuesday",
        url: `/admindashboard/console/teachers/profile/${teacher_id}/timetable/tuesday`,
        icon : "time-table"
      },
      {
        title: "Wednesday",
        url: `/admindashboard/console/teachers/profile/${teacher_id}/timetable/wednesday`,
        icon : "time-table"
      },
      {
        title: "Thursday",
        url: `/admindashboard/console/teachers/profile/${teacher_id}/timetable/thursday`,
        icon : "time-table"
      },
      {
        title: "Friday",
        url: `/admindashboard/console/teachers/profile/${teacher_id}/timetable/friday`,
        icon : "time-table"
      }
    ]
  }
  
  return (
    <div>
      <Aligner/>
      <Crumbs url={`admindashboard/console/teachers/profile/${teacher_id}`} title={'teacher profile'}/>
      <PageHeading title={'Time Table'} subheading={'teachers weekly time table'}/>
      <SingleMenuLink url={`/admindashboard/console/teachers/profile/${teacher_id}/timetable/create`} title={`Create Time Table`} icon={`create-time-table`} border={true} />
      <p className="py-4"></p>
      <MultipleMenuLinks menu={days} />
    </div>
  )
};

export default MyClasses;