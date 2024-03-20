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
    const classroom_id = params.class
    const grade = params.grade
    const subject = params.subject

    let assessments = []
    data.assessments.forEach( assessment => {
        if ( assessment.class_id === classroom_id ) {
            assessments.push(assessment)
        }
    });

    const menuitems = [
        {
          section : [
            {
              title: 'Average Score',
              info : `${`72%`}`
            },
            {
                title: `Graded Assessments`,
                info: `2`
            }
          ]
        }
    ];

    return (
        <div>
            <Crumbs title={`class`} url={`admindashboard/console/grades/${grade}/${subject}/${classroom_id}`} heading={`performance`} />
            <PageHeading title={`Performance`} subheading={`overall class performance`}/>
            {
                menuitems.map( ( item,index ) => (
                    <MultipleMenu key={index} menu={item.section} />
                ))
            }
            <p className="pl-2 pb-1 pt-4 text-sm text-gray-400">graded assessments</p>
            {
                assessments.map( (ass, index) => (
                    <Assessments key={index} dashboard={`admin`} section={`console/grades/${grade}/${subject}/${classroom_id}/performance`} assessment={ass} date_title={`assessed`}  />
                ))
            }
        </div>
    )
};

export default Performance;