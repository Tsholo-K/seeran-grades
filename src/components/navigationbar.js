import Link from "next/link";
import Image from "next/image";


export default function NavigationBar({  }) {
  return (
    <div className="fixed flex justify-center w-full py-3 bg-gray-100 z-[3]">
        <div className="flex w-full px-4 sm:px-7 md:px-10 mx-auto max-w-[1700px]">
          <div className="w-full">
            <Link href={"/"} className="md:block hidden">seeran grades</Link>
            <Link href={'/'} className="md:hidden"><Image src={'/favicon.svg'} alt="hero image" width={0} height={0} className="h-[35px] w-[35px]"/></Link>
          </div>
          <div className="w-full text-end hidden md:block">
          </div>
        </div>
    </div>
  )
};
