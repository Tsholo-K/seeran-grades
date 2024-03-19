// components
import PageHeading from '@/components/(general components)/pageheading';
import Crumbs from '@/components/crumbs';
import GradeCreationFrom from '@/components/(forms)/gradecreationform';


const AccountCreation = () => {

  return (
    <div>
      <Crumbs title={'all grades'} url={`admindashboard/console/grades`} heading={`grade creation`} />
      <PageHeading title={`Add Grade`} subheading={`grade creation`}/>
      <GradeCreationFrom/>
      <p className='text-sm text-gray-400 text-center pt-1'></p>
    </div>
  )
};

export default AccountCreation;