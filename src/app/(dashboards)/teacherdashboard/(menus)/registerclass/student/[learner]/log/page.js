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
    const student_id = params.learner

    return (
        <div className="w-full relative grid grid-cols-1 place-content-center ">
            {/* back link */}
            <Crumbs url={`teacherdashboard/registerclass/student/${student_id}`} title={'student'}/>
            {/* subject */}
            <Subject subject={`register class`}/>
            {/* input areas */}
            <p className="text-sm text-gray-400 pl-2 mt-14">offence</p>
            <div className="bg-white rounded-xl mb-4 min-h-8 px-4">
                <select className="text-center bg-white focus:outline-none rounded-xl h-full w-full">
                    <option className="text-center" disabled selected> --- Pick Offence --- </option>
                    <option className="text-center"> late </option>
                    <option className="text-center"> violent </option>
                    <option className="text-center"> disruptive </option>
                    <option className="text-center"> vulgar/offensive language </option>
                    <option className="text-center"> sleeping </option>
                    <option className="text-center"> disrespectful </option>
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