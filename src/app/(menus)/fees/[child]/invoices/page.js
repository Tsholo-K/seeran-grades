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
        <Link href={'/fees/child'} className="flex w-full text-blue-700">
          <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>Invoices
        </Link>
      </div>
      <div >
          <h1 className="w-full text-center pb-20 text-4xl">Invoices</h1>
      </div>
      <p className="pl-2 text-sm text-gray-400 pb-1">year : 2024</p>
      <div className="border rounded-xl bg-white">
        <Link href={`/fees/pay`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
          <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
          <p className={`w-full`}>January</p>
          <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
        </Link>
        <hr className="mx-5"></hr>
        <Link href={`/`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
          <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
          <p className={`w-full`}>Febuary</p>
          <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
        </Link>
        <hr className="mx-5"></hr>
        <Link href={`/fees/pay`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
          <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
          <p className={`w-full`}>March</p>
          <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
        </Link>
        <hr className="mx-5"></hr>
        <Link href={`/`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
          <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
          <p className={`w-full`}>April</p>
          <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
        </Link>
        <hr className="mx-5"></hr>
        <Link href={`/fees/pay`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
          <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
          <p className={`w-full`}>May</p>
          <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
        </Link>
        <hr className="mx-5"></hr>
        <Link href={`/`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
          <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
          <p className={`w-full`}>June</p>
          <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
        </Link>
        <hr className="mx-5"></hr>
        <Link href={`/fees/pay`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
          <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
          <p className={`w-full`}>July</p>
          <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
        </Link>
        <hr className="mx-5"></hr>
        <Link href={`/`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
          <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
          <p className={`w-full`}>August</p>
          <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
        </Link>
        <hr className="mx-5"></hr>
        <Link href={`/fees/pay`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
          <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
          <p className={`w-full`}>September</p>
          <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
        </Link>
        <hr className="mx-5"></hr>
        <Link href={`/`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
          <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
          <p className={`w-full`}>October</p>
          <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
        </Link>
        <hr className="mx-5"></hr>
        <Link href={`/fees/pay`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
          <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
          <p className={`w-full`}>November</p>
          <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
        </Link>
        <hr className="mx-5"></hr>
        <Link href={`/fees/pay`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
          <p className=" absolute right-12 text-blue-700 font-extrabold"></p>
          <p className={`w-full`}>December</p>
          <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
        </Link>
      </div>
      <p className="w-[90%] mx-auto text-center text-sm text-gray-400 pt-1">all invoices</p>
    </div>
  )
}

export default page