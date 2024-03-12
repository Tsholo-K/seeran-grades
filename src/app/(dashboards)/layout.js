{/* components */}
import NavigationBar from "@/components/(general components)/navigationbar";


export default function ParentDashboardLayout({ children }) {  
  return (
    <>
      <div>
        {/* navigation bar */}
        <NavigationBar left_link={false} left_logo_small={''} left_logo_large={''} right_link={false} max={false}/>
        {/* body */}
        <div className="pt-16 relative max-w-[1480px] mx-auto">
            {children}
        </div>
      </div>
    </>
  );
}
