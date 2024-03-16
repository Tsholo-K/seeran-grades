'use client'

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import UserImage from "@/components/(general components)/userimage";
import Button from "@/components/(general components)/button";
import Aligner from "@/components/(general components)/aligner";

const RemoveChild = () => {

  const params = useParams();
  const admin_id = params.admin

  let admin 
  data.admins.forEach( teach => {
    if ( teach.id === admin_id ) {
      admin = teach
    }
  });
  
  return (
    <div>
      <Aligner/>
      <Crumbs url={`admindashboard/console/admins/profile/${admin_id}`} title={'admin profile'} heading={`remove admin`}/>
      {/* page heading */}
      <div className="lg:hidden">
        <PageHeading title={'Remove Admin'} />
      </div>
      {/* child id */}
      <UserImage image={`${admin.image}`} name={admin.name} surname={admin.surname} />
      <p className="text-center text-gray-400 text-sm w-[90%] mx-auto mb-10">you are about to remove this admin from your account</p>
      {/* button */}
      <Button title={'confirm'} type={'submit'} />
    </div>
  )
}

export default RemoveChild;