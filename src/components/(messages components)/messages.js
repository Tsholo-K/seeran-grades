import Link from "next/link";
import Image from "next/image";


const Messages = ({ dashboard, }) => {
  return (
    <>
        <Link href={`/${dashboard}dashboard/messages/teacher`} className="flex relative py-3 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
            <p className="absolute top-0 left-3 bg-blue-600 w-6 text-center rounded-full text-white">1</p>
            <Image priority src={'/default-user-icon.svg'} alt="profile icon" width={30} height={30} className="w-fit rounded-full h-fit max-w-12 lg:max-w-16" />
            <div className=" w-full">
                <p className="font-bold lg:text-xl">Surname Name</p>
                <p className="text-sm lg:text-base text-gray-500">your child is having...</p>
            </div>
            <div>
                <p className="text-sm lg:text-base text-blue-700">13:00</p>
            </div>
      </Link>

    </>
  )
};

export default Messages;