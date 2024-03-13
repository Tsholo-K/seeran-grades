'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Classes from '@/components/(classes components)/classes';
import MultipleMenuLinks from '@/components/(general components)/multiplemenulinks';
import UserMenu from "@/components/(general components)/usermenu";
import Aligner from "@/components/(general components)/aligner";


const MyClass = () => {

    const params = useParams();
    const class_id = params.class

    let classroom = []
    data.classes.forEach( (cls) => {
        if (cls.id === class_id) {
            classroom.push(cls)
        }
    });

    let students = []
    classroom[0].students.forEach( student_id => {
        data.students.forEach( student => {
            if ( student.id === student_id) {
                students.push(student)
            }
        });
    });

    const menus = {
        section : [
            {
                title : 'Assessments',
                url : `/teacherdashboard/classes/${class_id}/assessments`,
                icon: `calendar-clock`
            },
            {
                title : 'Grades',
                url : `/teacherdashboard/classes/${class_id}/grading`,
                icon : `graduation-cap`
            }
        ]
    }

    return (
        <div className="w-full relative grid grid-cols-1 place-content-center">
            <Aligner/>
            <Crumbs url={`teacherdashboard/classes`} title={'classes'}/>
            {/* transcripts */}
            <Classes classrooms={classroom} teacher={false} url={false}/>
            <MultipleMenuLinks menu={menus} />
            <p className='text-sm text-gray-400 mt-7 pl-2'>students</p>
            <div className='mt-3 py-1 rounded-xl bg-white'>
                <UserMenu all_users={students} dashboard={'teacher'} section={`classes/${class_id}/student`} grade={false}/>
            </div>
            <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto py-10"></p>
        </div>
    )
};

export default MyClass;