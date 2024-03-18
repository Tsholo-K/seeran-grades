'use client';

import { useParams } from "next/navigation";

import PageHeading from "@/components/(general components)/pageheading";
import Crumbs from "@/components/crumbs";
import Assessment from "@/app/(dashboards)/parentdashboard/(menus)/family/assessments/[assessment]/page";
import Assessments from "@/components/(assessments components)/assessments";


const Performance = () => {

    const params = useParams();
    const class_id = params.class

    data.assessments.forEach( assessment => {
        
    });

    return (
        <div>
            <Crumbs title={`class`} url={`teacherdashboard/classes/${class_id}`} heading={``} />
            <PageHeading title={`Performance`} />
            <p className="pl-2 pb-1 text-sm text-gray-400">graded assessments</p>
            <Assessments assessment={``} />
        </div>
    )
};

export default Performance;