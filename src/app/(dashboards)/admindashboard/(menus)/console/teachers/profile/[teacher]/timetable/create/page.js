'use client'

import { useParams } from "next/navigation";
import { useState } from "react";

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Aligner from "@/components/(general components)/aligner";
import Periods from "@/components/(timetable components)/periods";
import Button from "@/components/(general components)/button";
import Image from "next/image";


const TimeTable = () => {

    const params = useParams();
    const teacher_id = params.teacher

    let [period, setPeriod] = useState(1)

    function addPeriod() {
        setPeriod(period + 1)
        const app = document.getElementById('periods');
        const session = document.createElement('div');
        session.innerHTML =  
            `   
                <hr style='margin:30px 0'></hr>
                <p style='text-align:center; margin:30px 0 20px 0; color:gray'>session ${period}</p>
                <p style='padding-left:6px; margin-top:10px; color:gray' >from : </p>
                <input id='' type='text' style='width:100%; padding:0 10px; height:32px; border-radius: 20px; background-color:white;'/>
                <p style='padding-left:6px; margin-top:10px; color:gray' >to : </p>
                <input id='' type='text' style='width:100%; height:32px; padding:0 10px; border-radius: 20px; background-color:white;'/>
                <p style='padding-left:6px; margin-top:10px; color:gray' >class : </p>
                <input id='' type='text' style='width:100%; height:32px; padding:0 10px; border-radius: 20px; background-color:white;'/>
                <p style='padding-left:6px; margin-top:10px; color:gray' >classroom : </p>
                <input id='' type='text' style='width:100%; height:32px; padding:0 10px; margin:0 0 30px 0; border-radius: 20px; background-color:white;'/>
            `;
        app.appendChild(session);
    }

    return (
        <div>
            <Aligner/>
            <Crumbs title={`timetable`} url={`admindashboard/console/teachers/profile/${teacher_id}/timetable`} heading={``}/>
            <PageHeading title={`Create `} subheading={`time table`} />
            <button className={`w-full text-center border focus:bg-[#ffcf2e] focus:text-white hover:text-white active:bg-[#ffcf2e] hover:bg-[#ffcf2e] border-white rounded-md bg-[#d0f0e4] text-black transition-all duration-300 py-1`}>save</button>
            <select id="name" className="w-full text-center rounded-xl bg-white h-8 mt-12">
                <option selected disabled >---  Day  ---</option>
                <option >Monday</option>
                <option >Tuesday</option>
                <option >Wednesday</option>
                <option >Thursday</option>
                <option >Friday</option>
                <option >Saturday</option>
                <option >Sunday</option>
            </select>
            <p className="text-sm text-center text-gray-400 w-[95%] mx-auto pt-1">if there&apos;s already a time table for this day it will be overwritten on save</p>
            <p className="pl-2 text-sm text-gray-400 pt-8 pb-1">notice</p>
            <p className="w- full text-center py-3 px-4 bg-white rounded-xl text-gray-500">please use the 24-hour notation in the form hh:mm (for example 01:23)</p>
            <div id="periods" className="mb-8 pt-4">
            </div>
            
            <button onClick={addPeriod} className={`w-full text-center border focus:bg-[#ffcf2e] focus:text-white hover:text-white active:bg-[#ffcf2e] hover:bg-[#ffcf2e] border-white rounded-md bg-[#d0f0e4] text-black transition-all duration-300 py-1`}>add session</button>
        </div>
    )
};

export default TimeTable;