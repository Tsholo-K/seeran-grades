import { Lato } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigationbar";


const lato = Lato({ subsets: ['latin'], weight: ['700'] });

export const metadata = {
  title: "seeran | Grades",
  description: "A Comprehensive School Management System",
  icons: {
    icon: '/favicon.svg', // /public path
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} font-bold antialiased bg-gray-100`}>
        {/* navigation bar */}
        <NavigationBar/>
        {children}
      </body>
    </html>
  );
}
