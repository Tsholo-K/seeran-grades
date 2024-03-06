'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Classes from '@/components/(classes components)/classes';
import ChildMenu from '@/components/(general components)/childmenu';
import MultipleMenuLinks from '@/components/(general components)/multiplemenulinks';


const menus = {
    section : [
        {
            title:'Set Assessment',
            url:'/teacherdashboard/classes/assessment'
        },
        {
            title:'Release Grades',
            url:'/teacherdashboard/classes/grades'
        }
    ]
}

const MyClass = () => {

    const params = useParams();
    const class_id = params.class

    let classroom = []
    data.classes.forEach( (cls) => {
        if (cls.class_id === class_id) {
        classroom.push(cls)
        }
    });

    return (
        <div className="w-full relative grid grid-cols-1 place-content-center">
            {/* back link */}
            <Crumbs url={`teacherdashboard/classes`} title={'dashboard'} hide={true}/>
            {/* page heading */}
            <PageHeading title={'Class'} subheading={''}/>
            {/* transcripts */}
            <Classes classrooms={classroom} teacher={false} url={false}/>
            <MultipleMenuLinks menu={menus} />
            <p className='text-sm text-gray-400 mt-7 pl-2'>students</p>
            <div className='mt-3 py-1 rounded-xl bg-white'>
                <ChildMenu all_children={data.students} dashboard={'teacher'} section={'registerclass'} grade={false}/>
            </div>
        </div>
    )
};

export default MyClass;