'use client'

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

const Chat = ({ chats }) => {
  
}

const Teachers = () => {

  const params = useParams()
  const teacher_id = params.chat

  let teacher = null
  data.teachers.forEach( teach => {
    if ( teach.id === teacher_id )
      teacher = teach
  });

  return (
    <div className="w-full min-h-full relative">
      <div className="flex top-0 pt-16 w-full fixed bg-gray-100">
        <Link href={'/teachers'}  className="flex text-blue-700">
          <div className="grid grid-cols-1 place-content-center">
            <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>
          </div>
          <p className="grid grid-cols-1 place-content-center">3</p>
        </Link>
        <div className="flex w-full justify-center">
          <div className="flex gap-3">
            <Image priority src={'/profile-icon-1.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-8 max-w-8" />
            <Link href={'/teachers/teacher/id'} className=" w-full font-bold pt-1 text-black">Surname Name</Link>
          </div>
        </div>
      </div>
      {/* chats */}
      <div className="chat text-base text-white">
        <div className="mine messages">
          <div className="message last">
            Dude
          </div>
        </div>
        <div className="yours messages">
          <div className="message">
            Hey!
          </div>
          <div className="message">
            You there?
          </div>
          <div className="message last">
            Hello, how&apos;s it going?
          </div>
        </div>
        <div className="mine messages">
          <div className="message">
            Great thanks!
          </div> 
          <div className="message last">
            How about you?
          </div>
        </div>
        <div className="yours messages">
          <div className="message last">
            im alright just been busy lately 😮‍💨
          </div>
        </div>
      </div>
      <div className="fixed w-full bottom-0 left-0">
          <div className="w-full flex justify-center gap-3 px-3 py-2">
              <input type="text" className="w-full  border-[1px] p-1 border-gray-300 rounded-full bg-white" />
              <Image src={'/send-horizontal.svg'} alt='back to main menu' height={26} width={26}/>
          </div>
      </div>
        
    </div>
  )
};

export default Teachers;