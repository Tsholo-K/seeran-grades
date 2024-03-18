{/* components */}
import Admindashboard from "@/components/(dashboard layouts)/admindashboard";


export default function ParentDashboardLayout({ children }) {
  return (
    <div className="lg:flex gap-10">
      {/* side menu for large screens */}
      <div className="hidden lg:block mb-10 w-[40%] max-w-[400px]">
        <div className="fixed h-full pb-10 w-[27%] max-w-[400px]">
          {/* parent dashboard */}
          <Admindashboard/>
        </div>
      </div>
      {/* body */}
      <div className="w-full pb-40">
        {children}
      </div>
    </div>
  );
}
