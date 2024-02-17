import Image from "next/image"
import Link from "next/link"


const Menu = {
  name : {
    title: 'Name',
    icon: 'book-lock',
    info: 'surname name',
  },
  dateofbirth : {
    title: 'Date of birth',
    icon: 'fingerprint',
    info: '23/08/87',
  },
  contacts : {
    title: 'Contacts',
    icon: 'log-out',
    info: '...0824',
  },
  communication : {
    title: 'Communication preferance',
    icon: 'log-out',
    info: '',
  },
}

const MenuLink = ({Menu}) => {
  return (
    <div className="relative flex py-3 gap-1 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p>{Menu.title}</p>
      <p className="text-gray-400 absolute right-9">{Menu.info}</p>
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
        <h1 className="w-full text-center pb-20 text-4xl">ID</h1>
      </div>
      {/* menu section */}
      <div className="border rounded-xl bg-white">
        <MenuLink Menu={Menu.name}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.dateofbirth}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.contacts}/>
      </div>
      <div className="border rounded-xl bg-white mt-20">
        <MenuLink Menu={Menu.communication}/>
      </div>
    </div>
  )
}

export default page