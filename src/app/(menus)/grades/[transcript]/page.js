import Image from "next/image";
import Link from "next/link";


const Score = ({ transcript }) => {
  return (
    <>
      <div className="w-full pb-10">
        <div className="mx-auto w-fit">
          <p className="bg-orange-500 text-center w-[150px] h-[150px] text-white rounded-full pt-[53px] text-5xl">52%</p>
        </div>
        <p className="w-full text-center pt-3 text-gray-400 text-sm">score</p>
      </div>
    </>
  )
};


const Subject = ({ subject }) => {
  return (
    <>
      <div className="py-4 mb-8">
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
        <p className="w-full text-center text-sm text-gray-400">submitted by ( Name )</p>
      </div>
    </>
  )
}
 

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
    title: 'Date Released',
    info: '7 febuary 2024',
  },
  teacher : {
    title: 'Teacher',
    info: 'Mrs ..',
  },
};

const MenuLink = ({Menu}) => {
  return (
    <div className="relative flex py-3 gap-1 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p>{Menu.title}</p>
      <p className="text-gray-400 absolute right-4">{Menu.info}</p>
    </div>
  )
};

const Transcript = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      {/* back link */}
      <div className="fixed top-0 pt-16 pb-1 w-full bg-gray-100">
        <Link href={'/grades'} className="flex w-full text-blue-700">
          <Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>grades
        </Link>
      </div>
      {/* page heading */}
      <div>
        <h1 className="w-full text-center pb-16 text-4xl">Transcript</h1>
      </div>
      {/* score */}
      <Score/>
      {/* subject */}
      <Subject/>
      {/* info */}
      <div className="border rounded-xl bg-white mb-8">
        <MenuLink Menu={Menu.assessment}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.grade}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.date}/>
      </div>
      {/* teacher */}
      <div className="flex">
        <Link href={'/teachers/teacher'} className="pb-1 w-full text-end pr-3 text-blue-700">message</Link>
      </div>
      <div className="border rounded-xl bg-white">
        <MenuLink Menu={Menu.teacher}/>
      </div>
    </div>
  )
};

export default Transcript;