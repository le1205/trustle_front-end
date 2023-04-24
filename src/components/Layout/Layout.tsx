import React, { useState, useEffect } from "react";
import { useLocation  } from "react-router-dom";
import Navbar from "components/Navbar";
import Footer from "components/Footer"

type LayoutProps = {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [home, setHome] = useState<boolean>(false);
  const [account, setAccount] = useState<boolean>(false);
  const [powerUps, setPowerUps] = useState<boolean>(false);
  const [center, setCenter] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname === '/' ? setHome(true) : setHome(false);
    location.pathname === '/search' || location.pathname === '/accountselect' ? setAccount(true) : setAccount(false);
    location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/forgot' || location.pathname === '/changepassword' || location.pathname === '/login'
    ? setCenter(true) : setCenter(false)
  }, [location.pathname])

  return (
    <div className={`${center ? 'flex flex-col justify-between' : ''} min-h-screen relative`}>
      <Navbar home={home} account={account} powerUps={powerUps} setPowerUps={setPowerUps} />
      {children}
      <Footer account={account} />
      <div className={`absolute w-full h-full top-0 left-0 opacity-50 bg-black z-40 ${powerUps ? 'block' : 'hidden'}`} onClick={() => setPowerUps(false)}></div>
    </div>
  )
}

export default Layout