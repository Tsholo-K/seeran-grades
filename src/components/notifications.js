import Image from "next/image";
import Link from "next/link";


const Notifications = ({ subject_line, first_sentance, time, read=false}) => {
    return (
        <>
            <Link href={'/parentdashboard/notifications/id'} className="flex relative pb-7 pt-2 gap-5 px-3 justify-start w-full cursor-pointer">
                {
                    read === false &&
                    <Image src={`/notification-icon.svg`} alt="notification" width={25} height={25} className="absolute top-6"/>
                }
                <div className="pl-10 w-full">
                    <p className="font-bold text-xl lg:text-2xl">{subject_line}something</p>
                    <p className="text-sm text-gray-500 lg:text-base">{first_sentance}something</p>
                </div>
                <div>
                    <p className={`text-sm ${ read === false && 'text-[#66b0f0]' }`}>{time}12:00</p>
                </div>
            </Link>
            <hr></hr>
        </>
    )
};

export default Notifications;