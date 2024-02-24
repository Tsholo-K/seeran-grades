'use client'

import Link from "next/link";
import Image from "next/image";


const Crumbs = ({ title, url, hide=false }) => {
  return (
    <>
        <div className={`fixed ${ hide ? 'lg:hidden' : ''} top-0 pt-16 w-full pb-1 bg-gray-100 z-[2]`}>
            <Link href={`/${url}`} className="flex w-full text-blue-700">
                <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>{title}
            </Link>
        </div>
    </>
    
  )
}

export default Crumbs;