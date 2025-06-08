import type { Metadata } from "next";
import {Inter} from 'next/font/google';
import './globals.css'
import NavBar from "@/components/NavBar";

const inter=Inter({subsets:['latin']})

//We add metadata -> to help serach engine in optimization
//These are the info that modern search engines like google/ bing look for in the websites
//So these metadata ->provide enough info to the serach engines to rank our websites
export const metadata: Metadata={
  title:"SafeReport - Anonymous Crime Reporting App",
  description:"Securely and anonymously report crimes to law enforcement"
}


export default function RootLayout({
  children,
}: {children: React.ReactNode;}){
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="relative min-h-screen text-white bg-black selection:bg-sky-500/20">
              {/* Gradient Background */}
              <div className="fixed inset-0 -z-10 min-h-screen">
                <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
                <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),transparent_70%)]" />
              </div>
              {/**NAVBAR */}
              <NavBar/>
              <main className="pt-16">{children}</main>
          </div>
      </body>
    </html>
  )
}