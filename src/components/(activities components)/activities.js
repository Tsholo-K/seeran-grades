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
      <p className="text-sm lg:text-lg pl-2 text-gray-500 ">{submitter.name.charAt(0).toUpperCase() + submitter.name.slice(1)} {submitter.surname.charAt(0).toUpperCase() + submitter.surname.slice(1)}</p>
    )
};

const Activities = ({ activities, dashboard, section }) => {
    return (
        <>
            {
                activities.map(( activity, index ) => (
                    <div key={index} className="py-4 lg:py-6">
                        <div className="flex pl-2 pb-2">
                            <div className="grid grid-cols-1 place-content-center">
                                <Image src={'/cctv.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-7"/>
                            </div>
                            <SubmittedBy student_id={activity.student}/>
                        </div>
                        <Link href={`/${dashboard}dashboard/${section}/${activity.id}`}>
                        <div className="rounded-xl bg-white py-3">
                            <p className="text-sm lg:text-lg text-gray-500 pt-1 w-full text-center">{activity.activity}</p>
                            <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer">
                                <Image priority src={`/${activity.icon}.svg`} alt="profile icon" width={30} height={30} className="w-8 lg:w-14" />
                            </div>
                            <div className="flex w-full pl-3 pt-2">
                                <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-6"/>
                                <div className="grid grid-cols-1 place-content-center">
                                    <p className=" text-sm pl-2 text-gray-500">Logged : {activity.date_logged}</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                ))
            }
            
        </>
       
    )
};

export default Activities;