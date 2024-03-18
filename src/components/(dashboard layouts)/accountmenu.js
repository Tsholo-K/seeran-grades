import Image from "next/image";
import Link from "next/link";


const AccountMenu = ({ dashboard, user }) => {
  return (
    <div className="rounded-xl bg-white ">
        <Link href={`/${dashboard}dashboard/profile`} className="flex py-2 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
            <Image priority src={`/${user.image}.svg`} alt="profile icon" width={30} height={30} className="rounded-full w-fit h-fit max-h-16 max-w-16" />
            <div className="w-full">
                <p className="pt-3 ">{user.name.charAt(0).toUpperCase() + user.name.slice(1)} {user.surname.charAt(0).toUpperCase() + user.surname.slice(1)}</p>
                <p className="text-sm text-gray-400 ">profile settings</p>
            </div>
            <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit pt-5"/>
        </Link>
    </div>
  )
};

export default AccountMenu;