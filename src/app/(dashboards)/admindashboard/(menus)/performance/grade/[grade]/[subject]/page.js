'use client'

import { useParams, } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Image from "next/image";
import Aligner from "@/components/(general components)/aligner";


const MyClass = () => {

    const params = useParams();
    const grade = params.grade
    const subject = params.subject

    return (
        <div>
            <Aligner/>
            <Crumbs url={`admindashboard/performance/grade/${grade}`} title={'performance'} heading={`${subject}`}/>
            <div className="bg-white rounded-xl py-6 px-4 my-8 lg:my-12">
                <div className="flex justify-center">
                    <div className="flex">
                        <Image src={`/maths.svg`} alt='try it button' width={10} height={10} className={`w-14  lg:w-20`}/>  
                        <p className="grid grid-cols-1 place-content-center text-lg lg:text-2xl">mathematics</p>
                    </div>
                </div>
                <div className="text-gray-500 pt-2">
                    <div className="flex gap-3 pl-3 pt-3">
                        <Image src={'/users.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-8"/>
                        <p className="grid grid-cols-1 place-content-center">learners : 43</p>
                    </div>
                    <div className="flex gap-3 pl-3 pt-3">
                        <Image src={'/group.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-8"/>
                        <p className="grid grid-cols-1 place-content-center">groups : 4</p>
                    </div>
                </div>
            </div>
            <p className="py-7 text-center text-sm text-gray-400">that&apos;s all subjects</p>
        </div>
    )
};

export default MyClass;