import Image from "next/image";
import Link from "next/link";

// components 
import Crumbs from "@/components/crumbs";


const Teachers = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <Crumbs url={`parentdashboard`} title={`dashboard`} hide={true}/>
      <div>
        <h1 className="w-full text-center pb-10 text-4xl">Chats</h1>
        <Link href={'/parentdashboard/teachers/teacher'} className="flex relative py-3 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
          <p className="absolute top-0 left-3 bg-blue-600 w-6 text-center rounded-full text-white">1</p>
          <Image priority src={'/profile-icon-1.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-12 max-w-12" />
          <div className=" w-full">
            <p className="font-bold">Surname Name</p>
            <p className="text-sm text-gray-500">your child is having...</p>
          </div>
          <div>
            <p className="text-sm text-blue-700">13:00</p>
          </div>
        </Link>
        <hr className="ml-16 py-1"></hr>
        <Link href={'/parentdashboard/teachers/teacher'} className="relative flex py-3 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
          <p className="absolute top-0 left-3 bg-blue-600 w-6 text-center rounded-full text-white">3</p>
          <Image priority src={'/profile-icon-3.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-12 max-w-12" />
          <div className=" w-full">
            <p className="font-bold">Surname Name</p>
            <p className="text-sm text-gray-500">we need you to come...</p>
          </div>
          <div>
            <p className="text-sm text-blue-700">14:00</p>
          </div>
        </Link>
        <hr className="ml-16 py-1"></hr>
        <Link href={'/parentdashboard/teachers/teacher'} className="flex py-3 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
          <Image priority src={'/profile-icon-2.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-12 max-w-12" />
          <div className=" w-full">
            <p className="font-bold">Surname Name</p>
            <p className="text-sm text-gray-500">your child did not do...</p>
          </div>
          <div>
            <p className="text-sm">12:00</p>
          </div>
        </Link>
        <hr className="ml-16 py-1"></hr>
        <Link href={'/parentdashboard/teachers/teacher'} className="flex relative py-3 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
          <p className="absolute top-0 left-3 bg-blue-600 w-6 text-center rounded-full text-white">1</p>
          <Image priority src={'/profile-icon-4.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-12 max-w-12" />
          <div className=" w-full">
            <p className="font-bold">Surname Name</p>
            <p className="text-sm text-gray-500">your child is having...</p>
          </div>
          <div>
            <p className="text-sm text-blue-700">09:00</p>
          </div>
        </Link>
        <hr className="ml-16 py-1"></hr>
      </div>
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto pt-2">all caught up..</p>
    </div>
  )
};

export default Teachers;