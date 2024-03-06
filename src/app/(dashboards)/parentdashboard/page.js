{/* components */}
import Parentdashboard from "@/components/(dashboard layouts)/parentdashboard";


export default function ParentDashboardLandingPage() {
    return (
      <>
        <div>
          {/* parent dashboard for small screens */}
          <div className="lg:hidden ">           
            <Parentdashboard />
          </div>
          {/* desktop view */}
          <div className="w-full hidden lg:block pt-16">
          </div>
        </div>
      </>
    )
}
