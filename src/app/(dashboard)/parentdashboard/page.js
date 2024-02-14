import Link from "next/link";
import Image from "next/image";

{/* components */}
import ParentDashboardSidemenu from "@/components/parentdashboardsidemenu";


const NavigationBar = () => {
  return (
    <div className="fixed top-0 flex justify-center w-full pt-3 pb-2 bg-gray-100">
      <div className="flex w-full px-4 sm:px-7 mx-auto">
        <div className="w-full">
          <Link href={'/parentdashboard'} className=""><Image priority src={'/favicon.svg'} alt="hero image" width={0} height={0} className="h-[35px] w-[35px]"/></Link>
        </div>
      </div>
    </div>
  )
}

export default function ParentDashboard() {
    return (
      <div className="text-black bg-gray-100 pt-10 min-h-screen w-full">
        {/* navigation bar */}
        <NavigationBar/>
        {/* dashboard */}
        <ParentDashboardSidemenu/>
      </div>
    )
  }