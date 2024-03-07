import Link from "next/link";
import Image from "next/image";


const ChildMenu = ({ all_children, dashboard, section, grade=true }) => {
  return (
    <>
        { all_children.map( (child, index) => (
            <>
                <div key={index}>
                    <Link href={`/${dashboard}dashboard/${section}/${child.id}`} className="flex py-2 gap-5 px-3 justify-start w-full cursor-pointer md:hover:text-blue-700">
                        <Image priority src={`/${child.image}.svg`} alt="profile icon" width={30} height={30} className="w-fit h-fit max-h-16 max-w-16" />
                        <div className="pt-3 w-full">
                            <p className={`font-bold`}>{child.name.charAt(0).toUpperCase() + child.name.slice(1)} {child.surname.charAt(0).toUpperCase() + child.surname.slice(1)}</p>
                            {
                                grade 
                                ?
                                <p className="text-sm text-gray-500">grade: {child.grade}</p>
                                :
                                <p className="text-sm text-gray-500"> {child.student_number}</p>
                            }
                            
                        </div>
                        <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit pt-5"/>
                    </Link>
                    {
                        ( all_children.length > 1  &&  index !== all_children.length - 1) &&
                        <hr className="mx-5"></hr>
                    }
                </div>
            </>
        ))
      }
    </>
  )
}

export default ChildMenu;