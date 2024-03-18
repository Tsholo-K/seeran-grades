'use client'

import Image from "next/image";
import { useState } from "react";


const ToggleMenu = ({ menu, checked }) => {

    const [status, setstatus] = useState(checked)
  
    const reverse = (status) => {
      setstatus(!status)
    };
  
    return (
      <>
        <div className="flex relative my-3 px-1 gap-3">
          {
            menu.icon &&
            <Image src={`/${menu.icon}.svg`} alt="subject name" width={25} height={25}/>
          }
          <p>{menu.title}</p>
          <div className="absolute right-3 " onClick={reverse}>
            <label for={`${menu.title}`} className="flex items-center cursor-pointer relative mb-4" >
            {
              status ?(
                <input type="checkbox" checked id={`${menu.title}`} className="sr-only"/>
              ) :(
                <input type="checkbox" id={`${menu.title}`} className="sr-only"/>
              )
            }
              <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
            </label>
          </div>
        </div>
      </>
    )
};

export default ToggleMenu;