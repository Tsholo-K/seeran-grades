{/* components */}
import Admindashboard from "@/components/(dashboard layouts)/admindashboard";


export default function ParentDashboardLandingPage() {
    return (
      <>
        <div>
          {/* parent dashboard for large screens */}
          <div className="lg:hidden block h-screen">           
            <Admindashboard />
          </div>
          {/* desktop view */}
          <div className="w-full hidden lg:block pt-16">
          </div>
        </div>
      </>
    )
}
