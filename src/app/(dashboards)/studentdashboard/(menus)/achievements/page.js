'use client'

// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components 
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Achievements from "@/components/(achievements components)/achievements";
import Aligner from '@/components/(general components)/aligner';


const AchievementsPage = () => {

  let children = []

  data.parents[0].children.forEach( child_id => {
    data.students.forEach( child => {
      if ( child.id === child_id ) {
      children.push(child)
      }
    });
  });

  let achievements = []
  children.forEach( child => {
    data.achievements.forEach( achievement => {
      if ( achievement.student === child.id ) {
        achievements.push(achievement)
      }
    });
  });

  return (
    <div>
      <Aligner/>
      <Crumbs url={`studentdashboard`} title={`dashboard`} hide={true} heading={`Achievements`}/>
      {/* page heading */}
      <PageHeading title={'Achievements'} subheading={'granted achievements'} />
      {/* achievements */}
      <Achievements achievements={achievements} dashboard={`student`} section={`achievements`} student={true} />      
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto py-10">all caught up..</p>
    </div>
  )
};

export default AchievementsPage;