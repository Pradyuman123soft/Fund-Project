import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWarpper";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Get me a chai",
//   description: "A Fund project"
// };



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] text-white">
       <SessionWrapper>
        <Navbar/>
       <div className="min-h-[89vh]">
        {children}
      </div>
      <Footer/>
      </SessionWrapper>
        </body>
    </html>
  );
}
