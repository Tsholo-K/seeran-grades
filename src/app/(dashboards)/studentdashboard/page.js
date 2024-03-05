{/* components */}
import Studentdashboard from "@/components/(dashboard layouts)/studentdashboard";


export default function StudentDashboardLandingPage() {
    return (
      <>
        <div>
          {/* student dashboard for mobile */}
          <div className="lg:hidden block">
            <Studentdashboard/>
          </div>
          {/* desktop view */}
          <div className="w-full hidden lg:block pt-16">
          </div>
        </div>
      </>
    )
}
