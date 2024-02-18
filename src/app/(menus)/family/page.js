import Image from "next/image";
import Link from "next/link";


const Children = {
  child1 : {
    id: 'child-1',
    name: 'Mochaki Lethabo',
    grade: '5',
    img: 'profile-icon-2',
    
  },
  child2 : {
    id: 'child-2',
    name: 'Tsholo Koketso',
    grade: '7',
    img: 'profile-icon-3',
  },
  child3 : {
    id: 'child-3',
    name: 'Munyoro Godwill',
    grade: '2',
    img: 'profile-icon-4',
  },
}

const ChildMenu = ({ child }) => {
  return (
    <>
      <Link href={`/family/${child.id}`} className="flex py-2 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
        <Image priority src={`/${child.img}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-16 max-w-16" />
        <div className="pt-3 w-full">
            <p className="font-bold">{child.name}</p>
            <p className="text-sm text-gray-500">grade: {child.grade}</p>
        </div>
        <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit pt-5"/>
      </Link>
    </>
  )
}


const Family = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      {/* back link */}
      <div className="fixed top-0 pt-16 w-full pb-1 bg-gray-100">
        <Link href={'/parentdashboard'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>dashboard</Link>
      </div>
      {/* page heading */}
      <div >
        <h1 className="w-full text-center pb-16 text-4xl">Family</h1>
      </div>
      {/* children menu */}
      <div className="rounded-xl bg-white">
        <ChildMenu child={Children.child1}/>
        <hr className="mx-5"></hr>
        <ChildMenu child={Children.child2}/>
        <hr className="mx-5"></hr>
        <ChildMenu child={Children.child3}/>
      </div>
      <p className=" text-sm w-[90%] text-gray-400 text-center mx-auto pt-2">these are all the children linked to your account</p>
    </div>
  )
};

export default Family;