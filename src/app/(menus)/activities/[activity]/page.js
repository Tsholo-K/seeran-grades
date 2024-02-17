import Image from "next/image"
import Link from "next/link"


const Menu = {
  loggedby : {
    title: 'Logger',
    info: 'Mrs ...',
  },
  date : {
    title: 'Date',
    info: '7 March 2024',
  },
  recipient : {
    title: 'Recipient',
    info: 'Surname Name',
  },
  teacher : {
    title: 'Teacher',
    info: 'Mrs ..',
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
            <Link href={'/activities'} className="flex w-full text-blue-700">
            <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>logs
            </Link>
        </div>
        <div>
            <h1 className="w-full text-center pb-7 text-4xl">Activity</h1>
        </div>
        <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
            <Image priority src={'/speech.svg'} alt="profile icon" width={30} height={30} className="h-36 w-36" />
        </div>
        <div className="mb-10">
            <p className="text-sm text-gray-500 pt-1 w-full text-center">Disruption Of Class</p>
        </div>
        <div className="py-4 mb-10">
            <div className="flex">
            <p className=" text-sm pl-2 pb-1 text-gray-400">record</p>
            </div>
            <div className="relative border rounded-xl bg-white py-1">
            <p className="w-full py-1 px-2">
                As the day unfolds in the classroom, the usual rhythm of teaching is interrupted by the restless energy of one particular student.
            </p>
            </div>
        </div>
        <div className="border rounded-xl bg-white mb-8">
            <MenuLink Menu={Menu.loggedby}/>
            <hr className="mx-5"></hr>
            <MenuLink Menu={Menu.recipient}/>
            <hr className="mx-5"></hr>
            <MenuLink Menu={Menu.date}/>
        </div>
    </div>
  )
}

export default page