import Image from "next/image"
import Link from "next/link"


const Menu = {
  assessment : {
    title: 'Assessment',
    info: 'test',
  },
  grade : {
    title: 'Mark',
    info: '26/50',
  },
  date : {
    title: 'Date',
    info: '7 febuary',
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
        <Link href={'/grades/child-2'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>transcripts</Link>
      </div>
      <div>
        <h1 className="w-full text-center pb-16 text-4xl">Transcript</h1>
      </div>
      <div className="w-full pb-10">
        <div className="mx-auto w-fit">
          <p className="bg-orange-500 text-center w-[150px] h-[150px] text-white rounded-full pt-[50px] text-5xl">52%</p>
        </div>
        <p className="w-full text-center pt-3 text-gray-400 text-sm">score</p>
      </div>

      <div className="py-4 mb-10">
        <div className="flex">
          <p className=" text-sm pl-2 pb-1 text-gray-400">subject</p>
        </div>
        <div className="relative border rounded-xl bg-white py-1">
          <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
              <Image priority src={'/life-science.svg'} alt="profile icon" width={30} height={30} className="h-8 w-8" />
              <div className="pt-1 pl-2">
                  <p>Life Science</p>
              </div>
          </div>
        </div>
      </div>
      <div className="border rounded-xl bg-white mb-8">
        <MenuLink Menu={Menu.assessment}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.grade}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.date}/>
      </div>
      <div className="flex">
        <p className="pb-1 w-full text-end pr-3 text-blue-700">message</p>
      </div>
      <div className="border rounded-xl bg-white">
        <MenuLink Menu={Menu.teacher}/>
      </div>
    </div>
  )
}

export default page