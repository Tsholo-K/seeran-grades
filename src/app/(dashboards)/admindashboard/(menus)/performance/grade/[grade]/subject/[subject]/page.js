'use client'

import { useParams, } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Classes from "@/components/(classes components)/classes";


const GradeSubject = () => {

    const params = useParams();
    const grade_id = params.grade
    const subject_id = params.subject

    let grade
    data.grade.forEach( level => {
        if ( level.grade === grade_id ) {
            grade = level
        }
    });

    let subject
    grade.subjects.forEach( sub => {
        if ( sub.id === subject_id) {
            subject = sub
        }
    });

    return (
        <div>
            <Crumbs url={`admindashboard/performance/grade/${grade_id}`} title={`grade ${grade_id}`} heading={`${subject.subject}`}/>
            <PageHeading title={`${subject.subject.charAt(0).toUpperCase() + subject.subject.slice(1)}`} subheading={`Grade ${grade_id}, ${subject.subject} classes`} />
            <p className="pl-2 text-sm text-gray-400">classes</p>
            <Classes dashbaord={`admin`} section={`performance/grade/${grade_id}/subject/${subject_id}/class`} classrooms={data.classes}  grade={false} subject={false} teacher={false} />
            <p className="py-7 text-center text-sm text-gray-400">that&apos;s all subjects</p>
        </div>
    )
};

export default GradeSubject;