import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({ subsets: ['latin'], weight: ['700'] });

export const metadata = {
  title: "seeran | Grades",
  description: "school manager",
  icons: {
    icon: '/favicon.svg', // /public path
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} font-semibold text-lg lg:text-2xl antialiased`}>{children}</body>
    </html>
  );
}
