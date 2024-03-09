'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import MultipleMenu from "@/components/(general components)/multiplemenu";
import Transcripts from "@/components/(grades components)/transcripts";


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
            {/* back link */}
            <Crumbs url={`teacherdashboard/classes/${class_id}`} title={'class'}/>
            {/* transcripts */}
            <p className='text-sm text-gray-400 mt-7 pl-2'>gradings</p>
            <Transcripts  dashboard={'teacher'} assessment={false} date={false} section={`performance/${class_id}/${assessment_id}`} icon={false} transcripts={grades} subject={false} submitter={false} />
            <p className="py-7 text-center text-sm text-gray-400">that&apos;s all scores</p>
        </div>
    )
};

export default Grade;