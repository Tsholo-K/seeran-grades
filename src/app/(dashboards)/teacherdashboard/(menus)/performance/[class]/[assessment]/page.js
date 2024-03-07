'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import MultipleMenu from "@/components/(general components)/multiplemenu";


const ClassAssessment = () => {

    const params = useParams();
    const class_id = params.class;
    const assessment_id = params.assessment;


    let assessment 
    data.assessments.forEach( assess => {
        if ( assess.id === assessment_id ) {
            assessment = assess
        }
    });

    const menuitems = [
      {
        // we need it to be an array so thats why
        section : [
          
          {
            title: 'Assessment',
            info : `${assessment.assessment}`
          },{
            title: `Total`,
            info : `${assessment.total}`
          },
          {
            title: 'Average Score',
            info : `${assessment.average_score}`
          },
          {
            title: 'Topics',
            info : `${assessment.topics}`
          },
          {
            title: 'Date Assessed',
            info : `${assessment.due_date}`
          },
          {
            title: 'Students Assessed',
            info : `3`
          }
        ]
      }
    ];

    return (
        <div>
            {/* back link */}
            <Crumbs url={`teacherdashboard/performance/${class_id}`} title={'class'}/>
            {/* page heading */}
            <PageHeading title={`${assessment.title}`} subheading={''}/>
            {
                menuitems.map( ( item,index ) => (
                <>
                    <MultipleMenu key={index} menu={item.section} />
                </>
                ))
            }
            {/* transcripts */}
            <p className='text-sm text-gray-400 mt-7 pl-2'>scores</p>
            <p className="py-7 text-center text-sm text-gray-400">that&apos;s all scores</p>
        </div>
    )
};

export default ClassAssessment;