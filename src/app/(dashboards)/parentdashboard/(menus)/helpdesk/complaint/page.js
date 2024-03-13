import Aligner from "@/components/(general components)/aligner"
import PageHeading from "@/components/(general components)/pageheading"
import SingleMenuLink from "@/components/(general components)/signlemenulink"
import Crumbs from "@/components/crumbs"


const page = () => {

  const complaints = null

  return (
    <div>
      <Aligner/>
      <Crumbs title={'help desk'} url={'parentdashboard/helpdesk'} heading={`complaints`}/>
      <PageHeading title={`Complaints`} subheading={`all complaints`} />
      <SingleMenuLink title={'Log complaint'} icon={'mailbox'} border={true} url={`/parentdashboard/helpdesk/complaint/log`}/>
      <p className="pl-2 text-sm text-gray-400 pt-8 pb-1">complaints</p>
      {
        complaints 
        ? null 
        :
        <p className="pl-2 text-sm text-center text-gray-400 pt-8 pb-1">no complaints</p>
      }
    </div>
  )
}

export default page