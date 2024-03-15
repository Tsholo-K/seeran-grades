'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Assessments from "@/components/(assessments components)/assessments";
import Aligner from "@/components/(general components)/aligner";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import PageHeading from "@/components/(general components)/pageheading";


const MyClass = () => {

    const params = useParams();
    const grade_id = params.grade
    const class_id = params.class
    const subject_id = params.subject

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

    const subject_info = [
        {
            title: `Grade`,
            info: `${classroom[0].grade}`
        },
        {
            title: `Subject`,
            info: `${classroom[0].subject}`
        },
        {
            title: `Teacher`,
            info: `${classroom[0].teacher}`
        },
        {
            title: `Learners`,
            info: `${classroom[0].students.length}`
        },
        {
            title: `Group`,
            info: `${classroom[0].group}`
        },
        {
            title: `Average score`,
            info: `${64.7}%`
        }
    ]

    return (
        <div>
            <Aligner/>
            <Crumbs url={`admindashboard/performance/grade/${grade_id}/subject/${subject_id}`} title={`${classroom[0].subject}`} heading={`class performance`}/>
            <PageHeading title={`Summary`} subheading={`Class ${classroom[0].grade}${classroom[0].group}`} />
            <MultipleMenu menu={subject_info}/>
            <p className='text-sm text-gray-400 mt-12 lg:mt-16 pl-2'>graded assessments</p>
            {
                assessments.map((assessment, index)=> (
                    <Assessments key={index} dashboard={'admin'} section={`performance/grade/${grade_id}/subject/${subject_id}/class/${class_id}`} assessment={assessment} title={true} date_title={'released'}/>
                ))
            }
            <p className="py-7 text-center text-sm text-gray-400">that&apos;s all assessments</p>
        </div>
    )
};

export default MyClass;