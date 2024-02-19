'use client'

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(menus)/dummydata.json'


const Score = ({ score, total }) => {

  let result = score / total * 100

  let colour = null
  if ( result > 79 ) {
    colour = 'bg-green-600'
  } else if ( 39 < result && result < 80 ) {
    colour = 'bg-orange-500'
  } else {
    colour = 'bg-red-600'
  }
  
  result = result.toString().slice(0, 4)
  
  return (
    <>
      <div className="w-full pb-10">
        <div className="mx-auto w-fit">
          <p className={`${colour} text-center w-[180px] h-[180px] text-white rounded-full pt-[67px] text-5xl`}>{result}%</p>
        </div>
        <p className="w-full text-center pt-3 text-gray-400 text-sm">score</p>
      </div>
    </>
  )
};


const SubmittedBy = ({ student_id }) => {

  let submitter = ''
  data.students.forEach( (student) => {
    if ( student.student_number === student_id ) {
      submitter = student
    }
  });
  return (
    <p className="w-full text-center pt-1 text-sm text-gray-400">submitted by : {submitter.name.charAt(0).toUpperCase() + submitter.name.slice(1)} {submitter.surname.charAt(0).toUpperCase() + submitter.surname.slice(1)}</p>
  )
}

const Subject = ({ subject, icon, submitter }) => {
  return (
    <>
      <div className="py-4 mb-8">
        <div className="flex">
          <p className=" text-sm pl-2 pb-1 text-gray-400">subject</p>
        </div>
        <div className="relative rounded-xl bg-white py-1">
          <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
              <Image priority src={`/${icon}.svg`} alt="profile icon" width={30} height={30} className="h-8 w-8" />
              <div className="pt-1 pl-2">
                  <p>{subject}</p>
              </div>
          </div>
        </div>
        <SubmittedBy student_id={submitter}/>
      </div>
    </>
  )
}
 

const MenuLink = ({ menu, info }) => {
  return (
    <div className="relative flex py-3 gap-1 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p>{menu}</p>
      <p className="text-gray-400 absolute right-4">{info}</p>
    </div>
  )
};

const Transcript = () => {

  const params = useParams();
  const transcript_id = params.transcript

  let transcript = null
  data.grades.forEach(( grade ) => {
    if ( grade.id === transcript_id ) {
      transcript = grade
    }
  })

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <div className="fixed top-0 pt-16 pb-1 w-full bg-gray-100">
        <Link href={'/grades'} className="flex w-full text-blue-700">
          <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>grades
        </Link>
      </div>
      {/* page heading */}
      <div>
        <h1 className="w-full text-center pb-16 text-4xl">Transcript</h1>
      </div>
      {/* score */}
      <Score score={transcript.score} total={transcript.total}/>
      {/* subject */}
      <Subject subject={transcript.subject} icon={transcript.icon} submitter={transcript.submitted_by}/>
      {/* info */}
      <div className="rounded-xl bg-white mb-8">
        <MenuLink menu={'Assessment'} info={transcript.assessment}/>
        <hr className="mx-5"></hr>
        <MenuLink menu={'Grade'} info={`${transcript.score} / ${transcript.total }`}/>
        <hr className="mx-5"></hr>
        <MenuLink menu={'Date'} info={transcript.date_submitted}/>
      </div>
      {/* teacher */}
      <div className="flex">
        <Link href={'/teachers/teacher'} className="pb-1 w-full text-end pr-3 text-blue-700">message</Link>
      </div>
      <div className="rounded-xl bg-white">
        <MenuLink menu={'Teacher ID'} info={transcript.teacher}/>
      </div>
    </div>
  )
};

export default Transcript;