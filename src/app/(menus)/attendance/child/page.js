import Image from "next/image"
import Link from "next/link"


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
}

const MenuLink = ({Menu}) => {
  return (
    <div className="flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <Image src={`/${Menu.icon}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
      <p className={`w-full`}>{Menu.title}</p>
      <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
    </div>
  )
}

const page = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <div className="fixed top-0 pt-16 w-full pb-1 bg-gray-100">
        <Link href={'/attendance'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>children</Link>
      </div>
      <div >
          <h1 className="w-full text-center pb-16 pt-10 text-4xl">Attendance</h1>
      </div>
      {/* counter section */}
      <div className="w-full pb-10">
        <div className="mx-auto w-fit">
          <p className="bg-blue-700 text-center w-24 h-24 text-white rounded-full pt-6 text-5xl">5</p>
        </div>
        <p className="w-full text-center pt-3 text-gray-500 text-sm">days absent so far..</p>
      </div>
      <Link href={'/profile'} className="flex relative py-3 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
        <div className="absolute top-6 left-0 text-center rounded-full text-white">
          <Image src={'/alert-circle.svg'} alt='try it button' width={10} height={10} className="w-6 m-0"/>
        </div>
        <div className="pl-5 w-full">
          <p className="font-bold">tuesday, 21 febuary</p>
          <p className="text-sm text-gray-500">febuary</p>
        </div>
        <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-4 m-0"/>
      </Link>
      <Link href={'/profile'} className="flex relative py-3 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
        <div className="absolute top-6 left-0 text-center rounded-full text-white">
          <Image src={'/alert-circle.svg'} alt='try it button' width={10} height={10} className="w-6 m-0"/>
        </div>
        <div className="pl-5 w-full">
          <p className="font-bold">thursday, 12 febuary</p>
          <p className="text-sm text-gray-500">febuary</p>
        </div>
        <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-4 m-0"/>
      </Link>
      <Link href={'/profile'} className="flex relative py-3 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
        <div className="absolute top-6 left-0 text-center rounded-full text-white">
          <Image src={'/alert-circle.svg'} alt='try it button' width={10} height={10} className="w-6 m-0"/>
        </div>
        <div className="pl-5 w-full">
          <p className="font-bold">monday, 10 febuary</p>
          <p className="text-sm text-gray-500">febuary</p>
        </div>
        <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-4 m-0"/>
      </Link>
      <Link href={'/profile'} className="flex relative py-3 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
        <div className="absolute top-6 left-0 text-center rounded-full text-white">
          <Image src={'/alert-circle.svg'} alt='try it button' width={10} height={10} className="w-6 m-0"/>
        </div>
        <div className="pl-5 w-full">
          <p className="font-bold">friday, 8 febuary</p>
          <p className="text-sm text-gray-500">febuary</p>
        </div>
        <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-4 m-0"/>
      </Link>
      <Link href={'/profile'} className="flex relative py-3 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
        <div className="absolute top-6 left-0 text-center rounded-full text-white">
          <Image src={'/alert-circle.svg'} alt='try it button' width={10} height={10} className="w-6 m-0"/>
        </div>
        <div className="pl-5 w-full">
          <p className="font-bold">thursday, 2 febuary</p>
          <p className="text-sm text-gray-500">febuary</p>
        </div>
        <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-4 m-0"/>
      </Link>
    </div>
  )
}

export default page