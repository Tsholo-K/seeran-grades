'use client';

import { useState } from 'react';


const ClassCreationFrom = () => {

    const [teacher, setTeacher] = useState(`--- Class Teacher ---`);
    const [group, setGroup] = useState('');
    const [classroom, setClassroom] = useState('');

    function handleTeacherChange(event) {
        setTeacher(event.target.value)
    };

    function handleGroupChange(event) {
        setGroup(event.target.value)
    };

    function handleClassroomChange(event) {
        setClassroom(event.target.value)
    };


    return (
        <div>
            {/* Teacher confrimation */}
            <div className="py-2 mt-6">
                <p className="text-sm text-gray-400 pl-2 py-1">teacher</p>
                <select value={teacher} onChange={handleTeacherChange} className='bg-white rounded-xl h-9 w-full'>
                    <option disabled className='text-center' >--- Class Teacher ---</option>
                    <option value={`yes`} className='text-center'>Yes</option>
                    <option value={`no`} className='text-center'>no</option>
                </select>
            </div>
            {/* group */}
            <div className="py-2">
                <p className="text-sm text-gray-400 pl-2 py-1">group</p>
                <div className="rounded-xl bg-white mb-1">
                    <input
                        type={`text`}
                        onChange={handleGroupChange}
                        className="w-full text-base rounded-xl h-10 px-4 focus:outline-none resize-none"
                        value={group}
                    />
                </div>
            </div>
            {/* classroom */}
            <div className="py-2">
                <p className="text-sm text-gray-400 pl-2 py-1">classroom number</p>
                <div className="rounded-xl bg-white mb-1">
                    <input
                    type={`text`}
                    onChange={handleClassroomChange}
                    className="w-full text-base rounded-xl h-10 px-4 focus:outline-none resize-none"
                    value={classroom}
                    />
                </div>
            </div>
            <p className='py-4'></p>
            <button 
                className={`w-full text-center border focus:bg-[#ffcf2e] focus:text-white lg:hover:text-white active:bg-[#ffcf2e] lg:hover:bg-[#ffcf2e] border-white rounded-md bg-[#d0f0e4] text-black transition-all duration-300 py-1`}
            >
                add class
            </button>
        </div>
    )
};

export default ClassCreationFrom;