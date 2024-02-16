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

const Children = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <div className="fixed top-0 pt-16 w-full pb-1 bg-gray-100">
        <Link href={'/parentdashboard'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>dashboard</Link>
      </div>
      <div >
          <h1 className="w-full text-center pb-16 pt-10 text-4xl">Children</h1>
      </div>
      {/* accounts section */}
      <div className="border rounded-xl bg-white pt">
          <Link href={'/fees/balance'} className="flex py-2 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
              <Image priority src={'/profile-icon-2.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-16 max-w-16" />
              <div className="pt-3 w-full">
                  <p> Surname Name</p>
                  <p className=" text-sm text-gray-500">grade: 5</p>
              </div>
              <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit pt-5"/>
          </Link>
          <hr className="mx-5"></hr>
          <Link href={'/fees/balance'} className="relative flex py-2 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
            <p className=" absolute right-12 text-blue-700 font-extrabold pt-5">1</p>
              <Image priority src={'/profile-icon-3.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-16 max-w-16" />
              <div className="pt-3 w-full">
                  <p> Surname Name</p>
                  <p className=" text-sm text-gray-500">grade: 7</p>
              </div>
              <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit pt-5"/>
          </Link>
          <hr className="mx-5"></hr>
          <Link href={'/fees/balance'} className="flex py-2 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
              <Image priority src={'/profile-icon-4.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-16 max-w-16" />
              <div className="pt-3 w-full">
                  <p> Surname Name</p>
                  <p className=" text-sm text-gray-500">grade: 2</p>
              </div>
              <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit pt-5"/>
          </Link>
      </div>
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto pt-2">check invoices and/or outstanding balances</p>
    </div>
  )
};

export default Children;