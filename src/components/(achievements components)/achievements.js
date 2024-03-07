import Link from "next/link";
import Image from "next/image";

// dummy data
import data from '@/app/(dashboards)/dummydata.json';


const SubmittedBy = ({ student_id }) => {

    let submitter 
    data.students.forEach( (student) => {
      if ( student.id === student_id ) {
        submitter = student
      }
    });
    return (
      <p className="text-sm lg:text-lg pl-2 text-black ">{submitter.name.charAt(0).toUpperCase() + submitter.name.slice(1)} {submitter.surname.charAt(0).toUpperCase() + submitter.surname.slice(1)}</p>
    )
};

const Achievements = ({ achievements }) => {
    return (
        <>
            {
                achievements.map(( achievement, index ) => (
                    <>
                        <div key={index} className="py-4 lg:py-6">
                            <div className="flex pl-2">
                                <div className="grid grid-cols-1 place-content-center">
                                    <Image src={'/grant.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-8"/>
                                </div>
                                <SubmittedBy student_id={achievement.student} />
                            </div>
                            <Link href={`/parentdashboard/achievements/${achievement.id}`}>
                                <div className="rounded-xl bg-white py-3">
                                    <div>
                                    <p className="text-sm lg:text-lg text-gray-500 pt-1 w-full text-center">{achievement.score}</p>
                                    </div>
                                    <div className="flex justify-center py-2 gap-3 px-3 w-full cursor-pointer">
                                        <Image priority src={`/${achievement.icon}.svg`} alt="profile icon" width={30} height={30} className="w-8 lg:w-12" />
                                        <div className="grid grid-cols-1 place-content-center">
                                            <p className="lg:text-xl">{achievement.for}</p>
                                        </div>
                                    </div>
                                    <div className="flex w-full pl-3 pt-2 relative">
                                    <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-6"/>
                                    <div className="grid grid-cols-1 place-content-center">
                                        <p className=" text-sm lg:text-base pl-2 text-gray-500">Granted : {achievement.date_granted}</p>
                                    </div>
                                    {
                                        achievement.medal
                                        ? <Image src={`/${achievement.medal}.svg`} alt='try it button' width={10} height={10} className="w-6 lg:w-8 absolute bottom-1 right-5"/>
                                        : null
                                    }
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

export default Achievements;