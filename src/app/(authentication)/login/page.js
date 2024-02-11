import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      {/* navigation bar */}
      <div className="fixed flex justify-center w-full pt-3 bg-white">
        <div className="flex w-full px-4 mx-auto max-w-7xl">
          <div className="w-full">
            <Link href="/">seeran <span className="text-blue-700">grades</span></Link>
          </div>
          <div className="w-full text-end">
            <Link href={'/parentsignin'} className="text-gray-400 hover:text-blue-700">sign in</Link>
          </div>
        </div>
      </div>
      {/* form */}
      <div className="min-h-screen w-full grid grid-cols-1 place-content-center px-4 max-w-4xl mx-auto">
        <Image src={'/login.svg'} alt="hero image" width={0} height={0} className="h-fit w-fit mx-auto"/>
        <div className="mx-auto w-full rounded-md">
          <div className="my-4">
            <input type="text" placeholder="email" className="border rounded-md px-5 py-1 w-full"/>
          </div>
          <div className="my-4">
            <input type="text" placeholder="password" className="border rounded-md px-5 py-1 w-full"/>
          </div>
          <button className="w-full border border-white rounded-xl bg-black active:bg-blue-700 text-white hover:bg-blue-700 lg:hover:scale-[1.01] transition-all duration-500 py-1">login</button>
        </div>  
      </div>
    </>
  )
};

export default LoginPage;