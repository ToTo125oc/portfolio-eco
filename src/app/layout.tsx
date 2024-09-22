import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";

const NavBar = dynamic(()=>import('./navBar'))
const Footer = dynamic(()=>import('./footer'))


export const metadata: Metadata = {
  title: "Test",
  description: "portfolio prototype",
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
        {children}
        <Footer/>
      </body>
    </html>
  );
}
