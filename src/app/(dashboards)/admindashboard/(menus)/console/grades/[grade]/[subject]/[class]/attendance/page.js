'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import AttendanceCard from '@/components/(general components)/attendancecard';


const Attendance = () => {

    const params = useParams();
    const classroom_id = params.class
    const grade = params.grade
    const subject = params.subject

    let register
    data.register_classes.forEach( cls => {
        if ( cls.id === classroom_id ) {
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
            <Crumbs url={`admindashboard/console/grades/${grade}/${subject}/${classroom_id}/`} title={'register class'} heading={`attendance register`}/>
            <PageHeading title={`Attendance Register`} subheading={`class ${register.grade}${register.group}`} />
            <p className='text-sm text-gray-400 mt-6 pl-2'>students</p>
            {
                students.map( (learner, index) => (
                    <AttendanceCard key={index} learner={learner} button={'present'} />
                ))
            }
        </div>
    )
};

export default Attendance;