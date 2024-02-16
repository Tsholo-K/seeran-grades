import Image from "next/image"
import Link from "next/link"


const Menu = {
  email : {
    title: 'Email',
    icon: 'book-lock',
    info: 'email',
  },
  phonenumber : {
    title: 'Phone number',
    icon: 'fingerprint',
    info: '...0824',
  },
  twofactorauthentication : {
    title: 'Two-Factor Authentication',
    icon: 'log-out',
    info: 'Off',
  },
  password : {
    title: 'Change password',
    icon: 'log-out',
    info: '',
  },
}

const MenuLink = ({Menu}) => {
  return (
    <div className="relative flex py-3 gap-1 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p>{Menu.title}</p>
      <p className="text-gray-500 absolute right-11">{Menu.info}</p>
      <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit absolute right-3"/>
    </div>
  )
}

const page = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      <div className="fixed top-0 pt-16 pb-1 w-full bg-gray-100">
        <Link href={'/profile'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>profile</Link>
      </div>
      <div>
        <h1 className="w-full text-center pb-20 pt-16 text-4xl">Sign-in and Security</h1>
      </div>

      {/* menu section */}
      <div className="relative">
      <Link href={'/'} className="absolute text-blue-700 right-2">edit</Link>
        <p className="text-sm text-gray-500 pl-2 pb-1">email and phone number</p>
        <div className="border rounded-xl bg-white">
          <MenuLink Menu={Menu.email}/>
          <hr className="mx-5"></hr>
          <MenuLink Menu={Menu.phonenumber}/>
        </div>
      </div>
      
      <div className="border rounded-xl bg-white mt-20 ">
        <div className="text-blue-700">
          <MenuLink Menu={Menu.password}/>
        </div>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.twofactorauthentication}/>
      </div>
    </div>
  )
}

export default page