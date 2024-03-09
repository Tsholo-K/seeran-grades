import Image from "next/image"


const UserImage = ({ image, name, surname, email }) => {
  return (
    <>
        <div className="w-fit mb-7 mx-auto">
          <div className="mx-auto w-fit">
              <Image priority src={`/${image}.svg`} alt="profile icon" width={50} height={50} className="w-[200px] h-fit rounded-full mx-auto lg:w-[300px]" />
              {
                name && surname &&
                  <h2 className="w-full text-center text-3xl lg:text-5xl pt-3">{name.charAt(0).toUpperCase() + name.slice(1)} {surname.charAt(0).toUpperCase() + surname.slice(1)}</h2>
              }
              {
                email &&
                <p className="w-full text-center text-gray-400 pb-4">{email}</p>
              }
          </div>
        </div>
    </>
  )
}

export default UserImage