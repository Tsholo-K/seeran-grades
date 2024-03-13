'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Classes from '@/components/(classes components)/classes';
import Assessments from "@/components/(assessments components)/assessments";
import Aligner from "@/components/(general components)/aligner";


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
        <div>
            <Aligner/>
            <Crumbs url={`teacherdashboard/performance`} title={'performance'} heading={`assessments`}/>
            {/* transcripts */}
            <Classes classrooms={classroom} teacher={false} url={false}/>
            <p className='text-sm text-gray-400 mt-7 lg:mt-10 pl-2'>graded assessments</p>
            {
                assessments.map((assessment, index)=> (
                    <Assessments key={index} dashboard={'teacher'} section={`performance/${class_id}`} assessment={assessment} title={true} date_title={'released'}/>
                ))
            }
            <p className="py-7 text-center text-sm text-gray-400">that&apos;s all assessments</p>
        </div>
    )
};

export default MyClass;