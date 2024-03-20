// components 
import ToggleMenu from '../(general components)/togglemenu';


const settings = [
    {
        title: "Fees Tracking",
    },
]

const SchoolSettingsFrom = () => {

    return (
        <div>
            {/* settings */}
            <div className="py-2 mt-6">
                <p className="text-sm text-gray-400 pl-2 pb-1">settings</p>
                {
                    settings.map(( subject, index ) => (
                        <div key={index} className='mb-4 bg-white py-1 px-3 rounded-xl'>
                            <ToggleMenu menu={subject} checked={false}/>
                        </div>
                    ))
                }
            </div>
            <p className='py-4'></p>
        </div>
    )
};

export default SchoolSettingsFrom;