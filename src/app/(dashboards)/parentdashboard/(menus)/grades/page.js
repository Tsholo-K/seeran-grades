import Image from "next/image";
import Link from "next/link";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";

const SubmittedBy = ({ student_id }) => {

  let submitter = ''
  data.students.forEach( (student) => {
    if ( student.student_number === student_id ) {
      submitter = student
    }
  });
  return (
    <p className=" text-sm pl-2 pb-2 text-gray-500">{submitter.name.charAt(0).toUpperCase() + submitter.name.slice(1)} {submitter.surname.charAt(0).toUpperCase() + submitter.surname.slice(1)}</p>
  )
}

const TranscriptScore = ({ score, total }) => {

  const result = score / total * 100
  let mark
  if( result > -1 ) {
    mark = 'grades-ready-failed'
  }
  if( result > 39 ) {
    mark = 'grades-ready-okay'
  }
  if( result > 79 ) {
    mark = 'grades-ready-passed'
  }

  return (
    <Image src={`/${mark}.svg`} alt='try it button' width={10} height={10} className="absolute w-fit h-fit top-2 right-3"/>
  )
}

const Grade = ({ transcript }) => {
  return (
    <>
      <div className="py-4">
        <div className="flex pl-2">
          <Image src={'/pencil-line.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
          <SubmittedBy student_id={transcript.submitted_by}/>
        </div>
        <Link href={`/parentdashboard/grades/${transcript.id}`}>
          <div className="relative rounded-xl bg-white py-1" >
            <TranscriptScore score={transcript.score} total={transcript.total}/>
            <div>
              <p className="text-sm text-gray-500 pt-1 w-full text-center">{transcript.assessment}</p>
            </div>
            <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
                <Image priority src={`/${transcript.icon}.svg`} alt="profile icon" width={30} height={30} className="h-8 w-8" />
                <div className="pt-1 pl-2">
                    <p>{transcript.subject}</p>
                </div>
            </div>
            <div className="flex pl-3 pt-2">
              <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
              <p className=" text-sm pl-2 pb-2 text-gray-500">released : {transcript.date_released}</p>
              <p className=" text-sm pl-2 pb-2 text-gray-500"></p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
};

const Grades = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      {/* back link */}
      <Crumbs url={`parentdashboard`} title={'dashboard'} hide={true}/>
      {/* page heading */}
      <div className="pb-10" >
          <h1 className="w-full text-center text-4xl mb-3">Transcripts</h1>
          <p className=" text-sm w-[90%] text-gray-400 text-center mx-auto pt-2">assessment results</p>
      </div>
      {/* transcripts */}
      {
        data.grades.map( (transcript, index) => (
          <Grade key={index} transcript={transcript} />
        ))
      }
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto pt-5">all caught up..</p>
    </div>
  )
};

export default Grades;