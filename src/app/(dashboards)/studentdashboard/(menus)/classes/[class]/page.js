'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Classes from '@/components/(classes components)/classes';
import MultipleMenuLinks from '@/components/(general components)/multiplemenulinks';
import Subject from "@/components/(general components)/subject";
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

    let teacher = []
    data.teachers.forEach( teach => {
        if( teach.id === classroom[0].teacher_id ) {
            teacher.push(teach)
        }
    });

    const menus = {
        section : [
            {
                title : 'Performance',
                url : `/studentdashboard/classes/${class_id}/performance`,
                icon : `performance`
            },
            {
                title : 'Assessments',
                url : `/studentdashboard/classes/${class_id}/assessments`,
                icon: `calendar-clock`
            }
        ]
    }

    return (
        <div>
            <Aligner/>
            <Crumbs url={`studentdashboard/classes`} title={'classes'} heading={`${classroom[0].subject}`}/>
            <Classes classrooms={classroom} grade={false} teacher={false} subject={false} url={false}/>
            <Subject title="Subject" subject={`${classroom[0].subject}`} icon={`${classroom[0].icon}`} />
            <p className="py-0"></p>
            <MultipleMenuLinks menu={menus} />
            <p className="text-gray-500 text-sm pl-2 pt-6">teacher</p>
            <div className="bg-white rounded-xl mb-7">
               <UserMenu all_users={teacher} dashboard={'student'} section={`classes/${class_id}/teacher`} grade={false}/> 
            </div>
        </div>
    )
};

export default MyClass;