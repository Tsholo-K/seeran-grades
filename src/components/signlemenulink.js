import Link from "next/link"
import Image from "next/image"

const SingleMenuLink = ({ title, url, icon=null, border=false }) => {
    return (
        <>
            <div className={`rounded-xl ${ border ? ' bg-white my-10' : ''}`}>
                <>
                <Link href={`${url}`} className="relative flex gap-6 py-3 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
                    <p className={`absolute right-12 font-extrabold`}></p>
                    {
                        icon
                        ? (
                            <Image src={`/${icon}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-10" />
                        )
                        : null
                    }
                    <p className={`w-full`}>{title}</p>
                    <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit"/>
                </Link>
                </>
            </div>
        </>
    )
};
  
export default SingleMenuLink;