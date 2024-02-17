import Image from "next/image";

{/* components */}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-semibold antialiased bg-gray-100`}>
        {/* navigation bar */}  
        <div className="fixed top-0 flex justify-center w-full pt-3 pb-1 bg-gray-100 z-10">
            <div className="flex w-full px-4 sm:px-7 mx-auto">
                <div className="w-full">
                    <p className=""><Image priority src={'/favicon.svg'} alt="hero image" width={0} height={0} className="h-[35px] w-[35px]"/></p>
                </div>
            </div>
        </div>
        <div className="h-screen relative bg-gray-100 z-0">
          {/* body */}
          <div className="text-black pt-16 w-full px-3 h-full">
              {children}
          </div>
          <p className="absolute bottom-1 w-full text-center text-gray-400 text-sm bg-gray-100">seeran limited</p>
        </div>
      </body>
    </html>
  );
}
