import Image from "next/image"
import Link from "next/link"


const Menu = {
  email : {
    title: 'Email',
    info: 'email@example.com',
  },
  phonenumber : {
    title: 'Phone number',
    info: '0711740824',
  },
  twofactorauthentication : {
    title: 'Two-Factor Authentication',
    info: 'Off',
  },
  password : {
    title: 'Change password',
    info: '',
  },
}

const MenuLink = ({Menu}) => {
  return (
    <div className="relative flex py-3 gap-1 justify-start w-full px-3 cursor-pointer md:hover:text-blue-700">
      <p>{Menu.title}</p>
      <p className="text-gray-400 absolute right-9">{Menu.info}</p>
      <Image src={'/chevron-right-black.svg'} alt='try it button' width={10} height={10} className="w-fit h-fit absolute right-3"/>
    </div>
  )
}


const page = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center ">
      <div className="fixed top-0 pt-16 pb-1 w-full bg-gray-100">
        <Link href={'/profile'} className="flex w-full text-blue-700"><Image src={'/chevron-left.svg'} alt='back to main menu' height={20} width={20}/>profile</Link>
      </div>
      <div>
        <h1 className="w-full text-center pb-20 text-4xl">Sign-in and<br></br> Security</h1>
      </div>
      <div className="relative">
        <p className="text-sm text-gray-400 pl-2 pb-1">email and phone number</p>
        <div className="rounded-xl bg-white">
          <Link href={'/profile/security/email'}>
            <MenuLink Menu={Menu.email}/>
          </Link>
          <hr className="mx-5"></hr>
          <Link href={'/profile/security/phonenumber'}>
            <MenuLink Menu={Menu.phonenumber}/>
          </Link>
        </div>
        <p className="text-gray-400 mx-auto text-center text-sm pt-1">these can be used to sign-in to your account</p>
      </div>
      <div className="rounded-xl bg-white mt-20 ">
        <Link href={'/profile/security/mfa'} >
          <MenuLink Menu={Menu.twofactorauthentication}/>
        </Link>
        <hr className="mx-5"></hr>
        <Link href={'/profile/security/password'} className="text-blue-700">
          <MenuLink Menu={Menu.password}/>
        </Link>
      </div>
    </div>
  )
}

export default page