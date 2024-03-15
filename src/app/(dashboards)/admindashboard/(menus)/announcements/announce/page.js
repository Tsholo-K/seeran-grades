'use client'

import { useEffect } from "react";

// components
import Crumbs from "@/components/crumbs";
import Aligner from "@/components/(general components)/aligner";
import PageHeading from "@/components/(general components)/pageheading";
import InputArea from "@/components/(general components)/inputarea";
import Button from "@/components/(general components)/button";


const Notifications = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Aligner/>
      <Crumbs title={'notifications'} url={'admindashboard/announcements'} />
      <PageHeading title={`Announce `} subheading={`school wide notification`} />
      <InputArea type={`text`} title={`announcement title`}/>
      <p className="text-sm text-gray-400 pl-2 pt-2 pb-2">message</p>
      <textarea className="rounded-xl w-full h-40 mb-4 px-3 py-2" />
      <Button title={`announce`} />
    </div>
  ) 
};

export default Notifications;