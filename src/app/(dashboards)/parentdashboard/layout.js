{/* components */}
import Parentdashboard from "@/components/(dashboard layouts)/parentdashboard";


export default function ParentDashboardLayout({ children }) {
  return (
    <div className="lg:flex gap-10">
      {/* side menu for large screens */}
      <div className="hidden lg:block w-[40%] max-w-[400px] h-screen">
        <div className="fixed w-[27%] max-w-[400px]">
          {/* parent dashboard */}
          <Parentdashboard/>
        </div>
      </div>
      {/* body */}
      <div className="w-full pb-40">
        {children}
      </div>
    </div>
  );
}
