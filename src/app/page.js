import Image from "next/image";
import Link from "next/link";

{/* components */}
import Footer from "@/components/footer";


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
      <div className= {`flex ${ side === 'right' ? 'justify-end' : 'justify-start'}`}>
        <Image src={`/${image}.svg`} alt="seeran grades hero image" height={0} width={0} className={`h-fit w-full md:w-[50%]`}/>
      </div>
      <hr className="max-w-screen-xl mx-5 sm:mx-auto"></hr>
    </>
  )
}


export default function Home() {
  return (
    <main className="bg-gray-100">
      <div className="">
        {/* landing section */}
        <div className="h-screen relative max-w-screen-xl mx-auto">
          <div className="w-full pt-32">
            <h1 className="text-5xl sm:text-8xl lg:text-9xl text-center">seeran grades</h1>
            <p className="text-sm text-center text-gray-500 pt-3 lg:text-base">a comprehensive school management system</p>
          </div>
          {/* sign in section */}
          <div className="md:hidden">
            <div className="mt-10">
              <Link href={"/signin"} className="flex cursor-pointer w-fit mx-auto py-2 pl-6 pr-3 lg:hover:scale-[1.2] transition-all duration-500 ease-in-out gap-2 rounded-full text-white bg-black hover:bg-blue-700 mb-2">
                <p>try it out</p>
                <Image src={'/chevron-right.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
              </Link>
            </div>
            <p className="mb-8 text-base text-center">Already have an account? <a className=" text-blue-700" href="/login">login</a></p>
          </div>
          <Image priority src={'/main-hero.svg'} alt="hero image" width={1000} height={1000} className="md:h-[80%] w-full md:w-fit absolute bottom-0 right-0"/>
        </div>
        {/* how it works section */}
        <div className="w-full pt-3 max-w-screen-xl mx-auto">
          <p className="w-full text-center text-base">how it works</p>
          <div className="flex w-full justify-center">
            <Image src={'/chevron-down.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
          </div>
          <hr className="mx-5 my-3"></hr>
        </div>
        {/* intro section */}
        <Section 
          heading={"In today's digital age.."}
          paragraph={'Effective communication between schools, students, parents and teachers is vital for academic success. Seeran Grades bridges this gap, offering a robust platform for seamless interaction and academic monitoring.'}
          image={'second-hero'}
          side={'left'} 
        />
        <Section 
          heading={"key features"}
          paragraph={`Student and Parent Portal: Access to grades, assignments, announcements, and school events. Teacher Dashboard: Grade submissions, communication with students and parents, and assignment tracking. Mobile Accessibility: Accessible anytime, anywhere`}
          image={'key-features'}
          side={'right'} 
        />
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
      <Footer/>
    </main>
  );
}
