import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer"

type LayoutProps = {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar/>
      {children}
      <Footer />
    </div>
  )
}

export default Layout