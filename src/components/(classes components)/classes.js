import Image from "next/image";
import Link from "next/link";

const Class_info = ({ classroom, teacher, subject  }) => {
    return (
        <div className="relative rounded-xl cursor-pointer bg-white pb-6 pt-3 px-3 lg:px-7" >
            {   
                teacher &&
                <div className="flex gap-2 w-full justify-center">
                    <Image src={'/user-round-blue.svg'} alt='try it button' width={10} height={10} className="w-8 lg:w-10"/>
                    <p className="text-sm lg:text-lg text-gray-500 pt-1">{classroom.teacher}</p>
                </div>
            }
            {
                subject 
                ?
                <div className="flex justify-center py-2 gap-2 px-3 w-full">
                    <Image src={`/${classroom.icon}.svg`} alt='try it button' width={10} height={10} className="w-8 lg:w-10"/>
                    <div className="grid grid-cols-1 place-content-center">
                        <p className="text-lg lg:text-xl">{classroom.subject}</p>
                    </div>
                </div>
                :
                <div className="flex gap-3 justify-center">
                    <Image src={'/user-round-blue.svg'} alt='try it button' width={10} height={10} className="w-8 lg:w-10"/>
                    <p className=" text-sm lg:text-lg text-gray-500 pt-1 grid grid-cols-1 place-content-center">
                        {classroom.teacher}
                    </p>
                </div>
            }
            <div className="flex pl-3 pt-3">
                <Image src={'/users.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-6"/>
                <div className="grid grid-cols-1 place-content-center">
                    <p className="text-sm pl-2 text-gray-500 lg:text-base">learners : {classroom.students.length}</p>
                </div>
            </div>
            <div className="flex pl-3 pt-3">
                <Image src={'/group.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-6"/>
                <div className="grid grid-cols-1 place-content-center">
                    <p className="text-sm pl-2 text-gray-500 lg:text-base">group : {classroom.group}</p>
                </div>
            </div>
            <div className="flex pl-3 pt-3">
                <Image src={'/class.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-6"/>
                <div className="grid grid-cols-1 place-content-center">
                    <p className="text-sm pl-2 text-gray-500 lg:text-base">classroom : 102</p>
                </div>
            </div>
        </div>
    )
}

const Classes = ({ dashbaord, section, classrooms, teacher=true, subject=true, url=true }) => {
    return (
        <>
            {
                classrooms.map( ( classroom, index) => (
                    <>
                        <div key={index} className="py-6 lg:py-12">
                            <div className="flex pl-2 pb-2">
                                <div className="grid grid-cols-1 place-content-center">
                                    <Image src={'/grade.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-7"/>
                                </div>
                                <p className="lg:text-lg text-sm pl-2 ">grade : {classroom.grade}</p>
                            </div>
                            {
                                url
                                ?
                                    <Link href={`/${dashbaord}dashboard/${section}/${classroom.class_id}`}>
                                        <Class_info classroom={ classroom} teacher={teacher} subject={subject} />
                                    </Link>
                                :
                                    <div>
                                        <Class_info classroom={classroom} teacher={teacher} subject={subject} />
                                    </div>
                            }
                        </div>
                    </>
                ))
            }
        </>
    )
};

export default Classes;