import Link from "next/link";
import Image from "next/image";


const UserMenu = ({ all_users, dashboard, section, grade=true, url=true }) => {
  return (
    <>
        { all_users.map( (user, index) => (
            <div key={index}>
                {
                    url 
                    ?
                    <Link href={`/${dashboard}dashboard/${section}/${user.id}`} className="flex py-2 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
                        <Image priority src={`/${user.image}.svg`} alt="profile icon" width={30} height={30} className="w-fit rounded-full h-fit max-h-16 max-w-16" />
                        <div className="pt-3 w-full">
                            <p className={`font-bold`}>{user.name.charAt(0).toUpperCase() + user.name.slice(1)} {user.surname.charAt(0).toUpperCase() + user.surname.slice(1)}</p>
                            {
                                grade 
                                ?
                                <p className="text-sm text-gray-500">grade: {user.grade}</p>
                                :
                                <p className="text-sm text-gray-500"> {user.id}</p>
                            }
                            
                        </div>
                        <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit pt-5"/>
                    </Link>
                    :
                    <div  className="flex py-2 gap-5 px-3 justify-start w-full cursor-pointer rounded-full md:hover:text-blue-700">
                        <Image priority src={`/${user.image}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit rounded-full max-h-16 max-w-16" />
                        <div className="pt-3 w-full">
                            <p className={`font-bold`}>{user.name.charAt(0).toUpperCase() + user.name.slice(1)} {user.surname.charAt(0).toUpperCase() + user.surname.slice(1)}</p>
                            {
                                grade 
                                ?
                                <p className="text-sm text-gray-500">grade: {user.grade}</p>
                                :
                                <p className="text-sm text-gray-500"> {user.id}</p>
                            }
                        </div>
                    </div>
                }
                {
                    ( all_users.length > 1  &&  index !== all_users.length - 1) &&
                    <hr className="mx-5"></hr>
                }
            </div>
        ))
      }
    </>
  )
}

export default UserMenu;