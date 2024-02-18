import Image from "next/image"
import Link from "next/link"


const Menu = {
  name : {
    title: 'Name',
    icon: false,
    info: 'surname name',
  },
  dateofbirth : {
    title: 'Date of birth',
    icon: false,
    info: '23/08/87',
  },
  phonenumber : {
    title: 'Phone Number',
    icon: false,
    info: '0711740824',
  },
  email : {
    title: 'Email',
    icon: false,
    info: 'email@example.com',
  },
  children : {
    title: 'Children',
    icon: false,
    info: '3',
  },
  communication : {
    title: 'Communication preferance',
    icon: true,
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


const page = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      <div className="fixed top-0 pt-16 pb-1 w-full bg-gray-100">
        <Link href={'/profile/id'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>id</Link>
      </div>
      <div>
        <h1 className="w-full text-center pb-24 text-4xl">Communication</h1>
      </div>
      {/* Sms */}
      <div className="flex relative">
        <p>Sms</p>
        <div className="absolute right-3 ">
          <label for="toggle-example" className="flex items-center cursor-pointer relative mb-4" >
            <input type="checkbox" id="toggle-example" className="sr-only"/>
            <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
          </label>
        </div>
      </div>
      {/* email */}
      <div className="flex relative mt-5 mb-32">
        <p>Email</p>
        <div className="absolute right-3 ">
          <label for="toggle-example-2" className="flex items-center cursor-pointer relative mb-4" >
            <input type="checkbox" id="toggle-example-2" className="sr-only"/>
            <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
          </label>
        </div>
      </div>
      {/* save button */}
      <button type="submit" className="w-full border border-white rounded-xl bg-black active:bg-blue-700 text-white lg:hover:bg-blue-700 focus:bg-blue-700 lg:hover:scale-[1.01] transition-all duration-500 py-1">save</button>
    </div>
  )
}

export default page