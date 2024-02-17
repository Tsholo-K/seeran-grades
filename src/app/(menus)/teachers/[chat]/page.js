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
      <div className="flex top-16 w-full fixed">
        <Link href={'/teachers'}  className="flex text-blue-700">
            <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>
            <p className="grid grid-cols-1 place-content-center">3</p>
        </Link>
        <div className="flex w-full justify-center">
          <div className="flex gap-3">
            <Image priority src={'/profile-icon-1.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-8 max-w-8" />
            <Link href={'/teachers/teacher/id'} className=" w-full font-bold pt-1 text-black">Surname Name</Link>
          </div>
        </div>
      </div>
      <div className="fixed w-full bottom-0 left-0">
          <div className="w-full flex justify-center gap-3 px-3 py-2">
              <input type="text" className="w-full  border-[1px] p-1 border-gray-300 rounded-full bg-white" />
              <Image src={'/send-horizontal.svg'} alt='back to main menu' height={26} width={26}/>
          </div>
      </div>
        
    </div>
  )
};

export default Teachers;