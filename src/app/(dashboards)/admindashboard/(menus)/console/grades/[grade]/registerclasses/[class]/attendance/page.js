'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import AttendanceCard from '@/components/(general components)/attendancecard';
import Aligner from '@/components/(general components)/aligner';
import Button from '@/components/(general components)/button';


const Attendance = () => {

    const params = useParams();
    const grade = params.grade
    const class_id = params.class

    const classroom_id = data.teachers[0].register_class

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
            <Aligner/>
            <Crumbs url={`admindashboard/console/grades/${grade}/registerclasses/${class_id}`} title={'register class'} heading={`attendance register`}/>
            <PageHeading title={`Attendance Register`} subheading={`class ${register.grade}${register.group}`} />
            <Button title={`submit`} />
            <p className='pb-4 pt-1 text-center text-sm text-gray-400'>you can only submit this form once(1) a day</p>
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