import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      {/* navigation bar */}
      <div className="fixed flex w-full pt-3 px-4 bg-white">
        <div className="w-full">
          <p>seeran</p>
        </div>
        <div className="w-full text-end">
        </div>
      </div>
      {/* form */}
      <div className="min-h-screen w-full grid grid-cols-1 place-content-center px-7">
        <p className="w-full text-center text-4xl mb-4">Sign in</p>
        <Image src={'/signin-hero.svg'} alt="hero image" width={0} height={0} className="h-fit w-fit"/>
        <div className="mx-auto w-full rounded-md">
          <div className="my-4">
            <input type="text" placeholder="name" className="border rounded-md px-5 py-1 w-full"/>
          </div>
          <div className="my-4">
            <input type="text" placeholder="surname" className="border rounded-md px-5 py-1 w-full"/>
          </div>
          <div className="my-4">
            <input type="text" placeholder="age" className="border rounded-md px-5 py-1 w-full"/>
          </div>
          <div className="my-4">
            <input type="text" placeholder="grade" className="border rounded-md px-5 py-1 w-full"/>
          </div>
          <div className="my-4">
            <select type="text" className="border rounded-md py-1 w-full text-center text-gray-400">
              <option disabled selected>--- province ---</option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>
          <div className="my-4">
            <select type="text" className="border rounded-md py-1 w-full text-center text-gray-400">
              <option disabled selected>--- school ---</option>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>
        </div>  
      </div>
      <div className="h-10"></div>
    </>
  )
};

export default LoginPage;