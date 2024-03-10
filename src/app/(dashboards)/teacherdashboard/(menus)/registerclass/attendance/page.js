// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Image from 'next/image';


const AttendanceCard = ({ learner }) => {
    return (
        <div className='relative rounded-xl bg-white mb-4 mt-2'>
            <Image src={`/${learner.image}.svg`} alt='user icon' width={50} height={50} className='absolute top-4 left-3 rounded-full' />
            <p className='pl-20 pt-4 pb-10'>{learner.name.charAt(0).toUpperCase() + learner.name.slice(1)} {learner.surname.charAt(0).toUpperCase() + learner.surname.slice(1)}</p>
            <form className='bg-white rounded-xl'>
                <input type='text' disabled value={`${learner.id}`} className='absolute bg-white  left-20 top-10' />
                <button className='absolute right-4 top-[20px] rounded-lg bg-black focus:bg-[#ffcf2e] px-4 py-2 text-white' >present</button>
            </form>
        </div>
    )
}

const Attendance = () => {

    const classroom_id = data.teachers[0].register_class

    let register
    data.register_classes.forEach( cls => {
        if ( cls.id === classroom_id ) {
            register = cls
        }
    });

    let students = []
    data.students.forEach( learner => {
        register.students.forEach( id => {
            if ( id === learner.id ) {
                students.push(learner)
            }
        })
    })

    return (
        <div>
            {/* back link */}
            <Crumbs url={`teacherdashboard/registerclass`} title={'register class'}/>
            <PageHeading title={`Attendance Register`} subheading={"click 'present' if student is available"} />
            <p className='text-sm text-gray-400 mt-6 pl-2'>students</p>
            {
                students.map( (learner, index) => (
                    <AttendanceCard key={index} learner={learner} />
                ))
            }
        </div>
    )
};

export default Attendance;