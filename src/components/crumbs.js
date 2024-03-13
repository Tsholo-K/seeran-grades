'use client'

import { useEffect, useState } from 'react';

import Link from "next/link";
import Image from "next/image";


const Crumbs = ({ title, url, hide=false, heading }) => {

  const [scroll, setScroll] = useState(false);

  const ScrollTracker = () => {

    const [scrollY, setScrollY] = useState(window.scrollY);

    useEffect(() => {
      
      const handleScroll = () => {
        setScrollY(window.scrollY);
        console.log(scrollY)

        if ( scrollY > 68 ) {
          setScroll(true)
        }
        if ( scrollY < 68 ) {
          setScroll(false)
        }
      };

      // Add scroll event listener when component mounts
      window.addEventListener('scroll', handleScroll);

    }, [scrollY]);

    

    return null; // Since this component doesn't render anything, return null
  };

  return (
    <>  
      <ScrollTracker/>
      <div className={`fixed ${ hide && 'lg:hidden'} top-0 pt-16 w-full pb-1 bg-gray-100 z-[2]`}>
        <div className='relative flex'>
          <Link href={`/${url}`} className="flex text-[#66b0f0] lg:text-xl w-fit">
              <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20} className="xl:pt-1"/>{title}
          </Link>
          <div className='absolute w-full mx-32 left-0 z-1'>
            <p className={` ${scroll ? 'block' : 'hidden'} mx-auto w-fit transition duration-500 ease-in-out`}>{heading}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Crumbs;