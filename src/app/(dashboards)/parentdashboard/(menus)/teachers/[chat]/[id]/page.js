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
      <p className="text-gray-400 absolute right-4">{Menu.info}</p>
    </div>
  )
}

const page = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      <div className="fixed top-0 pt-16 pb-1 w-full bg-gray-100">
        <Link href={'/teachers/teacher'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>chat</Link>
      </div>
      <div>
        <h1 className="w-full text-center pb-5 text-4xl">Teacher ID</h1>
      </div>
      <div className="w-fit my-10 mx-auto">
          <div className="mx-auto w-fit pb-4">
              <Image priority src={'/profile-icon-1.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-40 max-w-40" />
          </div>
          <h2 className="w-full text-center text-2xl">Surname Name</h2>
      </div>
      <div className="py-4 mb-10">
        <div className="flex">
          <p className=" text-sm pl-2 pb-1 text-gray-400">teaches</p>
        </div>
        <div className="relative border rounded-xl bg-white py-1">
          <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
              <Image priority src={'/physics.svg'} alt="profile icon" width={30} height={30} className="h-8 w-8" />
              <div className="pt-1 pl-2">
                  <p>Physical Science</p>
              </div>
          </div>
          <hr className="mx-5"></hr>
          <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
              <Image priority src={'/life-science.svg'} alt="profile icon" width={30} height={30} className="h-8 w-8" />
              <div className="pt-1 pl-2">
                  <p>Life Science</p>
              </div>
          </div>
          <hr className="mx-5"></hr>
          <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
              <Image priority src={'/maths.svg'} alt="profile icon" width={30} height={30} className="h-8 w-8" />
              <div className="pt-1 pl-2">
                  <p>Mathematics</p>
              </div>
          </div>
        </div>
        <div className="border rounded-xl bg-white mt-10">
          <MenuLink Menu={Menu.name}/>
          <hr className="mx-5"></hr>
          <MenuLink Menu={Menu.dateofbirth}/>
          <hr className="mx-5"></hr>
          <MenuLink Menu={Menu.contacts}/>
        </div>
      </div>
    </div>
  )
}

export default page