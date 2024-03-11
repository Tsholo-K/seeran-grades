'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Classes from '@/components/(classes components)/classes';
import MultipleMenuLinks from '@/components/(general components)/multiplemenulinks';
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import Subject from "@/components/(general components)/subject";


const MyClass = () => {

    const params = useParams();
    const class_id = params.class

    let classroom = []
    data.classes.forEach( (cls) => {
        if (cls.id === class_id) {
            classroom.push(cls)
        }
    });

    const menus = {
        section : [
            {
                title : 'Performance',
                url : `/studentdashboard/classes/${class_id}/grading`,
                icon : `performance`
            },
            {
                title : 'Assessments',
                url : `/studentdashboard/classes/${class_id}/assessments`,
                icon: `calendar-clock`
            },
            {
                title : 'Teacher',
                url : `/studentdashboard/classes/${class_id}/assessments`,
                icon: `user-round-blue`
            }
        ]
    }

    return (
        <div>
            <Crumbs url={`studentdashboard/classes`} title={'classes'}/>
            <Classes classrooms={classroom} teacher={false} subject={false} url={false}/>
            <Subject title="Subject" subject={`${classroom[0].subject}`} icon={`${classroom[0].icon}`} />
            <p className="py-2"></p>
            <MultipleMenuLinks menu={menus} />
        </div>
    )
};

export default MyClass;