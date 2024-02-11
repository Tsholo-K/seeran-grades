import Image from "next/image";
import Link from "next/link";

const SigninPage = () => {
  return (
    <>
      {/* navigation bar */}
      <div className="fixed flex justify-center w-full pt-3 bg-white">
        <div className="flex w-full px-4 mx-auto max-w-7xl">
          <div className="w-full">
            <Link href="/">seeran <span className="text-blue-700">grades</span></Link>
          </div>
          <div className="w-full text-end">
            <Link href={'/parentsignin'} className="text-gray-400 hover:text-blue-700">I&apos;m a parent</Link>
          </div>
        </div>
      </div>
      {/* form */}
      <div className="min-h-screen w-full grid grid-cols-1 place-content-center px-4 max-w-4xl mx-auto">
        <Image src={'/signin-hero.svg'} alt="hero image" width={0} height={0} className="h-fit w-fit mx-auto"/>
        <div className="mx-auto w-full rounded-md">
          <div className="my-4">
            <input type="text" placeholder="email" className="border rounded-md px-5 py-1 w-full"/>
          </div>
          <div className="my-4">
            <input type="text" placeholder="phone number" className="border rounded-md px-5 py-1 w-full"/>
          </div>
          <div className="my-4">
            <input type="text" placeholder="grade" className="border rounded-md px-5 py-1 w-full"/>
          </div>
          <div className="my-4">
            <select type="text" className="border rounded-md py-1 w-full text-center text-gray-400">
              <option disabled selected>--- province ---</option>
              <option>Eastern Cape</option>
              <option>Free State</option>
              <option>Gauteng</option>
              <option>KwaZulu-Natal</option>
              <option>Limpopo, Mpumalanga</option>
              <option>Northern Cape</option>
              <option>North West</option>
              <option>Western Cape</option>
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
          <button className="w-full border border-white rounded-xl bg-black active:bg-blue-700 text-white hover:bg-blue-700 lg:hover:scale-[1.01] transition-all duration-500 py-1">submit</button>
          <p className="text-sm w-full text-center pt-3 text-gray-400">Already have an account? <Link href={'/login'} className=" text-blue-700 ">login</Link></p>
        </div>  
      </div>
    </>
  )
};

export default SigninPage;