import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";

const NavBar = dynamic(()=>import('./navBar'))
const Footer = dynamic(()=>import('./footer'))
const Transition = dynamic(()=>import('./transition'))


export const metadata: Metadata = {
  title: "Thomas R",
  description: "portfolio",
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">    
      <body className={`antialiased`}>
        <NavBar/>
        <div className="p-1 bg-gradient-to-b from-green-800 to-transparent"></div>
        <Transition>{children}</Transition>
        <Footer/>
      </body>
    </html>
  );
}
