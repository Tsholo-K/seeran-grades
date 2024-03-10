'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import InputArea from "@/components/(general components)/inputarea";
import Button from "@/components/(general components)/button";
import Subject from "@/components/(general components)/subject";


const SetAssessment = () => {

    const params = useParams()
    const class_id = params.class

    let classroom
    data.classes.forEach( (cls) => {
        if ( cls.id === class_id )
        classroom = cls
    });

    return (
        <div className="w-full relative grid grid-cols-1 place-content-center ">
            {/* back link */}
            <Crumbs url={`teacherdashboard/classes/${classroom.id}`} title={'class'}/>
            {/* subject */}
            <Subject icon={`${classroom.icon}`} subject={`${classroom.subject}`}/>
            {/* input areas */}
            <div className="relative mb-6 text-base">
                <InputArea title='assessment' placeholder={`test, assignment, exam...`} type={'text'}/>
                <InputArea title='assessment title' type={'text'}/>
                <InputArea title='total score' type={'text'}/>
                <InputArea title='topics' type={'text'}/>
                <InputArea title='due date' placeholder={`dd/mm/yyyy`} type={'text'}/>
            </div>
            {/* button */}
            <Button title={'set'} type={'submit'} />
            <p className="text-center text-sm text-gray-400">setting assessment for class {classroom.grade}{classroom.group}</p>
        </div>
    )
};

export default SetAssessment;