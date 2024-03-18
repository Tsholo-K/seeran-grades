// dummy data
import data from '@/app/(dashboards)/dummydata.json';

import MultipleMenuLinks from "../(general components)/multiplemenulinks";
import AccountMenu from "./accountmenu";


const studentdashboardmenulinks = [
    {
      section : [
        {
          title: 'Classes',
          icon: 'classes',
          url: '/studentdashboard/classes',
        },
        {
          title: 'Timetable',
          icon: 'time-table',
          url: '/studentdashboard/timetable',
        }
      ]
    },
    {
      section : [
        {
          title: 'Achievements',
          icon: 'award',
          url: '/studentdashboard/achievements',
        },
      ]
    },
    {
      section : [
        {
          title: 'Messages',
          icon: 'admin',
          url: '/studentdashboard/messages',
        },
        {
          title: 'Notifications',
          icon: 'bell-ring',
          url: '/studentdashboard/notifications',
        },
      ]
    },
    {
      section : [
        {
          title: 'Settings',
          icon: 'settings',
          url : '/studentdashboard/settings'
        }
      ]
    }
]

const Studentdashboard = () => {
  return (
    <div>
      {/* profile settings */}
      <AccountMenu dashboard={`student`} user={data.students[0]}/>
      {/* menu links */}
      {
        studentdashboardmenulinks.map( ( item,index ) => (
          <>
            <MultipleMenuLinks key={index} menu={item} />
          </>
        ))
      }
    </div>
  )
};

export default Studentdashboard;