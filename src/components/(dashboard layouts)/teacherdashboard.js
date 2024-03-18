// dummy data
import data from '@/app/(dashboards)/dummydata.json'

import MultipleMenuLinks from "../(general components)/multiplemenulinks";
import AccountMenu from './accountmenu';


const teacherdashboardmenulinks = [
  {
    section : [
      {
        title: 'Performance',
        icon: 'performance',
        url: '/teacherdashboard/performance',
      }
    ]
  },
  {
    section : [
      {
        title: 'Classes',
        icon: 'classes',
        url: '/teacherdashboard/classes',
      },
      {
        title: 'Register Class',
        icon: 'register-class',
        url: '/teacherdashboard/registerclass',
      },
      {
        title: 'Timetable',
        icon: 'time-table',
        url: '/teacherdashboard/timetable',
      }
    ]
  },
  {
    section : [
      {
        title: 'Messages',
        icon: 'admin',
        url: '/teacherdashboard/messages',
      },
      {
        title: 'Notifications',
        icon: 'bell-ring',
        url: '/teacherdashboard/notifications',
      }
    ]
  },
  {
    section : [
      {
        title: 'Settings',
        icon: 'settings',
        url: '/teacherdashboard/settings',
      }
    ]
  }
]

const Teacherdashboard = () => {

  return (
    <div className="w-full h-full relative">
      {/* profile settings */}
      <AccountMenu dashboard={`teacher`} user={data.teachers[0]}/>
      {/* menu links */}
      {
        teacherdashboardmenulinks.map( ( item,index ) => (
          <>
            <MultipleMenuLinks key={index} menu={item} />
          </>
        ))
      }
    </div>
  )
};

export default Teacherdashboard;