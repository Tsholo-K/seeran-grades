import Image from "next/image";
import Link from "next/link";

// dummy data
import data from '@/app/(menus)/dummydata.json'


const Assessment = ({ assessment }) => {
  return (
    <>
      <div className="py-4">
        <div className="flex pl-2">
          <Image src={'/user-round.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
          <p className=" text-sm pl-2 pb-1 text-gray-500">{assessment.student}</p>
        </div>
        <Link href={`/assessments/${assessment.id}`}>
          <div className="rounded-xl bg-white py-1">
            <div>
              <p className="text-sm text-gray-500 pt-1 w-full text-center">{assessment.assessment}</p>
            </div>
            <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
                <Image priority src={`/${assessment.icon}.svg`} alt="profile icon" width={30} height={30} className="h-8 w-8" />
                <div className="pt-1 pl-2">
                    <p>{assessment.subject}</p>
                </div>
            </div>
            <div className="flex pl-3 pt-2">
              <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
              <p className=" text-sm pl-2 pb-2 text-gray-500">{assessment.due_date}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

const Grades = () => {

  const assessments = data.assessments

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      {/* back link */}
      <div className="fixed top-0 pt-16 w-full pb-1 bg-gray-100 z-[2]">
        <Link href={'/parentdashboard'} className="flex w-full text-blue-700">
          <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>dashboard
        </Link>
      </div>
      <div className="z-[1]">
        {/* page heading */}
        <div className="pb-10 " >
            <h1 className="w-full text-center text-4xl mb-3">Assessments</h1>
            <p className=" text-sm w-[90%] text-gray-400 text-center mx-auto pt-2">due assessments</p>
        </div>
        {/* assesments */}
        {
          assessments.map( ( assessment, index ) => (
            <>
              <Assessment key={index} assessment={assessment}/>
            </>
          ))
        }
        <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto pt-2">all caught up..</p>
      </div>
     
    </div>
  )
};

export default Grades;