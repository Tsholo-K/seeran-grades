import Link from "next/link";
import Image from "next/image";


const Section = ({ left_logo_large, left_logo_small }) => {
  return (
    <>
      {
        left_logo_large === 'text'
        ? (
          <>
            <p className="md:block hidden">seeran grades</p>
          </>
        )
        : (
          <>
            <Image src={'/favicon.svg'} alt="hero image" width={0} height={0} className="h-[35px] w-[35px] hidden md:block"/>
          </>
        )
      }
      {
        left_logo_small === 'text'
        ? (
          <>
            <p className="md:hidden">seeran grades</p>
          </>
        )
        : (
          <>
            <Image src={'/favicon.svg'} alt="hero image" width={0} height={0} className="h-[35px] w-[35px] md:hidden"/>
          </>
        )
      }
    </>
  )
}

export default function NavigationBar({ left_link=false, left_logo_small, left_logo_large, right_link=false, right_link_url, right_text }) {
  return (
    <div className="fixed flex justify-center w-full py-3 bg-gray-100 z-[3]">
        <div className="flex w-full px-4 sm:px-7 md:px-10 mx-auto max-w-[1700px]">
          {/* left logo section */}
          <div className="w-full">
            {
              left_link
              ?(
                <>
                  <Link href={'/'}>
                    <Section  left_logo_large={left_logo_large} left_logo_small={left_logo_small} />
                  </Link>
                </>
              )
              : (
                <>
                  <Section  left_logo_large={left_logo_large} left_logo_small={left_logo_small} />
                </>
              )
            }
          </div>
          {/* right link section */}
          <div className="w-full text-end">
            {
              right_link
              ? (
                <Link href={right_link_url} className="text-gray-400 font-extrabold transition-all ease-in-out duration-500 hover:text-[#66b0f0]">{right_text}</Link>
              ) 
              : null
            }
          </div>
        </div>
    </div>
  )
};
