'use client';

import { useState } from 'react';


const GradeCreationFrom = () => {

    const [grade, setGrade] = useState(`--- Grade ---`);

    function handleGrade(event) {
        setGrade(event.target.value)
    };

    return (
        <div>
            {/* grade */}
            <div className="py-2 mt-6">
                <p className="text-sm text-gray-400 pl-2 py-1">Grade</p>
                <select value={grade} onChange={handleGrade} className='bg-white rounded-xl h-9 w-full'>
                    <option disabled className='text-center' >--- Grade ---</option>
                    <option value={`RR`} className='text-center'>RR</option>
                    <option value={`R`} className='text-center'>R</option>
                    <option value={`1`} className='text-center'>1</option>
                    <option value={`2`} className='text-center'>2</option>
                    <option value={`3`} className='text-center'>3</option>
                    <option value={`4`} className='text-center'>4</option>
                    <option value={`5`} className='text-center'>5</option>
                    <option value={`6`} className='text-center'>6</option>
                    <option value={`7`} className='text-center'>7</option>
                    <option value={`8`} className='text-center'>8</option>
                    <option value={`9`} className='text-center'>9</option>
                    <option value={`10`} className='text-center'>10</option>
                    <option value={`11`} className='text-center'>11</option>
                    <option value={`12`} className='text-center'>12</option>
                </select>
            </div>
            <p className='py-4'></p>
            <button 
                className={`w-full text-center border focus:bg-[#ffcf2e] focus:text-white lg:hover:text-white active:bg-[#ffcf2e] lg:hover:bg-[#ffcf2e] border-white rounded-md bg-[#d0f0e4] text-black transition-all duration-300 py-1`}
            >
                add grade
            </button>
        </div>
    )
};

export default GradeCreationFrom;