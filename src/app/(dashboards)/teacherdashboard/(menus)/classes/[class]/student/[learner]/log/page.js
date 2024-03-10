'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Button from "@/components/(general components)/button";
import Subject from "@/components/(general components)/subject";


const SetAssessment = () => {

    const params = useParams()
    const class_id = params.class
    const student_id = params.learner

    let classroom
    data.classes.forEach( (cls) => {
        if ( cls.id === class_id )
        classroom = cls
    });

    return (
        <div className="w-full relative grid grid-cols-1 place-content-center ">
            {/* back link */}
            <Crumbs url={`teacherdashboard/classes/${classroom.id}/student/${student_id}`} title={'student'}/>
            {/* subject */}
            <Subject icon={`${classroom.icon}`} subject={`${classroom.subject}`}/>
            {/* input areas */}
            <p className="text-sm text-gray-400 pl-2 mt-14">offence</p>
            <div className="bg-white rounded-xl mb-4 min-h-8 px-4">
                <select className="text-center bg-white focus:outline-none rounded-xl h-full w-full">
                    <option> --- Pick Offence --- </option>
                    <option> late </option>
                    <option> violent </option>
                    <option> disruptive </option>
                    <option> vulgar/offensive language </option>
                    <option> sleeping </option>
                    <option> disrespectful </option>
                </select>
            </div>
            <p className="text-sm text-gray-400 pl-2 mt-4">record</p>
            <textarea className="rounded-xl min-h-32 p-3" />
            <p className="py-6"></p>
            {/* button */}
            <Button title={'log'} type={'submit'} />
        </div>
    )
};

export default SetAssessment;