'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Transcripts from "@/components/(grades components)/transcripts";
import Subject from "@/components/(general components)/subject";
import PageHeading from "@/components/(general components)/pageheading";
import Aligner from "@/components/(general components)/aligner";


const MyClass = () => {

    const params = useParams();
    const class_id = params.class
    const student = "220212349"

    let classroom = []
    data.classes.forEach( (cls) => {
        if (cls.id === class_id) {
            classroom.push(cls)
        }
    });

    let grades = []
    data.grades.forEach( transcript => {
    if ( transcript.submitted_by === student && transcript.subject === classroom[0].subject ) {
        grades.push(transcript)
    }
    });

    return (
        <div>
            <Aligner/>
            <Crumbs url={`studentdashboard/classes/${class_id}/`} title={'class'} heading={`grades`}/>
            <PageHeading  title={`Grades`} subheading={`graded assessments`}/>
            <p className='text-sm text-gray-400 mt-4 lg:mt-7 pl-2'>assessments</p>
            {
                grades.length > 0
                ?
                <>
                    <Transcripts transcripts={grades} submitter={false} dashboard={'student'} section={`classes/${class_id}/performance`} />
                    <p className="py-7 text-center text-sm text-gray-400">that&apos;s all assessments</p>
                </>
                :
                <p className="py-7 text-center text-sm text-gray-400 pt-32">no  assessments</p>
            }
        </div>
    )
};

export default MyClass;