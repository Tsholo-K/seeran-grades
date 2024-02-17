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

const Achievements = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <div className="fixed top-0 pt-16 w-full pb-1 bg-gray-100 z-10">
        <Link href={'/parentdashboard'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>dashboard</Link>
      </div>
      <div >
          <h1 className="w-full text-center pb-10 pt-10 text-4xl z-0">Logs</h1>
      </div>
      {/* accounts section */}
      <div className="py-4 z-0">
        <div className="flex pl-2">
          <Image src={'/cctv.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
          <p className=" text-sm pl-2 pb-2 text-gray-500">name</p>
        </div>
        <div className="border rounded-xl bg-white py-1">
          <div>
            <p className="text-sm text-gray-500 pt-1 w-full text-center">disruption of class</p>
          </div>
          <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
              <Image priority src={'/speech.svg'} alt="profile icon" width={30} height={30} className="h-8 w-8" />
          </div>
          <div className="flex w-full pl-3 pt-2 relative">
            <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
            <p className=" text-sm pl-2 pb-2 text-gray-500">Logged:  tuesday, 7 febuary</p>
          </div>
        </div>
      </div>
      <div className="py-4 z-0">
        <div className="flex pl-2">
          <Image src={'/cctv.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
          <p className=" text-sm pl-2 pb-2 text-gray-500">name</p>
        </div>
        <div className="border rounded-xl bg-white py-1">
          <div>
            <p className="text-sm text-gray-500 pt-1 w-full text-center">late for school</p>
          </div>
          <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
              <Image priority src={'/bell-electric.svg'} alt="profile icon" width={30} height={30} className="h-8 w-8" />
          </div>
          <div className="flex w-full pl-3 pt-2 relative">
            <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
            <p className=" text-sm pl-2 pb-2 text-gray-500">Logged:  tuesday, 15 febuary</p>
          </div>
        </div>
      </div>
      <div className="py-4 z-0">
        <div className="flex pl-2">
          <Image src={'/cctv.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
          <p className=" text-sm pl-2 pb-2 text-gray-500">name</p>
        </div>
        <div className="border rounded-xl bg-white py-1">
          <div>
            <p className="text-sm text-gray-500 pt-1 w-full text-center">homework not done</p>
          </div>
          <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
              <Image priority src={'/book-x.svg'} alt="profile icon" width={30} height={30} className="h-8 w-8" />
          </div>
          <div className="flex w-full pl-3 pt-2 relative">
            <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
            <p className=" text-sm pl-2 pb-2 text-gray-500">Logged:  monday, 12 febuary</p>
          </div>
        </div>
      </div>
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto pt-2">all caught up..</p>
    </div>
  )
};

export default Achievements;