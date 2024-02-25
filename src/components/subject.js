import Image from "next/image";

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
};

export default Subject;