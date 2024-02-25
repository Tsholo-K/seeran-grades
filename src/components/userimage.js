import Image from "next/image"


const UserImage = ({ image }) => {
  return (
    <>
        <div className="w-fit mb-7 mx-auto">
        <div className="mx-auto w-fit">
            <Image priority src={`/${image}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-40 lg:max-h-52" />
        </div>
        </div>
    </>
  )
}

export default UserImage