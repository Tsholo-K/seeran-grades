import Image from "next/image";
import Link from "next/link";


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

const Classes = ({ classrooms, teacher=true }) => {
    return (
        <>
            {
                classrooms.map( ( classroom, index) => (
                    <>
                        <div key={index} className="py-4 lg:py-6">
                            <div className="flex pl-2 pb-2">
                                <div className="grid grid-cols-1 place-content-center">
                                    <Image src={'/grade.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-7"/>
                                </div>
                                <p className="lg:text-lg text-sm pl-2 text-gray-500">grade : {classroom.grade}</p>
                            </div>
                            <Link href={`/parentdashboard/grades/${classroom.id}`}>
                                <div className="relative rounded-xl bg-white py-3" >
                                    {   
                                        teacher &&
                                        <p className="text-sm lg:text-lg text-gray-500 pt-1 w-full text-center">{classroom.teacher}</p>
                                    }
                                    <div className="flex justify-center py-2 gap-3 px-3 w-full cursor-pointer">
                                        <div className="grid grid-cols-1 place-content-center">
                                            <p className="lg:text-xl">{classroom.subject}</p>
                                        </div>
                                    </div>
                                    <div className="flex pl-3 pt-3">
                                        <Image src={'/user-round-blue.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-6"/>
                                        <div className="grid grid-cols-1 place-content-center">
                                            <p className="text-sm pl-2 text-gray-500 lg:text-base">teacher : {'teacher'}</p>
                                        </div>
                                    </div>
                                    <div className="flex pl-3 pt-3">
                                        <Image src={'/users.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-6"/>
                                        <div className="grid grid-cols-1 place-content-center">
                                            <p className="text-sm pl-2 text-gray-500 lg:text-base">learners : {classroom.students.length}</p>
                                        </div>
                                    </div>
                                    <div className="flex pl-3 pt-3">
                                        <Image src={'/class.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-6"/>
                                        <div className="grid grid-cols-1 place-content-center">
                                            <p className="text-sm pl-2 text-gray-500 lg:text-base">class : {classroom.grade}{classroom.group}</p>
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

export default Classes;