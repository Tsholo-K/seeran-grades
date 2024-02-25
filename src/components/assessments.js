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
                <Image src={'/user-round.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-7"/>
            </div>
            <SubmittedBy student_id={assessment.student} />
          </div>
          <Link href={`/parentdashboard/assessments/${assessment.id}`}>
            <div className="rounded-xl bg-white py-3">
              <div>
                <p className="text-sm lg:text-lg text-gray-500 pt-1 w-full text-center">{assessment.assessment}</p>
              </div>
              <div className="flex justify-center py-2 gap-3 px-3 w-full cursor-pointer">
                  <Image priority src={`/${assessment.icon}.svg`} alt="profile icon" width={30} height={30} className="w-8 lg:w-12" />
                  <div className="grid grid-cols-1 place-content-center">
                      <p className="lg:text-xl">{assessment.subject}</p>
                  </div>
              </div>
              <div className="flex pl-3 pt-2">
                <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-6"/>
                <div className="grid grid-cols-1 place-content-center">
                  <p className=" text-sm lg:text-base pl-2 text-gray-500">Due : {assessment.due_date}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </>
    )
};

export default Assessments