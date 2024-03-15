'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Aligner from "@/components/(general components)/aligner";
import Grade_level from "@/components/(performance components)/grade_level";


const MyClass = () => {

    const params = useParams();
    const grade = params.grade

    let grade_level
    data.grade_levels.forEach( (level) => {
        if ( level.grade === grade ) {
            grade_level = level
        }
    });

    return (
        <div>
            <Aligner/>
            <Crumbs url={`admindashboard/performance`} title={'performance'} heading={`grade ${grade}`}/>
            <Grade_level grade={grade_level} />
            <p className="pt-7 pl-2 text-sm text-gray-400">subjects</p>
            <p className="py-7 text-center text-sm text-gray-400">that&apos;s all subjects</p>
        </div>
    )
};

export default MyClass;