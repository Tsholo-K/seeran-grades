import Link from "next/link";
import Image from "next/image";


const ParentDashboard = () => {
    return (
      <div className="text-gray-500">
        {/* navigation bar */}
        <div className="fixed flex justify-center w-full py-3 bg-white">
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
        <div className="w-full px-5 pt-16 ">
          <h1 className="text-4xl">Parent Dashboard</h1>
          {/* accounts section */}
          <div className="px-6 border rounded-xl my-10">
            <div className="flex py-2 gap-5 justify-start">
              <Image src={'/profile-icon-1.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-16" />
              <p className="pt-3 w-full">profile settings</p>
            </div>
            <hr></hr>
            <div className="flex py-2 gap-5 justify-start">
              <div className="flex w-fit">
                <Image src={'/profile-icon-2.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
                <Image src={'/profile-icon-3.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
                <Image src={'/profile-icon-4.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
              </div>
              <p className="pt-2 w-full">children</p>
            </div>
          </div>
          {/* school section */}
          <div className="px-6 border rounded-xl my-10">
            <div className="flex gap-6 py-3 justify-start">
              <Image src={'/wallet.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
              <p>school fees</p>
            </div>
            <hr></hr>
            <div className="flex gap-6 py-3 justify-start">
              <Image src={'/bell-ring.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
              <p>notifications</p>
            </div>
            <hr></hr>
            <div className="flex gap-6 py-3 justify-start">
              <Image src={'/megaphone.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
              <p>announcements</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default ParentDashboard;