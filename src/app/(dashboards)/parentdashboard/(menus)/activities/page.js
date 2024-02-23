import Image from "next/image";
import Link from "next/link";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'


const Student = ({ student_id }) => {

  let user = null
  data.students.forEach( ( student ) => {
    if ( student.student_number === student_id ) {
      user = student
    }
  });

  return (
    <>
      <p className=" text-sm pl-2 pb-2 text-gray-500">{user.name.charAt(0).toUpperCase() + user.name.slice(1)} {user.surname.charAt(0).toUpperCase() + user.surname.slice(1)}</p>
    </>
  )
};

const Activity = ({ activity }) => {
 return (
    <div className="py-4 z-0">
      <div className="flex pl-2">
        <Image src={'/cctv.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
        <Student student_id={activity.student}/>
      </div>
      <Link href={`/activities/${activity.id}`}>
        <div className="rounded-xl bg-white py-1">
          <div>
            <p className="text-sm text-gray-500 pt-1 w-full text-center">{activity.activity}</p>
          </div>
          <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
              <Image priority src={`/${activity.icon}.svg`} alt="profile icon" width={30} height={30} className="h-8 w-8" />
          </div>
          <div className="flex w-full pl-3 pt-2 relative">
            <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
            <p className=" text-sm pl-2 pb-2 text-gray-500">Logged : {activity.date_logged}</p>
          </div>
        </div>
      </Link>
    </div>
 )
};

const Achievements = () => {

  const activities = data.activities

  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <div className="fixed top-0 pt-16 w-full pb-1 bg-gray-100 z-[2]">
        <Link href={'/parentdashboard'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>dashboard</Link>
      </div>
      <div className="z-[1]">
        <div className="pb-10 ">
            <h1 className="w-full text-center text-4xl">Logs</h1>
            <p className="text-sm text-gray-400 text-center mx-auto pt-3">a record of captured activities</p>
        </div>
        {/* accounts section */}
        {
          activities.map( ( activity, index ) => (
            <Activity key={index} activity={activity}/>
          ))
        }
        <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto pt-2">all caught up..</p>
      </div>
    </div>
  )
};

export default Achievements;