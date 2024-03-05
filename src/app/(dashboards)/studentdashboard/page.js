{/* components */}
import Studentdashboard from "@/components/(dashboard layouts)/studentdashboard";


export default function StudentDashboardLandingPage() {
    return (
      <>
        <div>
          {/* student dashboard for mobile */}
          <div className="lg:hidden block">
            <Studentdashboard/>
            <p className="fixed bottom-3 w-full text-center text-sm text-gray-500">seeran limited</p>
          </div>
          {/* desktop view */}
          <div className="w-full hidden lg:block pt-16">
          </div>
        </div>
      </>
    )
}
