// dummy data
import data from '@/app/(dashboards)/dummydata.json';

import MultipleMenuLinks from "../(general components)/multiplemenulinks";
import AccountMenu from './accountmenu';


const parentdashboardmenulinks = [
    {
      section : [
        {
          title: 'Family',
          icon: 'family',
          url: '/parentdashboard/family',
        }
      ]
    },
    {
      section : [
        
        {
          title: 'Activities',
          icon: 'eye',
          url: '/parentdashboard/activities',
        },
        {
          title: 'Attendance',
          icon: 'calendar-days',
          url: '/parentdashboard/attendance',
        }
      ]
    },
    {
      section : [
        {
          title: 'Messages',
          icon: 'admin',
          url: '/parentdashboard/messages',
        },
        {
          title: 'Notifications',
          icon: 'bell-ring',
          url: '/parentdashboard/notifications',
        },
        {
          title: 'Fees',
          icon: 'wallet',
          url: '/parentdashboard/fees',
        },
        {
          title: 'Help Desk',
          icon: 'help-desk',
          url: '/parentdashboard/helpdesk',
        }
      ]
    },
    {
      section : [
        {
          title: 'Settings',
          icon: 'settings',
          url : '/parentdashboard/settings'
        }
      ]
    }
]

const Parentdashboard = () => {

  return (
    <div>
      {/* profile settings */}
      <AccountMenu dashboard={`parent`} user={data.parents[0]}/>
      {/* menu links */}
      {
        parentdashboardmenulinks.map( ( item,index ) => (
          <>
            <MultipleMenuLinks key={index} menu={item} />
          </>
        ))
      }
    </div>
  )
};

export default Parentdashboard;