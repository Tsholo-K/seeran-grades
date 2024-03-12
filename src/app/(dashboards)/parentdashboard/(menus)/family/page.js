// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import UserMenu from '@/components/(general components)/childmenu';
import MultipleMenuLinks from '@/components/(general components)/multiplemenulinks';
import SingleMenuLink from '@/components/(general components)/signlemenulink';
import Aligner from '@/components/(general components)/aligner';


const menuitems = [
  {
    section : [
      {
        title: 'Grades',
        icon: 'graduation-cap',
        url: '/parentdashboard/family/grades',
      },
      {
        title: 'Assessments',
        icon: 'calendar-clock',
        url: '/parentdashboard/family/assessments',
      },
      {
        title: 'Achievements',
        icon: 'award',
        url: '/parentdashboard/family/achievements',
      }
    ]
  },
]

const Family = () => {

  let children = []

  data.parents[0].children.forEach( child_id => {
    data.students.forEach( child => {
      if ( child.id === child_id ) {
      children.push(child)
      }
    });
  });
  
  return (
    <div>
      <Aligner/>
      <Crumbs title={'dashboard'} url={`parentdashboard`} hide={true}/>
      <PageHeading title={'Family'} subheading={'monitor academics'}/>
      <p className='py-4'></p>
      <SingleMenuLink title={`Children`} url={`/parentdashboard/family/children`} icon={`users`}  border={true} />
      <p className='py-7'></p>
      {
        menuitems.map( ( item,index ) => (
          <>
            <MultipleMenuLinks key={index} menu={item} />
          </>
        ))
      }
    </div>
  )
};

export default Family;