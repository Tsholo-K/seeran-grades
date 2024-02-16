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
  studentnumber : {
    title: 'Student Number',
    icon: 'log-out',
    info: '...0824',
  },
  removechild : {
    title: 'Remove Child From Account',
    icon: 'log-out',
    info: '',
  },
}

const MenuLink = ({Menu}) => {
  return (
    <div className="relative flex py-3 gap-1 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p>{Menu.title}</p>
      <p className="text-gray-500 absolute right-9">{Menu.info}</p>
      <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit absolute right-3"/>
    </div>
  )
}


const page = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      <div className="fixed top-0 pt-16 pb-1 w-full bg-gray-100">
        <Link href={'/family'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>family</Link>
      </div>
      <div>
        <h1 className="w-full text-center pb-5 pt-16 text-4xl">ID</h1>
      </div>
      <div className="w-fit my-10 mx-auto">
          <div className="mx-auto w-fit pb-4">
              <Image priority src={'/profile-icon-3.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-40 max-w-40" />
          </div>
          <h2 className="w-full text-center text-2xl">Surname Name</h2>
          <p className="w-full text-center text-gray-500">email</p>
      </div>
      {/* menu section */}
      <div className="border rounded-xl bg-white">
        <MenuLink Menu={Menu.name}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.dateofbirth}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.studentnumber}/>
      </div>
      <div className="border rounded-xl bg-white text-red-500 mt-20">
        <MenuLink Menu={Menu.removechild}/>
      </div>
      <p className="text-center text-gray-500 text-sm w-[80%] mx-auto">to reverse this you&apos;d need to go to school to have it relinked</p>
    </div>
  )
}

export default page