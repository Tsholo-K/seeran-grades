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
          <div className="">
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
          paragraph={'Effective communication between schools, students, parents and teachers is vital for academic success. Seeran Grades bridges this gap, offering a robust platform for seamless interaction and academic monitoring.'}
          image={'key-features'}
          side={'right'} 

        />
      </div>
    </main>
  );
}


const nothing = ( ) => {
  return (
    <>
      <div className="w-full px-3 sm:px-10 md:px-14 mb-10 mx-auto">
            <div className="pt-32">
            </div>
            {/* how it works section */}
            <p className="w-full text-center text-base">How it works</p>
            <div className="flex w-full justify-center">
              <Image src={'/chevron-down.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
            </div>
            <hr className="my-3"></hr>
            {/* opening paragraph section */}
            <div>
              <div>
                <h2 className="mb-10 text-[40px] sm:text-5xl text-center">seeran <span className="text-blue-700">grades</span></h2>
              </div>
              <div className="lg:flex w-full">
                <Image src={'/second-hero.svg'} alt="seeran grades hero image" height={0} width={0} className="w-fit h-fit mx-auto max-h-[200px] lg:max-h-[450px]"/>
                <div className="lg:w-full">
                  <p className="w-full text-center">
                    In today&apos;s digital age, effective communication between schools, students, parents and teachers is vital for academic success. 
                    Seeran Grades bridges this gap, offering a robust platform for seamless interaction and academic monitoring.
                  </p>
                </div>
              </div>
            </div>
            <hr className="my-10"></hr>
            {/* key features section */}
            <div>
              <div>
                  <h2 className="mt-10 mb-11 text-3xl text-center sm:text-4xl"><span className="text-blue-700">Key </span>Features</h2>
              </div>
              <div className="lg:flex w-full">
                <div className="lg:grid grid-cols-1 place-content-center">
                  <p className="w-full text-center my-4">Student and Parent Portal: Access to grades, assignments, announcements, and school events.</p>
                  <p className="w-full text-center my-4">Teacher Dashboard: Grade submissions, communication with students and parents, and assignment tracking.</p>
                  <p className="w-full text-center my-4">Mobile Accessibility: Accessible anytime, anywhere</p>
                </div>
                <Image src={'/key-features.svg'} alt="seeran grades hero image" height={0} width={0} className="w-full h-full mb-4 max-h-[400px] lg:max-h-[600px]"/>
              </div>
            </div>
            <hr className="my-10"></hr>
            {/* Student and Parent Portal section */}
            <div>
              <div>
                <h2 className="my-10 text-3xl text-center sm:text-4xl">Student and Parent <br className="md:hidden"></br><span className="text-blue-700">Portal</span></h2> 
              </div>
              <div className="lg:flex w-full">
                <Image src={'/student-parent-portal.svg'} alt="seeran grades hero image" height={0} width={0} className="w-full h-full mb-4 max-h-[400px] lg:max-h-[600px]"/>
                <div className="lg:grid grid-cols-1 place-content-center">
                  <p className="w-full text-center my-4">Assignments: Details of upcoming assignments, deadlines, and submission status.</p>
                  <p className="w-full text-center my-4">Announcements: Important updates and announcements from the school..</p>
                  <p className="w-full text-center my-4">Messaging: Direct communication with teachers and school administrators.</p>
                </div>
              </div>
            </div>
            <hr className="my-10"></hr>
            {/* teacher dashboard section */}
            <div>
              <div>
                <h2 className="my-10 text-3xl text-center sm:text-4xl">Teacher <span className="text-blue-700">Dashboard</span></h2>
              </div>
              <div className="lg:flex w-full">
                <div className="lg:grid grid-cols-1 place-content-center">
                  <p className="w-full text-center my-4">Grade Submission: Effortless submission and tracking of grades for each student.</p>
                  <p className="w-full text-center my-4">Communication: Direct messaging with parents for feedback and updates.</p>
                  <p className="w-full text-center my-4">Assignment Tracking: Monitoring assignment progress and providing timely feedback.</p>
                </div>
                <Image src={'/teacher-dashboard.svg'} alt="seeran grades hero image" height={0} width={0} className="w-full h-full mb-4 max-h-[400px] lg:max-h-[600px]"/>
              </div>
            </div>
            <hr className="my-10"></hr>
            {/* but why seeran section */}
            <div>
              <h2 className="my-10 text-3xl text-center sm:text-4xl">
                But... why <br className="md:hidden"></br>seeran <span className="text-blue-700">grades</span>
              </h2>
              <Image src={'/why-seeran.svg'} alt="seeran grades hero image" height={0} width={0} className="w-full h-full mb-4 max-h-[400px] lg:max-h-[600px]"/>
              <p className="w-full text-center my-4">
                seeran grades offers a transformative solution to the age-old challenge of effective communication and academic management in educational
                institutions. 
                By providing a centralized platform accessible to students, parents, teachers, and school administrators.
                seeran grades revolutionizes the way we interact, collaborate, and monitor academic progress. Parents are empowered with real-time access
                to their child&apos;s grades and assignments, fostering active involvement in their educational journey.
                Teachers benefit from streamlined administrative tasks and enhanced 
                communication channels, enabling them to provide timely feedback and support to students and parents.
                With Seeran Grades, education becomes a collaborative effort where
                communication meets academic achievement, laying the foundation for a brighter future for students and schools alike.
              </p>
            </div>
      </div>
      {/* footer */}
      <Footer/>
    </>
      
  )
}
