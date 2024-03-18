{/* components */}
import Teacherdashboard from "@/components/(dashboard layouts)/teacherdashboard";


export default function ParentDashboardLayout({ children }) {
  return (
    <div>
      <div className="lg:flex lg:gap-10">
        {/* side menu for large screens */}
        <div className="hidden lg:block mb-10 w-[40%] max-w-[400px]">
          <div className="fixed h-full pb-10 w-[27%] max-w-[400px]">
            {/* parent dashboard */}
            <Teacherdashboard/>
          </div>
        </div>
        {/* body */}
        <div className="w-full pb-40 mx-0 px-0">
          {children}
        </div>
      </div>
    </div>
  );
}
