// dummy data
import data from '@/app/(dashboards)/dummydata.json'

// components 
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Achievements from "@/components/(achievements components)/achievements";


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
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <Crumbs url={`parentdashboard`} title={`dashboard`} hide={true}/>
      {/* page heading */}
      <PageHeading title={'Achievements'} subheading={'granted achievements'} />
      {/* achievements */}
      <Achievements achievements={achievements} />      
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto py-10">all caught up..</p>
    </div>
  )
};

export default AchievementsPage;