import Image from "next/image"
import Link from "next/link"


const Menu = {
  email : {
    title: 'Email',
    icon: false,
    info: 'email@example.com',
  },
  phonenumber : {
    title: 'Phone number',
    icon: false,
    info: '0711740824',
  },
  twofactorauthentication : {
    title: 'Two-Factor Authentication',
    icon: false,
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
      <p className="text-gray-400 absolute right-4">{Menu.info}</p>
      {Menu.icon 
        ? (<Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit absolute right-3"/>)
        : null
      }
    </div>
  )
}


const InputArea = ({ title }) => {
  return (
    <>
      <p className="text-sm text-gray-400 pl-2 py-1">{title}</p>
      <div className="rounded-xl bg-white mb-3">
        <input type="password" className="w-full rounded-xl h-10 px-3 focus:outline-none"/>
      </div>
    </>
  )
}


const page = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      <div className="fixed top-0 pt-16 pb-1 w-full bg-gray-100">
        <Link href={'/profile/security'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>profile</Link>
      </div>
      <div>
        <h1 className="w-full text-center pb-24 text-4xl">Update Email</h1>
      </div>
      <div className="relative mb-32">
        <InputArea title='new email'/>
      </div>
      <button type="submit" className="w-full border border-white rounded-xl bg-black active:bg-blue-700 text-white lg:hover:bg-blue-700 focus:bg-blue-700 lg:hover:scale-[1.01] transition-all duration-500 py-1">update</button>
    </div>
  )
}

export default page