{/* components */}
import Studentdashboard from "@/components/(dashboard layouts)/studentdashboard";


export default function ParentDashboardLandingPage() {
    return (
      <>
        <div className="h-full">
          {/* teacherdashboard for mobile screens */}
          <div className="lg:hidden h-full">           
            <Studentdashboard />
            <p className="fixed bottom-3 w-full text-center text-sm text-gray-500">seeran limited</p>
          </div>
          {/* desktop view */}
          <div className="w-full hidden lg:block">
          </div>
        </div>
      </>
    )
}
