// dummy data
import data from '@/app/(dashboards)/dummydata.json'


const Grade = ({ learner_id }) => {

    let learner 
    data.students.forEach( (student) => {
        if ( student.id === learner_id ) {
            learner = student
        }
    });
    
    return (
        <div className={`py-2 lg:py-3`}>
            <div className="relative flex rounded-xl cursor-pointer bg-white py-3" >
                <p className={`lg:text-xl pl-4 text-gray-500`}>{learner.name.charAt(0).toUpperCase() + learner.name.slice(1)} {learner.surname.charAt(0).toUpperCase() + learner.surname.slice(1)}</p>
                <input />
            </div>
        </div>
    )
};

export default Grade;