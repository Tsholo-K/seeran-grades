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
              {/* parent dashboard */}
              <Studentdashboard />
            </div>
            {/* body */}
            <div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
