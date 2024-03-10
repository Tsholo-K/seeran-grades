import Crumbs from "@/components/crumbs"
import Image from "next/image"


const Menu = {
  help : {
    title: 'help',
    icon: 'headset',
  },
  contactinfo : {
    title: 'contact info',
    icon: 'phone',
  },
  complaints : {
    title: 'log a complaint',
    icon: 'badge-alert',
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
    <div>
      <Crumbs title={'dashboard'} url={'parentdashboard'} />
      <div>
        <h1 className="w-full text-center pb-5 text-4xl">Help desk</h1>
      </div>
      <div className="w-fit my-10 mx-auto">
        <div className="mx-auto w-fit py-7">
          <p className="w-fit mx-auto text-gray-500 text-sm">school logo</p>
        </div>
        <h2 className="w-full text-center text-gray-500 text-xl">School Name</h2>
      </div>
      {/* menu section */}
      <div className="rounded-xl bg-white">
        <MenuLink Menu={Menu.help}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.contactinfo}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.complaints}/>
      </div>
    </div>
  )
}

export default page