'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json';

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Aligner from "@/components/(general components)/aligner";


const TimeTable = () => {

    const params = useParams();
    const day = params.day

    const time_table = data.time_tables[0].monday

    return (
        <div>
            <Aligner/>
            <Crumbs title={`timetable`} url={`studentdashboard/timetable`} heading={`${day.charAt(0).toUpperCase() + day.slice(1)}`} />
            <PageHeading title={`${day.charAt(0).toUpperCase() + day.slice(1)}`} subheading={`${day} timetable`} />
            {
                time_table.map( (period, index) => (
                    <div key={index} className="mb-8">
                        <p className="pb-1 text-gray-400 pl-2">{period.from} - {period.to}</p>
                        <div className="bg-white rounded-xl py-2 px-3">
                            <p className="w-full text-center py-2 text-xl">{period.class}</p>
                        </div>
                    </div>
                ) )
            }
            <p className="text-sm text-gray-400 text-center py-6">end of the day</p>
        </div>
    )
};

export default TimeTable;