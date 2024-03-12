// dummy data
import data from '@/app/(dashboards)/dummydata.json';
import Aligner from '@/components/(general components)/aligner';

import Button from "@/components/(general components)/button";
import PageHeading from "@/components/(general components)/pageheading";
import Crumbs from "@/components/crumbs";
import Image from "next/image";


const AdminDesk = () => {


    return (
        <div>
            <Aligner/>
            <Crumbs title={'help desk'} url={'parentdashboard/helpdesk'} />
            <PageHeading title={`Admin Desk`} subheading={`get in touch with an admin`}/>
            <p className="text-gray-400 text-sm pl-2 pb-1">admins</p>
            {
                data.admins.map( (admin, index) => (
                    <div key={index} className="bg-white rounded-xl px-3 py-4 mb-8 mt-2">
                        <div className="flex gap-3 pb-3 justify-center">
                            <Image src={'/user-round-blue.svg'} alt='try it button' width={10} height={10}  className={`w-14  lg:w-20`}/>
                            <p className=" text-xl lg:text-2xl text-gray-500 grid grid-cols-1 place-content-center">{admin.name.charAt(0).toUpperCase() + admin.name.slice(1)} {admin.surname.charAt(0).toUpperCase() + admin.surname.slice(1)}</p>
                        </div>
                        <div className="flex pl-3 pt-3 pb-7">
                            <Image src={'/phone.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-8"/>
                            <div className="grid grid-cols-1 place-content-center">
                                <p className="text-sm pl-2 text-gray-500 lg:text-base">contact number : {admin.number}</p>
                            </div>
                        </div>
                        <Button title={`request call`}/>
                    </div>
                ))
            }
        </div>
    )
};

export default AdminDesk;