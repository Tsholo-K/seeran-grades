// components
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import SchoolSettingsFrom from "@/components/(forms)/schoolsettingsform";


const SchoolSettings = () => {

  return (
    <div>
      {/* back link */}
      <Crumbs title={'profile settings'} url={`admindashboard/profile`} />
      {/* page heading */}
      <PageHeading title={'Settings'} />
      {/* personal infomation */}
      <SchoolSettingsFrom />
    </div>
  )
};

export default SchoolSettings;
