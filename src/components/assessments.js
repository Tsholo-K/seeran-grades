import Image from "next/image"
import Link from "next/link"

// dummy data
import data from '@/app/(dashboards)/dummydata.json'


const SubmittedBy = ({ student_id }) => {

    let submitter 
    data.students.forEach( (student) => {
      if ( student.student_number === student_id ) {
        submitter = student
      }
    });
    return (
      <p className="text-sm lg:text-lg pl-2 text-black ">{submitter.name.charAt(0).toUpperCase() + submitter.name.slice(1)} {submitter.surname.charAt(0).toUpperCase() + submitter.surname.slice(1)}</p>
    )
}


const Assessments = ({ assessment }) => {
    return (
      <>
        <div className="py-4 lg:py-6">
          <div className="flex pl-2 pb-2">
            <div className="grid grid-cols-1 place-content-center">
                <Image src={'/user-round.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
            </div>
            <SubmittedBy student_id={assessment.student} />
          </div>
          <Link href={`/parentdashboard/assessments/${assessment.id}`}>
            <div className="rounded-xl bg-white py-1">
              <div>
                <p className="text-sm lg:text-lg text-gray-500 pt-1 w-full text-center">{assessment.assessment}</p>
              </div>
              <div className="flex justify-center py-2 gap-3 px-3 w-full cursor-pointer md:hover:text-blue-700">
                  <Image priority src={`/${assessment.icon}.svg`} alt="profile icon" width={30} height={30} className="h-8 w-8 lg:h-12 lg:w-12" />
                  <div className="grid grid-cols-1 place-content-center">
                      <p className="lg:text-xl">{assessment.subject}</p>
                  </div>
              </div>
              <div className="flex pl-3 pt-2">
                <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
                <p className=" text-sm pl-2 pb-2 text-gray-500 lg:text-base">Due : {assessment.due_date}</p>
              </div>
            </div>
          </Link>
        </div>
      </>
    )
};

export default Assessments