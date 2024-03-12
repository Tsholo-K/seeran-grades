'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import AttendanceCard from "@/components/(general components)/attendancecard";
import Aligner from "@/components/(general components)/aligner";


const AssessmentRegister = () => {

    const params = useParams()
    const class_id = params.class

    let register
    data.classes.forEach( cls => {
        if ( cls.id === class_id ) {
            register = cls
        }
    });

    let students = []
    data.students.forEach( learner => {
        register.students.forEach( id => {
            if ( id === learner.id ) {
                students.push(learner)
            }
        })
    })

    return (
        <div>
            <Aligner/>
            <Crumbs url={`teacherdashboard/classes/${class_id}/assessments`} title={'due assessments'}/>
            <PageHeading title={`Assessment Register`} />
            <p className='text-sm text-gray-400 mt-6 pl-2'>students</p>
            {
                students.map( (learner, index) => (
                    <AttendanceCard key={index} learner={learner} button={'collect'} />
                ))
            }
        </div>
    )
};

export default AssessmentRegister;