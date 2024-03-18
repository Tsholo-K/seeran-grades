'use client'

import { useParams } from "next/navigation";

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import SingleMenuLink from "@/components/(general components)/signlemenulink";
import Subject from "@/components/(general components)/subject";
import Link from "next/link";


const MyPerformance = ({}) => {

  const params = useParams();
  const grade = params.grade

  const menulinks = [
    {
      title: "Mathematics",
      icon: "maths",
      code: "mathematics"
    },
    {
      title: "Physical Science",
      icon: "physics",
      code: "physical-science"
    },
    {
      title: "Life science",
      icon: "life-science",
      code: "life-science"
    },
    {
      title: "English",
      icon: "language",
      code: "english"
    }
  ]

  return (
    <div className="w-full">
      <Crumbs url={`admindashboard/console/grades`} title={'grades'} heading={`grade ${grade}`}/>
      {/* page heading */}
      <PageHeading title={`Grade ${grade}`} subheading={``}/>
      <SingleMenuLink title={`Register Classes`} border={true} url={`admindashboard/console/grades/${grade}/registerclasses`}/>
      <p className="pt-8 mt-6 text-center text-sm text-gray-400 pb-1 ">classes by subjects</p>
      {
        menulinks.map( (link, index) => (
          <div key={index}>
            <Link href={`/admindashboard/console/grades/${grade}/${link.code}`}>
              <Subject subject={`${link.title}`} icon={`${link.icon}`}/>
            </Link>
          </div>
        ))
      }
      <p className=" text-sm w-[80%] text-gray-400 text-center mx-auto py-10">that&apos;s all subjects</p>
    </div>
  )
};

export default MyPerformance;