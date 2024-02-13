import Link from "next/link";
import Image from "next/image";


const ParentDashboard = () => {
    return (
      <div className="text-black">
        {/* navigation bar */}
        <div className="fixed flex justify-center w-full py-3 bg-gray-100">
          <div className="flex w-full px-4 sm:px-7 mx-auto max-w-[1700px]">
            <div className="w-full">
              <Link href={"/parentdashboard"} className="md:block hidden">seeran <span className="text-blue-700">grades</span></Link>
              <Link href={'/parentdashboard'} className="md:hidden"><Image priority src={'/favicon.svg'} alt="hero image" width={0} height={0} className="h-[35px] w-[35px]"/></Link>
            </div>
            <div className="w-full text-end">
            </div>
          </div>
        </div>
        {/* dashboard */}
        <div className="w-full px-5 pt-16 bg-gray-100">
          {/* accounts section */}
          <div className="px-6 border rounded-xl my-7 bg-white">
            <div className="flex py-2 gap-5 justify-start w-full">
              <Image priority src={'/profile-icon-1.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-16 max-w-16" />
              <p className="pt-3 w-full">profile settings</p>
              <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit pt-5"/>
            </div>
            <hr></hr>
            <div className="flex py-2 gap-5 justify-start w-full">
              <div className="flex w-fit">
                <Image src={'/profile-icon-2.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10 max-w-10" />
                <Image src={'/profile-icon-3.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10 max-w-10" />
                <Image src={'/profile-icon-4.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10 max-w-10" />
              </div>
              <p className="pt-2 w-full">children</p>
              <Image src={'/chevron-right-black.svg'} alt='try it button' width={50} height={50} className="w-fit h-fit pt-2"/>
            </div>
          </div>
          {/* school section */}
          <div className="px-6 border rounded-xl my-7 bg-white">
            <div className="flex gap-6 py-3 justify-start w-full">
              <Image src={'/wallet.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
              <p className="w-full">school fees</p>
              <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit sm:mt-1"/>
            </div>
            <hr></hr>
            <div className="flex gap-6 py-3 justify-start w-full">
              <Image src={'/bell-ring.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
              <p className="w-full">notifications</p>
              <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit sm:mt-1"/>
            </div>
            <hr></hr>
            <div className="flex gap-6 py-3 justify-start w-full">
              <Image src={'/megaphone.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
              <p className="w-full">announcements</p>
              <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit sm:mt-1"/>
            </div>
          </div>
          {/* school section */}
          <div className="px-6 border rounded-xl my-7 bg-white">
            <div className="flex gap-6 py-3 justify-start w-full">
              <Image src={'/teacher.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
              <p className="w-full">teachers</p>
              <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit sm:mt-1"/>
            </div>
            <hr></hr>
            <div className="flex gap-6 py-3 justify-start w-full">
              <Image src={'/admin.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
              <p className="w-full">school administrator</p>
              <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit sm:mt-1"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default ParentDashboard;