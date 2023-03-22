import React, { useState, useEffect } from "react";
import { useLocation  } from "react-router-dom";
import Navbar from "components/Navbar";
import Footer from "components/Footer"

type LayoutProps = {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const [home, setHome] = useState(false);
    const [search, setSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname === '/' ? setHome(true) : setHome(false);
    location.pathname.includes('search') ? setSearch(true) : setSearch(false);
  }, [location.pathname])

  return (
    <div className='flex flex-col justify-between min-h-screen relative'>
      <Navbar home={home} search={search} />
      {children}
      <Footer search={search} />
    </div>
  )
}

export default Layout