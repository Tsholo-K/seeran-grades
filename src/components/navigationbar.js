import Link from "next/link";
import Image from "next/image";


export default function NavigationBar({  }) {
  return (
    <div className="fixed flex justify-center w-full py-3 bg-white">
        <div className="flex w-full px-4 sm:px-7 mx-auto max-w-[1700px]">
          <div className="w-full">
            <Link href={"/"} className="md:block hidden">seeran <span className="text-blue-700">grades</span></Link>
            <Link href={'/'} className="md:hidden"><Image src={'/favicon.svg'} alt="hero image" width={0} height={0} className="h-[35px] w-[35px]"/></Link>
          </div>
          <div className="w-full text-end">
            <Link href="/parentsignin" className="text-gray-400 transition-all duration-300 hover:text-blue-700">try it</Link>
          </div>
        </div>
    </div>
  )
};
