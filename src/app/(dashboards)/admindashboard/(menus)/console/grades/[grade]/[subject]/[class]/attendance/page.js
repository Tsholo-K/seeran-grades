// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import AttendanceCard from '@/components/(general components)/attendancecard';
import Aligner from '@/components/(general components)/aligner';


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
            <Aligner/>
            <Crumbs url={`teacherdashboard/registerclass`} title={'register class'} heading={`attendance register`}/>
            <PageHeading title={`Attendance Register`} subheading={`class ${register.grade}${register.group}`} />
            <p className='text-sm text-gray-400 mt-6 pl-2'>students</p>
            {
                students.map( (learner, index) => (
                    <AttendanceCard key={index} learner={learner} button={'present'} />
                ))
            }
        </div>
    )
};

export default Attendance;