import { Lato } from "next/font/google";
import "./globals.css";


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
      <body className={`${lato.className} font-bold antialiased bg-gray-100 text-base`}>
        {children}
      </body>
    </html>
  );
}
