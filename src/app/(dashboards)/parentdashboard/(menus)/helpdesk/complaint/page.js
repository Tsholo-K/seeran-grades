import Aligner from "@/components/(general components)/aligner"
import PageHeading from "@/components/(general components)/pageheading"
import Crumbs from "@/components/crumbs"


const page = () => {
  return (
    <div>
      <Aligner/>
      <Crumbs title={'dashboard'} url={'parentdashboard/helpdesk'} />
      <PageHeading title={`Help desk`} />
      <div className="w-fit pt-7 pb-16 mx-auto">
        <p className="text-center text-gray-500">School Name & logo</p>
      </div>
    </div>
  )
}

export default page