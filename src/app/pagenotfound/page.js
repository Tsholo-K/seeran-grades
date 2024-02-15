import Image from "next/image";
import Link from "next/link";


const PageNotFound = () => {
  return (
    <>
      {/* navigation bar */}
      <div className="fixed flex justify-center w-full pt-3">
        <div className="flex w-full px-4 mx-auto max-w-[1700px]">
          <div className="w-full">
            <p className="font-bold" >seeran</p>
          </div>
          <div className="w-full text-end">
          </div>
        </div>
      </div>
      {/* form */}
      <div className="min-h-screen w-full grid grid-cols-1 place-content-center px-4 max-w-4xl mx-auto">
        <Image src={'/pagenotfound.svg'} alt="hero image" width={0} height={0} className="h-fit w-fit mx-auto  max-sm:max-h-[350px]"/>
        <p className="w-full text-center font-semibold">page still under development. <Link href={'/'} className='text-blue-700'>home page</Link></p>
      </div>
    </>
  )
}

export default PageNotFound;