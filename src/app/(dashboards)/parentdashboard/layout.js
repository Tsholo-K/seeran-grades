import Link from "next/link";
import Image from "next/image";

{/* components */}
import NavigationBar from "@/components/navigationbar";


export default function DashboardLayout({ children }) {
  return (
      <div>
        {/* body */}
        <div className="text-black font-bold pt-16 pb-3 w-full px-3 lg:px-4 bg-gray-100">
          {children}
        </div>
      </div>
  );
}
