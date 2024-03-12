'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Button from "@/components/(general components)/button";
import Aligner from "@/components/(general components)/aligner";
import PageHeading from "@/components/(general components)/pageheading";


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
            <Aligner/>
            <Crumbs url={`parentdashboard/helpdesk/complaint`} title={'complaints'}/>
            <PageHeading title={`Log Complaint`} />
            <textarea className="resize-none min-h-32 mt-16 py-2 px-4 bg-white rounded-xl" ></textarea>
            <p className="pb-16 text-center text-gray-400 text-sm pt-1">please explain the issue</p>
            <Button title={'submit'} type={'submit'} />
        </div>
    )
};

export default SetAssessment;