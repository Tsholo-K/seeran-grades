import Image from "next/image";
import Link from "next/link";


const Menu = {
  personalinformation : {
    title: 'Personal Information',
    icon: 'book-lock',
  },
  signinandsecurity : {
    title: 'Sign-in And Security',
    icon: 'fingerprint',
  },
  signout : {
    title: 'Sign Out',
    icon: 'log-out',
  }
};

const MenuLink = ({Menu}) => {
  return (
    <div className="flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <Image src={`/${Menu.icon}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
      <p className={`w-full`}>{Menu.title}</p>
      <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
    </div>
  )
};

const Teachers = () => {
  return (
    <div className="w-full min-h-full relative">
        <div className="fixed flex top-0 pt-16 w-full pb-1 bg-gray-100">
            <Link href={'/teachers'} className="flex text-blue-700">
            <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>17
            </Link>
        </div>
        <div className="flex fixed top-0 pt-14 w-full justify-center">
            <div className="flex w-fit gap-3 pt-1">
                <Image priority src={'/profile-icon-1.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-8 max-w-8" />
                <div className=" w-full">
                    <p className="font-bold pt-1">Surname Name</p>
                </div>
            </div>
        </div>
        <div className="fixed w-full bottom-0 left-0 mb-3 bg-gray-100 pt-1 pb-3 border-t-[1px] border-gray-200">
            <div className="w-fit flex mx-auto gap-3">
                <input type="text" className="w-fit  border-[1px] border-gray-300 rounded-full bg-white" />
                <Image src={'/send-horizontal.svg'} alt='back to main menu' height={26} width={26}/>
            </div>
        </div>
        
    </div>
  )
};

export default Teachers;