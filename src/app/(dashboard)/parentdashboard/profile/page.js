import Image from "next/image"
import Link from "next/link"


const Menu = {
  personalinformation : {
    title: 'Personal Information',
    icon: 'book-lock',
  },
  signinandsecurity : {
    title: 'Sign-in And Security',
    icon: 'fingerprint',
  },
  signout : {
    title: 'Sign Out',
    icon: 'log-out',
  }
}

const MenuLink = ({Menu}) => {
  return (
    <div className="flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <Image src={`/${Menu.icon}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
      <p className={`w-full`}>{Menu.title}</p>
      <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
    </div>
  )
}

const page = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      <div className="fixed top-0 pt-16 pb-2 w-full">
        <Link href={'/parentdashboard'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>dashboard</Link>
      </div>
      <div>
        <h1 className="w-full text-center pb-5 pt-16 text-4xl">Profile Settings</h1>
      </div>
      <div className="w-fit my-10 mx-auto">
          <div className="mx-auto w-fit pb-4">
              <Image priority src={'/profile-icon-1.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-40 max-w-40" />
          </div>
          <h2 className="w-full text-center text-2xl">Surname Name</h2>
          <p className="w-full text-center text-gray-500">email</p>
      </div>
      {/* menu section */}
      <div className="border rounded-xl bg-white">
        <MenuLink Menu={Menu.personalinformation}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.signinandsecurity}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.signout}/>
      </div>
    </div>
  )
}

export default page