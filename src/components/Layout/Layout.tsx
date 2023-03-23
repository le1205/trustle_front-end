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
  const [powerUps, setPowerUps] = useState(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname === '/' ? setHome(true) : setHome(false);
    location.pathname === '/search' || location.pathname === '/accountselect' ? setSearch(true) : setSearch(false);
  }, [location.pathname])

  return (
    // <div className={`${!search && 'flex flex-col justify-between'} min-h-screen relative`}>
    <div className='min-h-screen relative'>
      <Navbar home={home} search={search} powerUps={powerUps} setPowerUps={setPowerUps} />
      {children}
      <Footer search={search} />
      <div className={`absolute w-full h-full top-0 left-0 opacity-50 bg-black z-40 ${powerUps ? 'block' : 'hidden'}`} onClick={() => setPowerUps(false)}></div>
    </div>
  )
}

export default Layout