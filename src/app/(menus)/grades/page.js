import Image from "next/image";
import Link from "next/link";


const Transcripts= {
  mark1: {
    id: '1234',
    name: 'Tsholo Koketso',
    score: 'grades-ready-passed',
    assessment: 'exam',
    subject: 'Mathematics',
    icon: 'maths',
    date: 'tuesday, 14 january',
  },
  mark2: {
    id: '12341',
    name: 'Mochaki Lethabo',
    score: 'grades-ready-okay',
    assessment: 'class test',
    subject: 'Life Science',
    icon: 'life-science',
    date: 'monday, 09 febuary',
  },
  mark3: {
    id: '13413',
    name: 'Mochaki Lethabo',
    score: 'grades-ready-failed',
    assessment: 'quiz',
    subject: 'Physical Sciences',
    icon: 'physics',
    date: 'friday, 26 january',
  },
  mark4: {
    id: '23412',
    name: 'Munyoro Godwill',
    score: 'grades-ready-okay',
    assessment: 'practical',
    subject: 'Mathematics',
    icon: 'maths',
    date: 'monday, 28 febuary',
  },
};

const Grade = ({ transcript }) => {
  return (
    <>
      <div className="py-4">
        <div className="flex pl-2">
          <Image src={'/pencil-line.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
          <p className=" text-sm pl-2 pb-2 text-gray-500">{transcript.name}</p>
        </div>
        <Link href={`/grades/${transcript.id}`}>
          <div className="relative rounded-xl bg-white py-1" >
            <Image src={`/${transcript.score}.svg`} alt='try it button' width={10} height={10} className="absolute w-fit h-fit top-2 right-3"/>
            <div>
              <p className="text-sm text-gray-500 pt-1 w-full text-center">{transcript.assessment}</p>
            </div>
            <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
                <Image priority src={`/${transcript.icon}.svg`} alt="profile icon" width={30} height={30} className="h-8 w-8" />
                <div className="pt-1 pl-2">
                    <p>{transcript.subject}</p>
                </div>
            </div>
            <div className="flex pl-3 pt-2">
              <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
              <p className=" text-sm pl-2 pb-2 text-gray-500">released : {transcript.date}</p>
              <p className=" text-sm pl-2 pb-2 text-gray-500"></p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
};


const Grades = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      {/* back link */}
      <div className="fixed top-0 pt-16 w-full pb-1 bg-gray-100">
        <Link href={'/parentdashboard'} className="flex w-full text-blue-700">
          <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>dashboard
        </Link>
      </div>
      {/* page heading */}
      <div >
          <h1 className="w-full text-center pb-10 text-4xl">Transcripts</h1>
      </div>
      {/* transcripts */}
      <Grade transcript={Transcripts.mark1}/>
      <Grade transcript={Transcripts.mark2}/>
      <Grade transcript={Transcripts.mark4}/>
      <Grade transcript={Transcripts.mark3}/>
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto pt-5">all caught up..</p>
    </div>
  )
};

export default Grades;