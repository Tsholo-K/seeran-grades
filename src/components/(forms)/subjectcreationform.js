'use client';

import { useState } from 'react';

// components 
import ToggleMenu from '../(general components)/togglemenu';


const subjects = [
    {
        title: "Physical Sciences",
        icon: "physics"
    },
    {
        title: "Mathematics",
        icon: "maths"
    },
    {
        title: "Life Sciences",
        icon: "life-science"
    },
    {
        title: "Geography",
        icon: "geography"
    },
    {
        title: "Accounting",
        icon: "accounting"
    },
    {
        title: "Business Studies",
        icon: "business-studies"
    },
    {
        title: "Biology",
        icon: "biology"
    },
    {
        title: "Natural Sciences",
        icon: "natural-science"
    },
    {
        title: "Social Sciences",
        icon: "social-science"
    },
    {
        title: "English",
        icon: "language"
    },
    {
        title: "Afrikaans",
        icon: "language"
    },
    {
        title: "Zulu",
        icon: "language"
    },
    {
        title: "Sepedi",
        icon: "language"
    },
    {
        title: "French",
        icon: "language"
    }
]

const SubjectCreationFrom = () => {

    return (
        <div>
            {/* subjects */}
            <div className="py-2 mt-6">
                <p className="text-sm text-gray-400 pl-2 pb-1">subjects</p>
                {
                    subjects.map(( subject, index ) => (
                        <div key={index} className='mb-4 bg-white py-1 px-3 rounded-xl'>
                            <ToggleMenu menu={subject} checked={false}/>
                        </div>
                    ))
                }
            </div>
            <p className='py-4'></p>
            <button 
                className={`w-full text-center border focus:bg-[#ffcf2e] focus:text-white lg:hover:text-white active:bg-[#ffcf2e] lg:hover:bg-[#ffcf2e] border-white rounded-md bg-[#d0f0e4] text-black transition-all duration-300 py-1`}
            >
                add subject
            </button>
        </div>
    )
};

export default SubjectCreationFrom;