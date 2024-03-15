import Image from "next/image";
import Link from "next/link";


const Grade_subject = ({ dashbaord, section, subjects, info=true }) => {
    return (
        <>
            {
                subjects.map( ( subject, index) => (
                    <div key={index} className="pb-6 pt-2 lg:pb-12">
                        <Link href={`/${dashbaord}dashboard/${section}/${subject.id}`}>
                            <div className={`relative rounded-xl cursor-pointer bg-white py-7 px-3 lg:px-8`} >
                                <div className="flex justify-center  gap-2 px-3 w-full">
                                    <Image src={`/${subject.icon}.svg`} alt='try it button' width={10} height={10} className={`${info ? 'w-14' : 'w-14' }  lg:w-20`}/>
                                    <div className="grid grid-cols-1 place-content-center">
                                        <p className="text-lg lg:text-2xl">{subject.subject}</p>
                                    </div>
                                </div>
                                <div className="flex pl-3 pt-3">
                                    <Image src={'/user-round-blue.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-8"/>
                                    <div className="grid grid-cols-1 place-content-center">
                                        <p className="text-sm pl-2 text-gray-500 lg:text-base">teachers : {subject.teachers.length}</p>
                                    </div>
                                </div>
                                <div className="flex pl-3 pt-3">
                                    <Image src={'/users.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-8"/>
                                    <div className="grid grid-cols-1 place-content-center">
                                        <p className="text-sm pl-2 text-gray-500 lg:text-base">learners : {subject.learners.length}</p>
                                    </div>
                                </div>
                                <div className="flex pl-3 pt-3">
                                    <Image src={'/group.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-8"/>
                                    <div className="grid grid-cols-1 place-content-center">
                                        <p className="text-sm pl-2 text-gray-500 lg:text-base">groups : {subject.groups}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </>
    )
};

export default Grade_subject;