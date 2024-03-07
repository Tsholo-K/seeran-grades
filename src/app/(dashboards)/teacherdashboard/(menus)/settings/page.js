import Crumbs from "@/components/crumbs"
import Image from "next/image"
import Link from "next/link"


const Menu = {
  help : {
    title: 'help',
    icon: 'headset',
  },
  reportbug : {
    title: 'report a bug',
    icon: 'bug',
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
      <Crumbs title={'dashboard'} url={'teacherdashboard'} hide={true}/>
      <div>
        <h1 className="w-full text-center pb-5 text-4xl">Settings</h1>
      </div>
      <div className="w-fit my-10 mx-auto">
          <div className="mx-auto w-fit pb-4">
            <Image priority src={'/favicon.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-[250px] max-w-[250px] " />
          </div>
          <h2 className="w-full text-center text-xl">seeran grades</h2>
      </div>
      {/* menu section */}
      <div className="border rounded-xl bg-white">
        <MenuLink Menu={Menu.help}/>
        <hr className="mx-5"></hr>
        <MenuLink Menu={Menu.reportbug}/>
      </div>
    </div>
  )
}

export default page