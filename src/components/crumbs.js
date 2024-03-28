'use client'

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import Link from "next/link";
import Image from "next/image";


const Crumbs = ({ title, url, hide=false, heading, align=true }) => {

  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const ScrollTracker = () => {

    const [scrollY, setScrollY] = useState(window.scrollY);

    useEffect(() => {
      
      const handleScroll = () => {
        setScrollY(window.scrollY);

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

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    console.log(localStorage.getItem('Role'))
    console.log(pathname)
    if ( !pathname.startsWith(`/${localStorage.getItem('Role')}`) ) {
      router.push(`/${localStorage.getItem('Role')}dashboard`);
    }
    setIsClient(true);
    setScroll(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>  
      <ScrollTracker/>
      <div className={`fixed mx-0 top-0 pt-16 w-full max-w-5xl  pb-1 bg-gray-100 z-[2]`}>
        <div className='relative flex'>
            
            <Link href={`/${url}`} className={`flex ${hide && 'lg:hidden'  } text-[#66b0f0] lg:text-xl w-fit`}>
              <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20} className="xl:pt-1"/>
              {title}
            </Link>
          <div className='absolute right-7 lg:hidden 2xl:block'>
            <p className={` ${scroll ? 'block' : 'hidden'} lg:text-xl text-[#66b0f0] w-fit transition-all duration-1000 ease-in-out`}>{heading}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Crumbs;