'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Classes from '@/components/(classes components)/classes';
import Transcripts from "@/components/(grades components)/transcripts";


const MyClass = () => {

    const params = useParams();
    const class_id = params.class

    let classroom = []
    data.classes.forEach( (cls) => {
        if (cls.id === class_id) {
        classroom.push(cls)
        }
    });

    let assessments = []
    data.assessments.forEach( assessment => {
        if ( assessment.class_id === classroom[0].id ) {
            assessments.push(assessment)
        }
    });

    return (
        <div className="w-full relative grid grid-cols-1 place-content-center">
            {/* back link */}
            <Crumbs url={`teacherdashboard/performance`} title={'performance'}/>
            {/* page heading */}
            <PageHeading title={`Class ${classroom[0].grade}${classroom[0].group}`} subheading={''}/>
            {/* transcripts */}
            <Classes classrooms={classroom} teacher={false} url={false}/>
            <p className='text-sm text-gray-400 mt-7 pl-2'>assessments</p>
            <Transcripts transcripts={assessments} dashboard={'teacher'} icon={false} score={false} submitter={false} date_title={'assessed'} section={'performance'} subject={false}/>
        </div>
    )
};

export default MyClass;