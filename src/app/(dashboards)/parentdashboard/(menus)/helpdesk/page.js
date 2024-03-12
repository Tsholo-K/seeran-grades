import Aligner from "@/components/(general components)/aligner"
import MultipleMenuLinks from "@/components/(general components)/multiplemenulinks"
import PageHeading from "@/components/(general components)/pageheading"
import Crumbs from "@/components/crumbs"


const Menu = {
  section : [
    {
      title: 'Help',
      icon: 'headset',
      url: '/parentdashboard/helpdesk/help'
    },
    {
      title: 'Complaint',
      icon: 'badge-alert',
      url: '/parentdashboard/helpdesk/complaint'
    }
  ]
}

const page = () => {
  return (
    <div>
      <Aligner/>
      <Crumbs title={'dashboard'} url={'parentdashboard'} />
      <PageHeading title={`Help desk`} />
      <div className="w-fit pt-7 pb-16 mx-auto">
      <p className="text-center text-gray-500">School Name & logo</p>
      </div>
      <MultipleMenuLinks menu={Menu} />
    </div>
  )
}

export default page