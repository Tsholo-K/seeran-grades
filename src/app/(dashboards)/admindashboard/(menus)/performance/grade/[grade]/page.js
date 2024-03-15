'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Aligner from "@/components/(general components)/aligner";
import Grade_subject from "@/components/(performance components)/grade_subjects";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import PageHeading from "@/components/(general components)/pageheading";


const GradeLevel = () => {

    const params = useParams();
    const grade_id = params.grade

    let grade_level
    data.grade.forEach( (level) => {
        if ( level.grade === grade_id ) {
            grade_level = level
        }
    });

    const subject_info = [
        {
            title: `Learners`,
            info: `${grade_level.learners.length}`
        },
        {
            title: `Teachers`,
            info: `${grade_level.teachers.length}`
        },
        {
            title: `Subjects`,
            info: `${grade_level.subjects.length}`
        }
    ]

    return (
        <div>
            <Aligner/>
            <Crumbs url={`admindashboard/performance`} title={'all grades'} heading={`grade ${grade_id}`}/>
            <PageHeading title={`Grade ${grade_id}`} subheading={`performance by subject`}/>
            <MultipleMenu menu={subject_info}/>
            <p className="pt-8  pl-2 text-sm text-gray-400">subjects</p>
            <Grade_subject dashbaord={`admin`} section={`performance/grade/${grade_id}/subject`} subjects={grade_level.subjects} teacher={false} />
            <p className="py-7 text-center text-sm text-gray-400">that&apos;s all subjects</p>
        </div>
    )
};

export default GradeLevel;