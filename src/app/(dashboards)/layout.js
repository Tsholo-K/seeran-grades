import Link from "next/link";
import Image from "next/image";

{/* components */}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-gray-100 antialiased`}>
        {/* navigation bar */}  
        <div className="fixed top-0 flex justify-center w-full pt-3 pb-1 bg-gray-100 z-10">
            <div className="flex w-full px-4 sm:px-7 mx-auto">
                <div className="w-full">
                    <p className=""><Image priority src={'/favicon.svg'} alt="hero image" width={0} height={0} className="h-[35px] w-[35px]"/></p>
                </div>
            </div>
        </div>
        <div className="min-h-screen relative bg-gray-100 z-0 font-semibold">
          {/* body */}
          <div className="text-black pt-16 w-full px-3 lg:px-4">
              {children}
          </div>
          <p className=" absolute bottom-0 w-full text-center text-gray-400 text-sm bg-gray-100 pb-3">seeran limited</p>
        </div>
      </body>
    </html>
  );
}