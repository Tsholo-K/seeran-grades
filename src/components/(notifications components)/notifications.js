import Image from "next/image";
import Link from "next/link";


const Notifications = ({ dashboard, subject_line, first_sentance, time, read=false}) => {
    return (
        <>
            <Link href={`/${dashboard}dashboard/notifications/id`} className="flex relative py-3 gap-5 px-3 justify-start w-full cursor-pointer">
                {
                    read === false &&
                    <Image src={`/notification-icon.svg`} alt="notification" width={22} height={22} className="absolute left-1 top-7"/>
                }
                <div className="pl-10 w-full">
                    <p className="font-bold text-xl lg:text-2xl">{subject_line}</p>
                    <p className="text-sm text-gray-500 lg:text-base">{first_sentance}</p>
                </div>
                <div>
                    <p className={`text-sm ${ read === false && 'text-[#66b0f0]' }`}>{time}12:00</p>
                </div>
            </Link>
            <hr className="mx-5"></hr>
        </>
    )
};

export default Notifications;