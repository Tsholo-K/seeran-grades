'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Subject from "@/components/(general components)/subject";
import SetAssessmentForm from "@/components/(forms)/setassessmentform";


const SetAssessment = () => {

    const params = useParams()
    const grade = params.grade;
    const subject_id = params.subject;

    let grade_level
    data.grade.forEach( (level) => {
        if ( level.grade === grade ) {
            grade_level = level
        }
    });

    let subject
    grade_level.subjects.forEach( sub => {
        if ( sub.id === subject_id ) {
        subject = sub
        }
    });

    return (
        <div>
            <Crumbs url={`admindashboard/console/grades/${grade}/${subject_id}`} title={'classes'} heading={`set assessment`}/>
            {/* subject */}
            <Subject icon={`${subject.icon}`} subject={`${subject.subject}`}/>
            <SetAssessmentForm />
            <p className="text-center text-sm text-gray-400">setting assessment for grade {grade}, {subject.subject}</p>
        </div>
    )
};

export default SetAssessment;