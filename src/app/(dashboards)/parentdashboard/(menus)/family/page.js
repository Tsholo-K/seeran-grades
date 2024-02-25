import Image from "next/image";
import Link from "next/link";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/pageheading";


const ChildMenu = ({ child, bottom_border=false }) => {
  return (
    <>
      <Link href={`/parentdashboard/family/${child.student_number}`} className="flex py-2 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
        <Image priority src={`/${child.image}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-16 max-w-16" />
        <div className="pt-3 w-full">
            <p className="font-bold">{child.name.charAt(0).toUpperCase() + child.name.slice(1)} {child.surname.charAt(0).toUpperCase() + child.surname.slice(1)}</p>
            <p className="text-sm text-gray-500">grade: {child.grade}</p>
        </div>
        <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit pt-5"/>
      </Link>
      {
        bottom_border && <hr className="mx-5"></hr>
      }
    </>
  )
}

const Family = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      {/* back link */}
      <Crumbs title={'dashboard'} url={`parentdashboard`} hide={true}/>
      {/* page heading */}
      <PageHeading title={'Family'} subheading={'these are all the children linked to your account'}/>
      {/* children menu */}
      <div className="rounded-xl bg-white">
        { data.students.map( (child, index) => (
          <>
            {
              ( data.students.length > 1  &&  index !== data.students.length - 1) 
                ? <ChildMenu child={child} bottom_border={true}/>
                : <ChildMenu child={child}/>
            }
          </>
        ))
        }
      </div>
    </div>
  )
};

export default Family;