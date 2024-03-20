'use client';

import { useParams } from "next/navigation";

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

//components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import UserMenu from '@/components/(general components)/usermenu';
import SearchComponent from '@/components/(general components)/searchcomponent';
import SingleMenuLink from "@/components/(general components)/signlemenulink";


const Children = ({ searchParams, }) => {

  const query = searchParams?.query || '';

  let students = []
  if ( query === '' ) {
    students = data.students
  } else {
    data.students.forEach( stu => {
      if( stu.name.includes(query.toLowerCase()) || stu.surname.includes(query.toLowerCase()) || stu.id.includes(query) ) {
        students.push(stu)
      }
    });
  }

  const params = useParams();
  const grade = params.grade

  return (
    <div>
      <Crumbs title={'all grades'} url={'admindashboard/fees'} heading={`balances`}/>
      <PageHeading title={'Students'} subheading={`grade ${grade} balances`} />
      <SingleMenuLink title={`Fee Structure`} url={`/admindashboard/fees/${grade}/structure`} icon={`fee-structure`} border={true}/>
      <SearchComponent/>
      <p className='py-3 pl-2 text-sm text-gray-400'>students</p>
      <div className="rounded-xl bg-white">
        <UserMenu  all_users={students} dashboard={'admin'} section={`fees/${grade}`}/>
      </div>
    </div>
  )
};

export default Children;