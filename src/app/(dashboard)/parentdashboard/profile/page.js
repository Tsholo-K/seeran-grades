import Image from "next/image"
import Link from "next/link"


const page = () => {
  return (
    <div className="w-full">
      <Link href={'/'} className="flex text-blue-700 sticky"><Image src={'/chevron-left.svg'} alt="back" width={30} height={30} className="w-fit h-fit max-h-6 max-w-6"/>Dashboard</Link>
      <div>
        <h1 className="w-full text-center text-4xl">Profile</h1>
      </div>
      <div className="w-fit mx-auto">
          <div className="mx-auto w-fit mb-4">
              <Image priority src={'/profile-icon-1.svg'} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-40 max-w-40" />
          </div>
          <h2 className="w-full text-center">Surname Name</h2>
          <p className="w-full text-center">email</p>
      </div>
    </div>
  )
}

export default page