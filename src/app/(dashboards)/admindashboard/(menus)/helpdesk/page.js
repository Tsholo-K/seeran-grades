import Aligner from "@/components/(general components)/aligner"
import PageHeading from "@/components/(general components)/pageheading"
import Crumbs from "@/components/crumbs"


const page = () => {
  return (
    <div>
      <Aligner/>
      <Crumbs title={'dashboard'} url={'admindashboard'}hide={true} />
      <PageHeading title={`Complaints`} subheading={`parent complaints`} />
      <p className="text-sm text-gray-400 pl-2 pb-2">complaints</p>
    </div>
  )
}

export default page