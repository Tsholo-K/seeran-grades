'use client';

import { useState } from 'react';

// dummy data
import data from '@/app/(dashboards)/dummydata.json'
import Image from 'next/image';

// components 
const ToggleMenu = ({ menu, checked }) => {

    const [status, setstatus] = useState(checked)
  
    const reverse = (status) => {
      setstatus(!status)
    };
  
    return (
      <>
        <div className="flex relative px-1 gap-4">
          {
            menu.image &&
            <Image src={`/${menu.image}.svg`} alt="subject name" width={45} height={45} className="w-fit rounded-full h-fit max-h-16 max-w-16"/>
          }
          <div className={`pt-3`}>
            <p className={``}>{menu.name.charAt(0).toUpperCase() + menu.name.slice(1)} {menu.surname.charAt(0).toUpperCase() + menu.surname.slice(1)}</p>
            <p className='text-sm text-gray-400'>{menu.id}</p>
          </div>
          <div className="absolute right-3 top-5 " onClick={reverse}>
            <label for={`${menu.id}`} className="flex items-center cursor-pointer relative mb-4" >
            {
              status ?(
                <input type="checkbox" checked id={`${menu.id}`} className="sr-only"/>
              ) :(
                <input type="checkbox" id={`${menu.id}`} className="sr-only"/>
              )
            }
              <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
            </label>
          </div>
        </div>
      </>
    )
};

const AddStudentFrom = ({ students }) => {

    return (
        <div>
            {/* students */}
            <div className="py-2 mt-6">
                <p className="text-sm text-gray-400 pl-2 pb-3">students</p>
                {
                    students.map(( student, index ) => (
                        <div key={index} className='mb-4 bg-white py-2 px-3 rounded-xl'>
                            <ToggleMenu menu={student} checked={false}/>
                        </div>
                    ))
                }
            </div>
            <p className='py-4'></p>
            <button 
                className={`w-full text-center border focus:bg-[#ffcf2e] focus:text-white lg:hover:text-white active:bg-[#ffcf2e] lg:hover:bg-[#ffcf2e] border-white rounded-md bg-[#d0f0e4] text-black transition-all duration-300 py-1`}
            >
                add students
            </button>
        </div>
    )
};

export default AddStudentFrom;