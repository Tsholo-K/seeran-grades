'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json';

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Aligner from "@/components/(general components)/aligner";
import Periods from "@/components/(timetable components)/periods";


const TimeTable = () => {

    const params = useParams();
    const day = params.day

    const time_table = data.time_tables[0].monday

    return (
        <div>
            <Aligner/>
            <Crumbs title={`timetable`} url={`teacherdashboard/timetable`} heading={`${day}`}/>
            <PageHeading title={`${day.charAt(0).toUpperCase() + day.slice(1)}`} subheading={`${day} timetable`} />
            <Periods periods={time_table} />
            <p className="text-sm text-gray-400 text-center py-6">end of the day</p>
        </div>
    )
};

export default TimeTable;