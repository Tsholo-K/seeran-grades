'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Grade_subject from "@/components/(performance components)/grade_subjects";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";


const GradeLevel = () => {

    const params = useParams();
    const grade = params.grade

    let grade_level
    data.grade.forEach( (level) => {
        if ( level.grade === grade ) {
            grade_level = level
        }
    });

    const grade_info = [
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
            <Crumbs url={`admindashboard/console/grades`} title={'all grades'} heading={`grade ${grade}`}/>
            <PageHeading title={`Grade ${grade}`} subheading={`classes`}/>
            <MultipleMenu menu={grade_info}/>         
            <SingleMenuLink title={`Register Classes`} icon={`register-class`} border={true} url={`/admindashboard/console/grades/${grade}/registerclasses`} />
            <p className="pt-8 pb-2  pl-2 text-sm text-gray-400">classes by subjects</p>
            <SingleMenuLink title={`Add Subject`} icon={`add-subject`} border={true} url={`/admindashboard/console/grades/${grade}/addsubject`} />
            <p className="py-1"></p>
            <Grade_subject dashbaord={`admin`} section={`console/grades/${grade}`} subjects={grade_level.subjects} teacher={false} />
            <p className="py-7 text-center text-sm text-gray-400">that&apos;s all subjects</p>
        </div>
    )
};

export default GradeLevel;