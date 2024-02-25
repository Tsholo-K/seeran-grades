'use client'

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";

const RemoveChild = () => {

  const params = useParams();
  const student_id = params.child_id

  let student = ''
  data.students.forEach( child => {
    if ( child.student_number === student_id ) {
      student = child
    }
  });
  
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <Crumbs url={`parentdashboard/family/${student.student_number}`} title={'child id'}/>
      <div className="fixed top-0 pt-16 pb-1 w-full bg-gray-100">
        <Link href={`/`} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/></Link>
      </div>
      {/* page heading */}
      <div>
        <h1 className="w-full text-center pb-3 text-4xl">Remove Child</h1>
      </div>
      {/* child id */}
      <div className="w-fit my-7 mx-auto">
          <div className="mx-auto w-fit pb-4">
              <Image priority src={`/${student.image}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-40 max-w-40" />
          </div>
          <h2 className="w-full text-center text-2xl">{student.name.charAt(0).toUpperCase() + student.name.slice(1)} {student.surname.charAt(0).toUpperCase() + student.surname.slice(1)}</h2>
      </div>
      <p className="text-center text-gray-400 text-sm w-[90%] mx-auto mb-24">
        you are about to remove this child from your account, to reverse this you&apos;d need to go to school to have it relinked
      </p>
      {/* button */}
      <button type="submit" className="w-full border border-white rounded-xl bg-black active:bg-red-500 mt-7 text-white lg:hover:bg-blue-700 focus:bg-blue-700 lg:hover:scale-[1.01] transition-all duration-500 py-1">confirm</button>
      <p className="text-center text-red-500 text-sm w-[90%] mx-auto mb-24">
        this cannot be reversed on the platform
      </p>
    </div>
  )
}

export default RemoveChild;