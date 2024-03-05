{/* components */}
import Teacherdashboard from "@/components/(dashboard layouts)/teacherdashboard";


export default function ParentDashboardLandingPage() {
    return (
      <>
        <div className="h-full">
          {/* teacherdashboard for mobile screens */}
          <div className="lg:hidden h-full">           
            <Teacherdashboard />
          </div>
          {/* desktop view */}
          <div className="w-full hidden lg:block">
          </div>
        </div>
      </>
    )
}
