import MultipleMenuLinks from "@/components/(general components)/multiplemenulinks"
import PageHeading from "@/components/(general components)/pageheading"
import Crumbs from "@/components/crumbs"


const menuitems = [
    {
      section : [
        {
          title: 'Admins',
          icon: 'admins',
          url: '/admindashboard/console/admins',
        }
      ]
    },
    {
      section : [
        {
          title: 'Teachers',
          icon: 'user-round-blue',
          url: '/admindashboard/console/teachers',
        }
      ]
    },
    {
      section : [
        {
          title: 'Students',
          icon: 'users',
          url: '/admindashboard/console/students',
        }
      ]
    },
    {
      section : [
        {
          title: 'Grades',
          icon: 'grades',
          url: '/admindashboard/console/grades',
        }
      ]
    }
]

const page = () => {
  return (
    <div>
        <Crumbs title={'dashboard'} url={'admindashboard'} hide={true} heading={`console`}/>
        <PageHeading title={`Console`} subheading={`accounts management`}/>
        {
          menuitems.map( ( item,index ) => (
            <>
              <MultipleMenuLinks key={index} menu={item} />
            </>
          ))
        }
    </div>
  )
}

export default page