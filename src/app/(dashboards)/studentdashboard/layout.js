{/* components */}
import Studentdashboard from "@/components/(dashboard layouts)/studentdashboard";



export default function StudentDashboardLayout({ children }) {  
  return (
    <>
      <div>
        <div className="mx-3 lg:mx-5">
          <div className="lg:flex gap-10">
            {/* side menu for large screens */}
            <div className="hidden lg:block relative w-[40%] max-w-[400px] h-screen">
              <div className="fixed w-[27%] max-w-[400px]">
                {/* parent dashboard */}
                <Studentdashboard />
              </div>
            </div>
            {/* body */}
            <div className="w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
