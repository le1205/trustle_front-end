import React, { useState } from "react";
import { Link } from "react-router-dom";
import PowerUps from "components/Powerups/Powerups";

const Navbar = () => {
  const [powerUps, setPowerUps] = useState(false);

  return (
    <header className="relative z-40">
      <nav className="flex justify-between h-[100px] px-[20px] md:px-[42px] items-center">
        <div className="cursor-pointer">
          <Link to='/'> 
            <img src='images/logo.svg' alt="logo" className="w-[119.8px]" />
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <div className="cursor-pointer backdrop-blur-[15px]" onClick={() => setPowerUps(!powerUps)}>
            <img src="images/PowerUps.svg" alt='PowerUps' className="w-[45px] md:w-[55px]" />
          </div>
          <div className="cursor-pointer ml-[10px] md:ml-[27px] border-[1px] border-solid border-[#F1F1F1] backdrop-blur-[15px] rounded-[50px] w-[45px] md:w-[55px] h-[45px] md:h-[55px] flex justify-center items-center">
            <img src="images/line_wave.svg" alt="line_wave" className="w-[33px] md:w-[43px]" />
          </div>
        </div>
      </nav>
      <PowerUps powerUps={powerUps} setPowerUps={setPowerUps} />
    </header>
  )
}

export default Navbar