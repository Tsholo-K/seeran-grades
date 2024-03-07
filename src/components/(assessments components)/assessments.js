import Image from "next/image"
import Link from "next/link"


const Assessments = ({ dashboard, section, assessment, title=false, date_title }) => {
    return (
      <>
        <div className="py-4 lg:py-6">
          <Link href={`/${dashboard}dashboard/${section}/${assessment.id}`}>
            <div className="rounded-xl bg-white py-3">
              <div>
                <p className="text-sm lg:text-lg text-gray-500 pt-1 w-full text-center">{assessment.assessment}</p>
              </div>
              <div className="flex justify-center py-2 gap-3 px-3 w-full cursor-pointer">
                {
                  title
                  ?
                  <div className="grid grid-cols-1 place-content-center">
                    <p className="lg:text-xl">{assessment.title}</p>
                  </div>
                  :
                  <>
                    <Image priority src={`/${assessment.icon}.svg`} alt="profile icon" width={30} height={30} className="w-8 lg:w-12" />
                    <div className="grid grid-cols-1 place-content-center">
                      <p className="lg:text-xl">{assessment.subject}</p>
                    </div>
                  </>
                }
              </div>
              <div className="flex pl-3 pt-2">
                <Image src={'/date.svg'} alt='try it button' width={10} height={10} className="w-5 lg:w-6"/>
                <div className="grid grid-cols-1 place-content-center">
                  <p className=" text-sm lg:text-base pl-2 text-gray-500">{date_title} : {assessment.due_date}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </>
    )
};

export default Assessments