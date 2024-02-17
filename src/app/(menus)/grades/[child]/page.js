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

const Grades = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <div className="fixed top-0 pt-16 w-full pb-1 bg-gray-100">
        <Link href={'/grades'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>grades</Link>
      </div>
      <div >
          <h1 className="w-full text-center pb-10 pt-10 text-4xl">Transcripts</h1>
      </div>
      {/* accounts section */}
      <div className="py-4">
        <div className="flex pl-2">
          <Image src={'/pencil-line.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
          <p className=" text-sm pl-2 pb-2 text-gray-500">name</p>
        </div>
        <Link href={'/grades/child-1/test'}>
          <div className="relative border rounded-xl bg-white py-1" >
            <Image src={'/grades-ready-okay.svg'} alt='try it button' width={10} height={10} className="absolute w-fit h-fit top-2 right-3"/>
            <div>
              <p className="text-sm text-gray-500 pt-1 w-full text-center">test</p>
            </div>
            <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
                <Image priority src={'/life-science.svg'} alt="profile icon" width={30} height={30} className="h-8 w-8" />
                <div className="pt-1 pl-2">
                    <p>Life Science</p>
                </div>
            </div>
            <div className="flex pl-3 pt-2">
              <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
              <p className=" text-sm pl-2 pb-2 text-gray-500">written : tuesday, 7 febuary</p>
              <p className=" text-sm pl-2 pb-2 text-gray-500"></p>
            </div>
          </div>
        </Link>
      </div>
      <div className="py-4">
        <div className="flex pl-2">
          <Image src={'/pencil-line.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
          <p className=" text-sm pl-2 pb-2 text-gray-500">name</p>
        </div>
        <Link href={'/grades/child-1/test'}>
          <div className="relative border rounded-xl bg-white py-1">
              <Image src={'/grades-ready-okay.svg'} alt='try it button' width={10} height={10} className="absolute w-fit h-fit top-2 right-3"/>
            <div>
              <p className="text-sm text-gray-500 pt-1 w-full text-center">exam</p>
            </div>
            <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
                <Image priority src={'/maths.svg'} alt="profile icon" width={30} height={30} className="h-8 w-8" />
                <div className="pt-1 pl-2">
                    <p>Mathematics</p>
                </div>
            </div>
            <div className="flex pl-3 pt-2">
              <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
              <p className=" text-sm pl-2 pb-2 text-gray-500">written : monday, 26 january</p>
              <p className=" text-sm pl-2 pb-2 text-gray-500"></p>
            </div>
          </div>
        </Link>   
      </div>
      <div className="py-4">
        <div className="flex pl-2">
          <Image src={'/pencil-line.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
          <p className=" text-sm pl-2 pb-2 text-gray-500">name</p>
        </div>
        <Link href={'/grades/child-1/test'}>
          <div className="relative border rounded-xl bg-white py-1">
              <Image src={'/grades-ready-passed.svg'} alt='try it button' width={10} height={10} className="absolute w-fit h-fit top-2 right-3"/>
            <div>
              <p className="text-sm text-gray-500 pt-1 w-full text-center">assignment</p>
            </div>
            <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
                <Image priority src={'/physics.svg'} alt="profile icon" width={30} height={30} className="h-8 w-8" />
                <div className="pt-1 pl-2">
                    <p>Physical Sciences</p>
                </div>
            </div>
            <div className="flex pl-3 pt-2">
              <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
              <p className=" text-sm pl-2 pb-2 text-gray-500">written : thursday, 21 january</p>
              <p className=" text-sm pl-2 pb-2 text-gray-500"></p>
            </div>
          </div>
        </Link>
      </div>
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto pt-2">all caught up..</p>
    </div>
  )
};

export default Grades;