'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Assessments from "@/components/(assessments components)/assessments";


const CollectedAssessments = () => {

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
        <div>
            {/* back link */}
            <Crumbs url={`teacherdashboard/classes/${class_id}`} title={'class'}/>
            {/* transcripts */}
            <p className='text-sm text-gray-400 mt-7 lg:mt-10 pl-2'>collected assessments</p>
            {
                assessments.map((assessment, index)=> (
                    <div key={index} >
                        <Assessments dashboard={'teacher'} section={`classes/${class_id}/grades`} assessment={assessment} title={true} date_title={'assessed'}/>
                    </div>
                ))
            }
            <p className="py-7 text-center text-sm text-gray-400">that&apos;s all assessments</p>
        </div>
    )
};

export default CollectedAssessments;