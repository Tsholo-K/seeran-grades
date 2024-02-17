import Image from "next/image"
import Link from "next/link"


const Menu = {
  schoolfee : {
    title: 'School Fee',
    info: 'R 4 500',
  },
  sportsfee : {
    title: 'Sports Fee',
    info: 'R 350',
  },
  total : {
    title: 'Total',
    info: 'R 4 850',
  }
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
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <div className="fixed top-0 pt-16 w-full pb-1 bg-gray-100">
        <Link href={'/fees/child'} className="flex w-full text-blue-700">
          <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>fees
        </Link>
      </div>
      <div >
          <h1 className="w-full text-center pb-20 text-4xl">Structure</h1>
      </div>
      <div className="border rounded-xl bg-white">
        <MenuLink Menu={Menu.schoolfee}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.sportsfee}/>
      </div>
      <div className="border rounded-xl bg-white mt-16">
        <MenuLink Menu={Menu.total}/>
      </div>
      <p className="mx-auto text-sm text-gray-400 py-1">total debitable amount p/m</p>
    </div>
  )
}

export default page