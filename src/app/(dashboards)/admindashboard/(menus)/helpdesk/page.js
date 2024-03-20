import Aligner from "@/components/(general components)/aligner"
import PageHeading from "@/components/(general components)/pageheading"
import Notifications from "@/components/(notifications components)/notifications"
import Crumbs from "@/components/crumbs"


const page = () => {
  return (
    <div>
      <Aligner/>
      <Crumbs title={'dashboard'} url={'admindashboard'}hide={true} />
      <PageHeading title={`Complaints`} subheading={`parent complaints`} />
      <p className="text-sm text-gray-400 pl-2 pb-2">complaints</p>
      <Notifications dashboard={'admin'} section="announcements" subject_line={'Sports'} first_sentance={"my son got hurt will doing spo..."}/>
    </div>
  )
}

export default page