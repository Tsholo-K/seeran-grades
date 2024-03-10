import Image from "next/image";

  
const Subject = ({ title='', subject, icon }) => {
  return (
    <div className="py-4 lg:py-6">
      <div className="flex">
        <p className=" text-sm pl-2 pb-1 text-gray-400">{title}</p>
      </div>
      <div className="relative rounded-xl bg-white py-1">
        <div className="flex justify-center py-2 gap-1 px-3 w-full cursor-pointer md:hover:text-blue-700">
          {
            icon && 
            <Image priority src={`/${icon}.svg`} alt="profile icon" width={30} height={30} className="h-9 w-9 lg:h-12 lg:w-12" />
          }
          <div className="grid grid-cols-1 place-content-center">
            <p className="lg:text-xl">{subject}</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Subject;