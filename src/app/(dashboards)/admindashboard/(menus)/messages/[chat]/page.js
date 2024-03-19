'use client'

import Image from "next/image";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

//components
import Crumbs from "@/components/crumbs";


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
      <Crumbs url={`admindashboard/messages`} title={`3`}/>
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
      <div className="fixed w-full bottom-0 left-0 xl:mb-5">
        <div className="w-full flex justify-center gap-3 px-3 py-2">
            <input type="text" className="w-full  border-[1px] p-1 border-gray-300 rounded-full bg-white px-5" />
            <Image src={'/send-horizontal.svg'} alt='back to main menu' height={26} width={26}/>
        </div>
      </div>
    </div>
  )
};

export default Teachers;