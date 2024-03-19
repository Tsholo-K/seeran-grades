// dummy data
import data from '@/app/(dashboards)/dummydata.json';

import MultipleMenuLinks from "../(general components)/multiplemenulinks";
import AccountMenu from "./accountmenu";


const admindashboardmenulinks = [ 
  {
    section : [
      {
        title: 'Admin Console',
        icon: 'management',
        url: '/admindashboard/console',
      },
      {
        title: 'Fees',
        icon: 'wallet',
        url: '/admindashboard/fees',
      }
    ]
  },
  {
    section : [
      {
        title: 'Announcements',
        icon: 'megaphone',
        url: '/admindashboard/announcements',
      },
      {
        title: 'Messages',
        icon: 'admin',
        url: '/admindashboard/helpdesk',
      },
      {
        title: 'Complaints',
        icon: 'mailbox',
        url: '/admindashboard/helpdesk',
      }
    ]
  },
  {
    section : [
      {
        title: 'Settings',
        icon: 'settings',
        url : '/admindashboard/settings'
      }
    ]
  }
]

const Admindashboard = () => {
  return (
    <div>
      {/* profile settings */}
      <AccountMenu dashboard={`admin`} user={data.admins[0]}/>
      {/* menu links */}
      {
        admindashboardmenulinks.map( ( item,index ) => (
          <>
            <MultipleMenuLinks key={index} menu={item} />
          </>
        ))
      }
    </div>
  )
};

export default Admindashboard;