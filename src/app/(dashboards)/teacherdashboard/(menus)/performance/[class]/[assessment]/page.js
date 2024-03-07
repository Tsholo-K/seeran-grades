'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";


const MyClass = () => {

    const params = useParams();
    const class_id = params.class;
    const assessment_id = params.assessment;


    let assessment 
    data.assessments.forEach( assess => {
        if ( assess.id === assessment_id ) {
            assessment = assess
        }
    });

    return (
        <div>
            {/* back link */}
            <Crumbs url={`teacherdashboard/performance/${class_id}`} title={'class'}/>
            {/* page heading */}
            <PageHeading title={`${assessment.title}`} subheading={''}/>
            {/* transcripts */}
            <p className='text-sm text-gray-400 mt-7 pl-2'>scores</p>
            <p className="py-7 text-center text-sm text-gray-400">that&apos;s all scores</p>
        </div>
    )
};

export default MyClass;