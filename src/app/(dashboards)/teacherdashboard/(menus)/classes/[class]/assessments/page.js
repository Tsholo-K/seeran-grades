'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Assessments from "@/components/(assessments components)/assessments";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import Aligner from "@/components/(general components)/aligner";


const AssessmentsPage = () => {

    const params = useParams()
    const class_id = params.class

    let assessments = []
    data.assessments.forEach( ( assessment ) => {
        if ( assessment.class_id === class_id )
        assessments.push(assessment)
    });

    return (
        <div>
            <Aligner/>
            <Crumbs url={`teacherdashboard/classes/${class_id}`} title={'class'} heading={`assessments`}/>
            <PageHeading title={'Assessments'} subheading={`due assessments`}/>
            <SingleMenuLink title={'Set assessment'} icon={'date'} border={true} url={`/teacherdashboard/classes/${class_id}/assessments/set`}/>
            {/* assessments */}
            <p className='text-sm text-gray-400 mt-8 lg:mt-10 pl-2'>assessments</p>
            {
                assessments.map((assessment, index)=> (
                    <Assessments key={index} dashboard={'teacher'} section={`classes/${class_id}/assessments/collect`} assessment={assessment} title={true} date_title={'due'}/>
                ))
            }
        </div>
    )
};

export default AssessmentsPage;