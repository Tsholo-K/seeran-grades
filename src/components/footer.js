import Image from "next/image";
import Link from "next/link";


const MenuHeadings = {
    suite: {
    title: 'suite',
    subheadings: [ ['lists', '/lists'], ['mail', '/mail'], ['jobs', '/jobs'], ['network', '/network'], ],
  },
  support: {
    title: 'support',
    subheadings: [ ['help', '/help'], ['report bug', '/reportbug'] ],
  },
  about: {
    title: 'about',
    subheadings: [ ['seeran', '/about'], ],
  },
  legal: {
    title: 'legal',
    subheadings: [ ['terms', '/terms'], ['privacy', '/privacy'], ['security', '/security'], ],
  },
}

const MenuColoumn = ({Heading}) => {

  const title = Heading.title
  const subheadings = Heading.subheadings

  return (
      <div>
          <h1 className="pb-5 text-gray-400 font-normal flex gap-3">{title}</h1>
          {subheadings.map( subheading => (
              <div key={subheading} className=" text-start">
                  <Link href={`/pagenotfound`} className="hover:text-blue-700" >{subheading[0]}</Link>
              </div>
          ))}
      </div>
  )
}

const SocialLinks = {
    youtube : {
        url: '',
        icon: 'youtube',
        alt : 'youtube logo',
    },
    instagram : {
        url: '',
        icon: 'instagram',
        alt : 'instagram logo',
    },
    twitter : {
        url: '',
        icon: 'twitter',
        alt : 'twitter logo',
    },
    facebook : {
        url: '',
        icon: 'facebook',
        alt : 'facebook logo',
    }
}

const SocialsColomn = ({Socials}) => {
    return (
        <>
            <Link href={`/pagenotfound`} >
                <Image src={`/${Socials.icon}.svg`} alt={`${Socials.alt}`} height={0} width={0} className="w-full h-full lg:hover:scale-[1.1] focus:scale-[1.1] transition-all duration-500 ease-in-out" />
            </Link>
        </>
    )
}

// eslint-disable-next-line react/display-name
export default function Footer() {
    return (
        <div className="w-full flex justify-center bottom-0 py-7 px-7 mt-5">
            <div className=" max-w-[1600px] w-full sm:px-7 ">
                <div className="lg:flex w-full ">
                    <div className="w-full mb-7 max-lg:text-center">
                        <p className="font-bold text-6xl mb-4">seeran</p>
                        <p>Where <span className="text-[#66b0f0]">innovation</span> meets opportunity</p>
                    </div>
                    <div className="w-full flex justify-center max-sm:grid max-sm:grid-cols-2 lg:justify-end place-items-center font-extrabold sm:gap-20 gap-5">
                        <MenuColoumn Heading={MenuHeadings.suite}/>
                        <MenuColoumn Heading={MenuHeadings.support}/>
                        <MenuColoumn Heading={MenuHeadings.about}/>
                        <MenuColoumn Heading={MenuHeadings.legal}/>
                    </div>
                </div>
                <div className="lg:flex border-y-2 border-gray-200 border-opacity-50 my-10 py-10 lg:px-16">
                    <div className="w-full mb-4 max-lg:text-center">
                        <p className="text-2xl mb-3">Subscribe to our <span className="text-[#fe5244]">newsletter</span></p>
                        <p className="w-full text-gray-500">the latest news, articles, and updates, sent directly to your inbox.</p>
                    </div>
                    <div className="flex w-full px-5 justify-center lg:justify-end max-w-[400px] mx-auto">
                        <div className="flex max-h-[50px] w-full relative">
                            <input type="text" placeholder="enter your email" className="w-full transition-all duration-300 ease-in-out bg-gray-100 border-2 border-[#66b0f0] hover:border-[#66b0f0] focus:outline-none pl-4 lg:pr-28 py-1 rounded-md lg:hover:scale-[1.02] z-[1]"/>
                            <Image src={'/subscribe-to-newsletter.svg'} alt="subscribe-to-newsletter" width={0} height={0} className="h-full w-fit absolute py-[7px] right-[12px] cursor-pointer lg:hover:scale-[1.2] transition-all duration-500 ease-in-out z-[2]"/>
                        </div>
                    </div>
                </div>
                <div className="lg:flex px-5">
                    <div className="lg:w-full flex mb-5 gap-10 max-lg:justify-center">
                        <SocialsColomn Socials={SocialLinks.youtube}/>
                        <SocialsColomn Socials={SocialLinks.instagram}/>
                        <SocialsColomn Socials={SocialLinks.twitter}/>
                        <SocialsColomn Socials={SocialLinks.facebook}/>
                    </div>
                    <div className="lg:w-full flex lg:justify-end justify-center">
                        <p className="text-gray-500">© 2020 Seeran, Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
