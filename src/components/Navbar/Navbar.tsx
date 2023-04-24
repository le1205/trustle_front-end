import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PowerUps from "components/Powerups/Powerups";
import { useLocation  } from "react-router-dom";
import { AppContext, AppContextType } from "context/AppContextProvider";

type NavbarProps = {
  home: boolean;
  account: boolean;
  powerUps: boolean;
  setPowerUps: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ home, account, powerUps, setPowerUps }: NavbarProps) => {
  const location = useLocation();
  const [seaValue, setSearchValue] = useState<string>('');
  const { search, searchValue } = useContext<AppContextType>(AppContext);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }

  console.log("serach ", search)

  return (
    <header className="relative">
      <nav className="h-[70px] lg:h-[100px] px-[20px] md:px-[42px] flex items-center w-full">
        <div className="max-w-[1440px] flex justify-between items-center mx-auto w-full">
          <div className="flex">
            <Link to='/' className="cursor-pointer"> 
              <img src='/images/logo.svg' alt="logo" className={`w-[119.8px] ${home ? 'hidden' : 'block'}`} />
            </Link>
            <form onSubmit={handleSubmit} className={`relative hidden lg:flex justify-center items-center ${account ? 'lg:flex' : 'lg:hidden'}`}>
              <input type='text' value={search} onChange={e => searchValue(e.target.value)} className="bg-white w-[538px] lg:w-[613px] h-[45px] shadow-[0_1px_7px_rgba(0,0,0,0.15)] rounded-[418px] ml-[22px] outline-none ring-0 text-[#4F4F4F] text-[18px] font-[400] font-arial pl-[20px] pr-[120px]" />
              <div className="absolute right-[22px] w-[99px] h-[28px] flex items-center justify-between">
                <img src='/images/close_search.svg' alt="close_search" onClick={e => searchValue('')} className="w-[13px] cursor-pointer" />
                <div className="w-[1px] h-full border-l-[1px] border-solid border-gray"></div>
                <img src='/images/google_search_voice.svg' alt="google_search_voice" className="w-[14px] cursor-pointer" />
                <img src='/images/google_search.svg' alt="google_search" className="w-[14.86px] cursor-pointer" />
              </div>  
              <p className={`absolute ${search ? 'hidden' : 'block'} left-9 bottom-[-30px] text-secondary text-[18px] font-[400] font-arial`}>Search any name or username to view the results</p>       
            </form>
          </div>
        
          <div className="flex justify-center items-center">
            <div className="cursor-pointer backdrop-blur-[15px]" onClick={() => setPowerUps(!powerUps)}>
              <img src="/images/PowerUps.svg" alt='PowerUps' className="w-[45px] md:w-[55px]" />
            </div>
            <Link to='/account' className="cursor-pointer"> 
              <div className="cursor-pointer ml-[10px] md:ml-[27px] border-[1px] border-solid border-[#F1F1F1] backdrop-blur-[15px] rounded-[50px] w-[45px] md:w-[55px] h-[45px] md:h-[55px] flex justify-center items-center">
                <img src="/images/line_wave.svg" alt="line_wave" className="w-[33px] md:w-[43px]" />
              </div>
            </Link>            
          </div>
        </div>       
      </nav>
      <div className={`relative flex lg:hidden justify-center w-[93%] m-auto items-center ${account ? 'flex' : 'hidden'}`}>
        <input type='text' value={search} onChange={e => searchValue(e.target.value)} className="bg-white w-[100%] h-[45px] shadow-[0_1px_7px_rgba(0,0,0,0.15)] rounded-[418px] outline-none ring-0 text-[#4F4F4F] text-[18px] font-[400] font-arial pl-[20px] pr-[120px]" />
        <div className="absolute right-[22px] w-[99px] h-[28px] flex items-center justify-between">
          <img src='/images/close_search.svg' onClick={e => searchValue('')} alt="close_search" className="w-[13px] cursor-pointer" />
          <div className="w-[1px] h-full border-l-[1px] border-solid border-gray"></div>
          <img src='/images/google_search_voice.svg' alt="google_search_voice" className="w-[14px] cursor-pointer" />
          <img src='/images/google_search.svg' alt="google_search" className="w-[14.86px] cursor-pointer" />
        </div>      
        <p className={`absolute ${search ? 'hidden' : 'block'} left-1 top-[50px] text-secondary text-[13px] font-[400] font-arial`}>Search any name or username to view the results</p>                 
      </div>
      
      <PowerUps powerUps={powerUps} setPowerUps={setPowerUps} />
    </header>
  )
}

export default Navbar