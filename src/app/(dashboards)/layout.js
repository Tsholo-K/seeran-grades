import Link from "next/link";
import Image from "next/image";

{/* components */}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        {/* navigation bar */}  
        <div className="fixed top-0 flex justify-center w-full pt-3 pb-1 bg-gray-100 z-10">
            <div className="flex w-full px-4 sm:px-7 mx-auto">
                <div className="w-full">
                    <p className=""><Image priority src={'/favicon.svg'} alt="hero image" width={0} height={0} className="h-[35px] w-[35px]"/></p>
                </div>
            </div>
        </div>
        {/* body */}
        <div className="text-black pt-16 pb-10 w-full px-3 lg:px-4 bg-gray-100">
            {children}
        </div>
      </body>
    </html>
  );
}
