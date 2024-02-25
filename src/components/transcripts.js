import Image from "next/image";
import Link from "next/link";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

const SubmittedBy = ({ student_id }) => {

    let submitter = ''
    data.students.forEach( (student) => {
        if ( student.student_number === student_id ) {
        submitter = student
        }
    });

    return (
        <p className="lg:text-lg text-sm pl-2 text-gray-500">{submitter.name.charAt(0).toUpperCase() + submitter.name.slice(1)} {submitter.surname.charAt(0).toUpperCase() + submitter.surname.slice(1)}</p>
    )
};

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
        <Image src={`/${mark}.svg`} alt='try it button' width={10} height={10} className="absolute w-fit h-fit top-3 right-4 lg:w-8"/>
    )
};

const Transcripts = ({ transcripts }) => {
    return (
        <>
            {
                transcripts.map( ( transcript, index ) => (
                    <>
                        <div key={index} className="py-4 lg:py-6">
                            <div className="flex pl-2 pb-2">
                                <div className="grid grid-cols-1 place-content-center">
                                    <Image src={'/pencil-line.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
                                </div>
                                <SubmittedBy student_id={transcript.submitted_by}/>
                            </div>
                            <Link href={`/parentdashboard/grades/${transcript.id}`}>
                            <div className="relative rounded-xl bg-white py-3" >
                                <TranscriptScore score={transcript.score} total={transcript.total}/>
                                <div>
                                <p className="text-sm lg:text-lg text-gray-500 pt-1 w-full text-center">{transcript.assessment}</p>
                                </div>
                                <div className="flex justify-center py-2 gap-3 px-3 w-full cursor-pointer md:hover:text-blue-700">
                                    <Image priority src={`/${transcript.icon}.svg`} alt="profile icon" width={30} height={30} className="h-8 w-8 lg:h-12 lg:w-12" />
                                    <div className="grid grid-cols-1 place-content-center">
                                        <p className="lg:text-xl">{transcript.subject}</p>
                                    </div>
                                </div>
                                <div className="flex pl-3 pt-3">
                                    <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 h-5 lg:h-6 lg:w-6"/>
                                    <div className="grid grid-cols-1 place-content-center">
                                        <p className="text-sm pl-2 text-gray-500 lg:text-base">released : {transcript.date_released}</p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </>
                ))
            }
        </>
    )
};

export default Transcripts;