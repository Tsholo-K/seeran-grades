import Image from "next/image";


const Grade_level = ({ grade }) => {
  return (
    <div className="bg-white rounded-xl py-6 lg:py-8 px-2 lg:px-6">
        <div className="flex justify-center">
            <div className="flex gap-3">
                <Image src={`/grade_level.svg`} alt='try it button' width={10} height={10} className={`w-14  lg:w-20`}/>  
                <p className="grid grid-cols-1 place-content-center text-lg lg:text-2xl"> Grade {grade.grade}</p>
            </div>
        </div>
        <div className="text-gray-500 pt-2">
            <div className="flex gap-3 pl-3 pt-3">
                <Image src={'/user-round-blue.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-8"/>
                <p className="grid grid-cols-1 place-content-center">teachers : {grade.teachers.length}</p>
            </div>
            <div className="flex gap-3 pl-3 pt-3">
                <Image src={'/users.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-8"/>
                <p className="grid grid-cols-1 place-content-center">learners : {grade.learners.length}</p>
            </div>
            <div className="flex gap-3 pl-3 pt-3">
                <Image src={'/subjects.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-8"/>
                <p className="grid grid-cols-1 place-content-center">subjects : {grade.subjects.length}</p>
            </div>
        </div>
    </div>
  )
};

export default Grade_level;