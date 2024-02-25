import Image from "next/image";

const Menu= ({ title, info, border=false, icon=false }) => {
    return (
        <>
            <div className={`rounded-xl  ${ border && 'bg-white'}`}>
                <div className="relative flex py-3 gap-1 justify-start w-full px-3 cursor-pointer">
                    <p>{title}</p>
                    {
                        icon
                        ? (
                            <>
                                <p className={`text-gray-400 absolute right-10`}>{info}</p>
                                <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit absolute right-3"/>
                            </>
                        )
                        : (
                            <>
                                <p className={`text-gray-400 absolute right-4`}>{info}</p>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
};

export default Menu;