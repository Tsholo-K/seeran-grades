'use client'

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(menus)/dummydata.json'


const Menus = {
  name : {
    title: 'Name',
    icon: false,
  },
  surname : {
    title: 'Surname',
    icon: false,
  },
  dateofbirth : {
    title: 'Date of birth',
    icon: false,
  },
  grade : {
    title: 'Grade',
    icon: false,
  },
  studentnumber : {
    title: 'Student Number',
    icon: false,
  },
  removechild : {
    title: 'Remove Child From Account',
    icon: true,
  },
};

const MenuLink = ({ Menu, student_info=null }) => {
  return (
    <div className="relative flex py-3 gap-1 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p>{Menu.title}</p>
      <p className="text-gray-400 absolute right-4">{student_info}</p>
      {Menu.icon 
        ? (<Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit absolute right-3"/>)
        : null
      }
    </div>
  )
}


const ChildId = () => {

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
      <div className="fixed top-0 pt-16 pb-1 w-full bg-gray-100">
        <Link href={'/family'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>family</Link>
      </div>
      {/* page heading */}
      <div>
        <h1 className="w-full text-center pb-3 text-4xl">ID</h1>
      </div>
      {/* child id */}
      <div className="w-fit my-7 mx-auto">
          <div className="mx-auto w-fit pb-4">
              <Image priority src={`/${student.image}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-40 max-w-40" />
          </div>
          <h2 className="w-full text-center text-2xl">{student.name.charAt(0).toUpperCase() + student.name.slice(1)} {student.surname.charAt(0).toUpperCase() + student.surname.slice(1)}</h2>
      </div>
      {/* child information */}
      <div className="rounded-xl bg-white">
        <MenuLink Menu={Menus.dateofbirth} student_info={student.date_of_birth}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menus.grade} student_info={student.grade}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menus.studentnumber} student_info={student.student_number}/>
      </div>
      {/* remove child */}
      <Link href={`/family/${student.student_number}/remove`} className="rounded-xl bg-white text-red-500 mt-10">
        <MenuLink Menu={Menus.removechild}/>
      </Link>
      <p className="text-center text-gray-400 text-sm w-[90%] mx-auto mb-24">to reverse this you&apos;d need to go to school to have it relinked</p>
    </div>
  )
}

export default ChildId;