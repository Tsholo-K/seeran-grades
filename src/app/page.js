import Image from "next/image";
import Link from "next/link";


const categorySubHeadings = {
  heading1: {
    title: 'suite',
    subheadings: [ 'lists', 'mail', 'jobs', 'network', ],
  },
  heading2: {
    title: 'support',
    subheadings: [ 'help', 'report bug' ],
  },
  heading3: {
    title: 'about',
    subheadings: [ 'seeran', ],
  },
  heading4: {
    title: 'legal',
    subheadings: [ 'terms', 'privacy', 'security', ],
  },
}


const MenuColoumnSections = ({subHeadings}) => {

  const title = subHeadings.title
  const subheadings = subHeadings.subheadings

  return (
      <div>
          <h1 className="pb-5 text-gray-400 font-normal flex gap-3">{title}</h1>
          {subheadings.map( subheading => (
              <div key={subheading} className=" text-start">
                  <Link href={`/${subheading}`} className="hover:text-blue-700" >{subheading}</Link><br/>
                  
              </div>
          ))}
      </div>
  )
}

export default function Home() {
  return (
    <main className="text-base">
      {/* navigation bar */}
      <div className="fixed flex w-full py-3 px-4 bg-white">
        <div className="w-full">
          <Link href="/">seeran <span className="text-blue-700">grades</span></Link>
        </div>
        <div className="w-full text-end">
          <Link href="/login" class="text-gray-400 transition-all duration-300 hover:text-blue-700">try it</Link>
        </div>
      </div>
      <p className="text-gray-300 hover:text-gray-700 w-full text-center pt-10">prototype v1</p>
      {/* body */}
      <div className="w-full px-5 pt-10 mb-10">
        {/* hero section */}
        <div className="w-full sm:flex mb-4">
          {/* left/top side hero section */}
          <div className="w-full sm:w-2/5">
            <h1 className="mb-10">
              <span className="text-blue-700">Track </span>everything... <br></br><span className="text-6xl"> important</span>
            </h1>
            {/* sign in button */}
            <Link href="/" className="flex w-fit py-2 pl-4 pr-3 lg:hover:scale-[1.2] transition-all duration-500 ease-in-out gap-2 rounded-full text-white bg-black hover:bg-blue-700 mb-2">
              <p className="" >try it out</p>
              <Image src={'/chevron-right.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
            </Link>
            <p className="mb-16">Already have an account? <a className=" text-blue-700" href="/login">login</a></p>
          </div>
          {/* right/bottom side hero section */}
          <div className="w-full sm:w-3/5">
            <Image src={'/umbrella_hero_image.svg'} alt="hero image" width={0} height={0} className="h-full w-full"/>
          </div>
        </div>
        {/* how it works section */}
        <p className="w-full text-center">How it works</p>
        <div className="flex w-full justify-center">
          <Image src={'/chevron-down.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
        </div>
        <hr className="mt-3 mb-10"></hr>
        {/* opening paragraph section */}
        <h2 className="mb-10 text-[40px] text-center">seeran <span className="text-blue-700">grades</span></h2>
        <p className="w-full text-center mb-10">A Comprehensive School Management System</p>
        <Image src={'/second-hero.svg'} alt="seeran grades hero image" height={0} width={0} className="w-full h-full mb-4"/>
        <p className="w-full text-center">
          In today&apos;s digital age, effective communication between schools, students, parents and teachers is vital for academic success. 
          Seeran Grades bridges this gap, offering a robust platform for seamless interaction and academic monitoring.
        </p>
        {/* key features section */}
        <h2 className="my-10 text-3xl text-center"><span className="text-blue-700">Key </span>Features</h2>
        <Image src={'/key-features.svg'} alt="seeran grades hero image" height={0} width={0} className="w-full h-full mb-4"/>
        <p className="w-full text-center my-4">Student and Parent Portal: Access to grades, assignments, announcements, and school events.</p>
        <p className="w-full text-center my-4">Teacher Dashboard: Grade submissions, communication with students and parents, and assignment tracking.</p>
        <p className="w-full text-center my-4">Mobile Accessibility: Accessible anytime, anywhere</p>
        {/* Student and Parent Portal section */}
        <h2 className="my-10 text-3xl text-center">Student and Parent <br></br><span className="text-blue-700">Portal</span></h2> 
        <Image src={'/student-parent-portal.svg'} alt="seeran grades hero image" height={0} width={0} className="w-full h-full mb-4"/>
        <p className="w-full text-center my-4">Students and parents can log in to view:</p>
        <p className="w-full text-center my-4">Assignments: Details of upcoming assignments, deadlines, and submission status.</p>
        <p className="w-full text-center my-4">Announcements: Important updates and announcements from the school..</p>
        <p className="w-full text-center my-4">Messaging: Direct communication with teachers and school administrators.</p>
        {/* teacher dashboard section */}
        <h2 className="my-10 text-3xl text-center">Teacher <span className="text-blue-700">Dashboard</span></h2>
        <Image src={'/teacher-dashboard.svg'} alt="seeran grades hero image" height={0} width={0} className="w-full h-full mb-4"/>      
        <p className="w-full text-center my-4">Empowering teachers with tools to streamline academic management:</p>
        <p className="w-full text-center my-4">Grade Submission: Effortless submission and tracking of grades for each student.</p>
        <p className="w-full text-center my-4">Communication: Direct messaging with parents for feedback and updates.</p>
        <p className="w-full text-center my-4">Assignment Tracking: Monitoring assignment progress and providing timely feedback.</p>
        {/* but why seeran section */}
        <h2 className="my-10 text-3xl text-center">
          But... why <br></br>seeran <span className="text-blue-700">grades</span>
        </h2>
        <Image src={'/why-seeran.svg'} alt="seeran grades hero image" height={0} width={0} className="w-full h-full mb-4"/>
        <p className="w-full text-center my-4">
          seeran grades offers a transformative solution to the age-old challenge of effective communication and academic management in educational
          institutions. 
        </p>
        <p className="w-full text-center my-4">
          By providing a centralized platform accessible to students, parents, teachers, and school administrators.
        </p>
        <p className="w-full text-center my-4">
          seeran grades revolutionizes the way we interact, collaborate, and monitor academic progress. Parents are empowered with real-time access
          to their child&apos;s grades and assignments, fostering active involvement in their educational journey.
        </p>
        <p className="w-full text-center my-4">
          Teachers benefit from streamlined administrative tasks and enhanced 
          communication channels, enabling them to provide timely feedback and support to students and parents.
        </p>
        <p className="w-full text-center my-4">
          With Seeran Grades, education becomes a collaborative effort where
          communication meets academic achievement, laying the foundation for a brighter future for students and schools alike.
        </p>
      </div>
      {/* footer */}
      <div className="w-full bottom-0 border-t-2 border-opacity-30 border-gray-200 py-7 px-7">
        <div className="max-w-[1450px] w-full">
          <div className="lg:flex w-full ">
            <div className="w-full mb-7 max-lg:text-center">
              <p className="font-bold text-6xl mb-4">seeran</p>
              <p>Where <span className="text-blue-700">innovation</span> meets opportunity</p>
            </div>
            <div className="w-full flex justify-center max-sm:grid max-sm:grid-cols-2 lg:justify-end place-items-center font-extrabold sm:gap-20 gap-5">
              <MenuColoumnSections subHeadings={categorySubHeadings.heading1}/>
              <MenuColoumnSections subHeadings={categorySubHeadings.heading2}/>
              <MenuColoumnSections subHeadings={categorySubHeadings.heading3}/>
              <MenuColoumnSections subHeadings={categorySubHeadings.heading4}/>
            </div>
          </div>
          <div className="lg:flex border-y-2 border-gray-200 border-opacity-50 my-10 py-10 lg:px-16">
            <div className="w-full mb-4 max-lg:text-center">
              <p className="text-2xl mb-3">Subscribe to our <span className="text-blue-700">newsletter</span></p>
              <p className="w-full text-gray-500">the latest news, articles, and updates, sent directly to your inbox.</p>
            </div>
            <div className="flex w-full justify-center lg:justify-end">
              <input type="text" placeholder="enter your email" className="transition duration-300 ease-in-out bg-none border-2 border-blue-700 hover:border-blue-700 pl-4 lg:pr-28 py-1 rounded-lg"/>
            </div>
          </div>
          <div className="lg:flex px-5">
            <div className="lg:w-full flex mb-5 gap-10 max-lg:justify-center">
              <Link href={''} >
                <Image src={'/youtube.svg'} alt="youtube logo" height={0} width={0} className="hover:opacity-60 w-full h-full" />
              </Link>
              <Link href={''}>
                <Image src={'/instagram.svg'} alt="youtube logo" height={0} width={0} className="hover:opacity-60 w-full h-full"/>
              </Link>
              <Link href={''}>
                <Image src={'/twitter.svg'} alt="youtube logo" height={0} width={0} className="hover:opacity-60 w-full h-full"/>
              </Link>
              <Link href={''}>
                <Image src={'/github.svg'} alt="youtube logo" height={0} width={0} className="hover:opacity-60 w-full h-full"/>
              </Link>
              <Link href={''}>
                <Image src={'/facebook.svg'} alt="youtube logo" height={0} width={0} className="hover:opacity-60 w-full h-full" />
              </Link>          
            </div>
            <div className="lg:w-full flex lg:justify-end justify-center">
              <p className="text-gray-500">© 2020 Seeran, Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
