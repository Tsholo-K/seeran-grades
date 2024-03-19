'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

import PageHeading from "@/components/(general components)/pageheading";
import Crumbs from "@/components/crumbs";
import Assessments from "@/components/(assessments components)/assessments";
import MultipleMenu from "@/components/(general components)/multiplemenu";


const Performance = () => {

    const params = useParams();
    const class_id = params.class

    let assessments = []
    data.assessments.forEach( assessment => {
        if ( assessment.class_id === class_id ) {
            assessments.push(assessment)
        }
    });

    const menuitems = [
        {
          section : [
            {
              title: 'Average Score',
              info : `${`72%`}`
            }
          ]
        }
    ];

    return (
        <div>
            <Crumbs title={`class`} url={`teacherdashboard/classes/${class_id}`} heading={`performance`} />
            <PageHeading title={`Performance`} subheading={`class performance`}/>
            {
                menuitems.map( ( item,index ) => (
                    <MultipleMenu key={index} menu={item.section} />
                ))
            }
            <p className="pl-2 pb-1 text-sm text-gray-400">graded assessments</p>
            {
                assessments.map( (ass, index) => (
                    <Assessments key={index} dashboard={`teacher`} section={`classes/${class_id}/performance`} assessment={ass} date_title={`assessed`}  />
                ))
            }
        </div>
    )
};

export default Performance;