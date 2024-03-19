'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import Classes from "@/components/(classes components)/classes";


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
            title: `Groups`,
            info: `${grade_level.subjects.length}`
        }
    ]

    return (
        <div>
            <Crumbs url={`admindashboard/console/grades/${grade}`} title={'all classes'} heading={`register classes`}/>
            <PageHeading title={`Grade ${grade}`} subheading={`register classes`}/>
            <MultipleMenu menu={grade_info}/> 
            <p className="pb-3 pl-2 text-sm text-gray-400">classes</p>
            <SingleMenuLink title={`Add Class`} icon={`register-class`} border={true} url={`/admindashboard/console/grades/${grade}/registerclasses/addclass`} />
            <p className="py-3 text-sm text-gray-400"></p>
            <Classes dashbaord={`admin`} section={`console/grades/${grade}/registerclasses`} classrooms={data.classes} subject={false} grade={false} />
            <p className="py-7 text-center text-sm text-gray-400">that&apos;s all subjects</p>
        </div>
    )
};

export default GradeLevel;