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
        <Link href={'/fees'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>fees</Link>
      </div>
      <div >
          <h1 className="w-full text-center pb-16 pt-10 text-4xl">Balance</h1>
      </div>
      {/* accounts section */}
      <div className="border rounded-xl bg-white p-3  mb-7">
          <p className="text-sm text-gray-500 pl-3 pb-3">outstanding balance :</p>
          <p className="mx-auto w-fit text-5xl pt-4 pb-3 text-blue-700 font-extrabold">R3 487.87</p>
          <div className="flex w-fit mx-auto">
            <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 h-5"/>
            <p className=" text-sm pl-2 text-gray-500">next debit order date : 1st march</p>
          </div>
      </div>
      <div className="border rounded-xl bg-white mt-10">
        <Link href={`/`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
          <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
          <Image src={`/credit-card.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
          <p className={`w-full`}>pay</p>
          <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
        </Link>
        <hr className="mx-5"></hr>
        <Link href={`/`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
          <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
          <Image src={`/layers.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
          <p className={`w-full`}>fees structure</p>
          <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
        </Link>
      </div>
      <div className="border rounded-xl bg-white mt-10">
        <Link href={`/`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
          <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
          <Image src={`/coins.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
          <p className={`w-full`}>invoices</p>
          <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
        </Link>
      </div>
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto pt-2"></p>
    </div>
  )
};

export default Children;