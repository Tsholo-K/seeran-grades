import Image from "next/image";
import Link from "next/link";

{/* components */}
import Footer from "@/components/(general components)/footer";
import NavigationBar from "@/components/(general components)/navigationbar";


const Section = ({ heading, paragraph, image, side }) => {
  return (
    <>
      <div className="w-full">
        <h1 className="text-3xl sm:text-6xl lg:text-7xl text-center pt-10">{heading}</h1>
        <div className="max-w-screen-xl mx-auto pt-5">
          <div className="max-w-[600px] mx-auto text-gray-400 px-3">
            <p className="w-full text-center">{paragraph}</p>
          </div>
        </div>
      </div>
      <div className= {`flex ${ side === 'right' ? 'justify-end' : 'justify-start'} my-7 mx-2`}>
        <Image src={`/${image}.svg`} alt="seeran grades hero image" height={0} width={0} className={`h-fit w-full md:w-[50%]`}/>
      </div>
      <hr className="lg:max-w-screen-xl mx-5 my-5 lg:mx-auto"></hr>
    </>
  )
}

const Benefit = ({ icon, heading, paragraph, link=false }) => {
  return(
    <div className="h-full w-full grid grid-cols-1 place-content-end">
      <div className={`grid h-[270px] grid-cols-1 w-full place-content-center`}>
        <div className="h-full w-full drop-shadow-md bg-white hover md:hover:drop-shadow-2xl rounded-xl ">
          <div className="w-full h-[100px] grid grid-cols-1 place-items-center py-3 relative">
            {
              link
              ? <Image src={'/pointer.svg'} alt="register school icon" height={30} width={30} className="absolute right-4 top-3" />
              : null
            }
            <Image src={`/${icon}.gif`} alt="benefit icon" width={70} height={70} />
          </div>
          <hr className="mx-2"></hr>
          <div className="w-full h-[170px] grid grid-cols-1 place-items-center p-4">
            <div>
              <p className="text-center pb-3">{heading}</p>
              <p className="text-center text-gray-400 text-sm">{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="bg-gray-100">
      {/* navigation bar */}
      <NavigationBar left_link={false} left_logo_small={''} left_logo_large={'text'} right_link={true} right_link_url={'/login'} right_text={`login`}/>
      {/* body */}
      <div className="">
        {/* landing section */}
        <div className="h-screen relative max-w-screen-xl mx-auto">
          <div className="w-full pt-20 sm:pt-32">
            <h1 className="text-5xl sm:text-8xl lg:text-9xl text-center">seeran grades</h1>
            <p className="text-sm text-center text-gray-500 pt-3 lg:text-base">a comprehensive school management system</p>
          </div>
          {/* mobile sign in section */}
          <div className="md:hidden z-[2]">
            <div className="mt-10">
              <Link href={"/signin"} className="flex cursor-pointer w-fit mx-auto py-2 pl-6 pr-3 lg:hover:scale-[1.2] transition-all duration-500 ease-in-out gap-2 rounded-full text-white bg-black hover:bg-blue-700 mb-2">
                <p>try it out</p>
                <Image src={'/chevron-right.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
              </Link>
            </div>
            <p className="mb-8 text-base text-center">Already have an account? <a className=" text-[#66b0f0]" href="/login">login</a></p>
          </div>
          <Image priority src={'/main-hero.svg'} alt="hero image" width={1000} height={1000} className="h-[60%] md:h-[80%] w-full md:w-fit absolute bottom-0 right-0 z-[1]"/>
        </div>
        {/* how it works section */}
        <div className="w-full pt-5 max-w-screen-xl mx-auto">
          <p className="w-full text-center text-base">how it works</p>
          <div className="flex w-full justify-center">
            <Image src={'/chevron-down.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
          </div>
          <hr className="mx-5 my-3"></hr>
        </div>
        {/* info sections */}
        <div>
          {/* intro section */}
          <Section 
            heading={"In today's digital age.."}
            paragraph={'Effective communication between schools, students, parents and teachers is vital for academic success. Seeran Grades bridges this gap, offering a robust platform for seamless interaction and academic monitoring.'}
            image={'second-hero'}
            side={'left'} 
          />
          {/* key features section */}
          <Section 
            heading={"key features"}
            paragraph={`Students and Parents get access to grades, assignments, announcements, and school events. Teachers on the other hand are enabled with communication with parents, grade submissions and assignment tracking. While providing comprehensive oversight to school administrators enabling school-wide performance tracking and effective communication with staff, students, and parents. And its accessible anytime, anywhere.`}
            image={'key-features'}
            side={'right'} 
          />
          {/* why section */}
          <Section 
            heading={"But... why seeran grades"}
            paragraph={`
              seeran grades offers a transformative solution to the age-old challenge of effective communication and academic management in 
              educational institutions. By providing a centralized platform accessible to students, parents, teachers, and school administrators.
              seeran grades revolutionizes the way we interact, collaborate, and monitor academic progress. 
            `}
            image={'why-seeran'}
            side={'left'} 
          />
        </div>
        {/* large screens sign in section */}
        <div className="hidden md:block mb-5">
          <div className="h-[600px]">
            <div className="max-w-6xl mx-auto h-full w-full relative">
              {/* badge */}
              <div className="absolute flex border rounded-lg bg-white py-1 px-3 left-4 top-3 hover:opacity-80">
                <Image src={'/benefits-icon.gif'} alt="benefits" width={30} height={30} />
                <p className="grid grid-cols-1 place-content-center px-3 font-bold">Benefits</p>
              </div>
              {/* signin/login buttons */}
              <div className="absolute top-16 left-32">
                <div className="mt-10 flex gap-4">
                  <Link href={"/signin"} className="flex cursor-pointer w-fit mx-auto py-2 pl-6 pr-3 lg:hover:scale-[1.03] transition-all duration-500 ease-in-out gap-2 rounded-md text-white bg-[#66b0f0] hover:bg-[#ffcf2e] mb-2">
                    <p>try it out</p>
                    <Image src={'/chevron-right.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
                  </Link>
                  <Link href={"/login"} className="flex cursor-pointer border border-gray-300 hover:border-white w-fit mx-auto py-2 pl-6 pr-3 lg:hover:scale-[1.03] transition-all duration-500 ease-in-out gap-2 rounded-md text-black bg-white hover:bg-[#d0f0e4] mb-2">
                    <p>login</p>
                    <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
                  </Link>
                </div>
                <p className="text-center text-gray-400 text-sm">signin/login area</p>
              </div>
              {/* school registration link */}
              <div className="absolute bottom-7 right-7">
                <div className="mt-10 flex gap-4">
                  <Link href={"/signin"} className="flex cursor-pointer w-fit mx-auto py-2 pl-6 pr-3 lg:hover:scale-[1.03] transition-all duration-500 ease-in-out gap-2 rounded-md text-white bg-[#fe5244] hover:bg-black mb-2">
                    <p>enquire</p>
                    <Image src={'/chevron-right.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
                  </Link>
                </div>
                <p className="text-center text-gray-400 text-sm">register your school here</p>
              </div>
              {/* benefits */}
              <div className="w-full h-full grid grid-cols-3 gap-4 lg:gap-7 px-4">
                <Benefit heading={'Seamless Communication'} paragraph={'Enhance collaboration between schools, students, parents, teachers, and school administrators'} icon={'seemless-communication-icon'} />
                <div className="mb-32">
                  <Benefit heading={'Academic Monitoring'} paragraph={'Empower parents to actively engage in their childrens academic journey and track progress.'} icon={'monitoring-icon'}/>
                </div>
                <div className="mb-64">
                  <Benefit heading={'Efficiency and Transparency'} paragraph={'Streamline administrative tasks and ensure transparent communication of grades and assignments.'} icon={'transparency-icon'}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile school registration section */}
        <div className="md:hidden mx-3 my-7">
          <div className="max-w-[350px] mx-auto">
            <Link href={'/pagenotfound'} className="h-fit w-fit">
              <Benefit heading={'Register School'} paragraph={'free intergration,training and ongoing support to ensure successful implementation and user adoption'}  icon={'register-school-icon'} link={true}/>
            </Link>
            <p className="text-sm text-gray-400 text-center pt-3">we will get back to you in the next 24 hours</p>
          </div>
        </div>
      </div>
      <hr></hr>
      {/* footer */}
      <Footer/>
    </main>
  );
}



