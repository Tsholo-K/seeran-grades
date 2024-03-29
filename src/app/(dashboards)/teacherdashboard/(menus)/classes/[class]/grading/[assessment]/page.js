'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import Transcripts from "@/components/(grades components)/transcripts";
import Button from "@/components/(general components)/button";
import PageHeading from "@/components/(general components)/pageheading";
import Aligner from "@/components/(general components)/aligner";


const Grade = () => {

    const params = useParams();
    const class_id = params.class;
    const assessment_id = params.assessment;

    let assessment 
    data.assessments.forEach( assess => {
        if ( assess.id === assessment_id ) {
            assessment = assess
        }
    });

    let grades = []
    data.grades.forEach( transcript => {
      if ( transcript.assessment_id === assessment_id ) {
          grades.push(transcript)
      }
  });

    return (
        <div>
            <Aligner/>
            <Crumbs url={`teacherdashboard/classes/${class_id}/grading`} title={'assessments'}  heading={`gradings`}/>
            <PageHeading title={`${assessment.title}`} subheading={`${assessment.assessment}`}/>
            <p className="my-4"></p>
            <Button title={'release'} />
            <p className="text-center text-sm text-gray-400 pt-1 w-[90%] mx-auto">you can only release grades after all studnets are graded</p>
            {/* transcripts */}
            <p className='text-sm text-gray-400 mt-10 pl-2'>gradings</p>
            <Transcripts  dashboard={'teacher'} assessment={false} date={false} section={`classes/${class_id}/grading/${assessment_id}`} icon={false} transcripts={grades} subject={false} submitter={false} />
        </div>
    )
};

export default Grade;