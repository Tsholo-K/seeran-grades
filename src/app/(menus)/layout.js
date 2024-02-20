import Image from "next/image";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`relative font-semibold antialiased bg-gray-100`}>
        {/* navigation bar */}  
        <div className="fixed top-0 flex justify-center w-full pt-3 pb-1 bg-gray-100 z-[3]">
            <div className="flex w-full px-4 sm:px-7 mx-auto">
                <div className="w-full">
                  <Image priority src={'/favicon.svg'} alt="hero image" width={0} height={0} className="h-[35px] w-[35px]"/>
                </div>
            </div>
        </div>
        {/* body */}
        <div className="text-black pt-32 w-full pb-20 px-3 bg-gray-100">
            {children}
        </div>
      </body>
    </html>
  );
}
