import React, { useState, useEffect } from "react";
import { To, useNavigate, useLocation } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [setting, setSetting] = useState(false);
  const location = useLocation();

  const handleNavigate = (e: { preventDefault: () => void; }, url: To) => {
    e.preventDefault();
    navigate(url)
  }

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("input", input);
    navigate('/search')
  }
  
  useEffect(() => {
    location.pathname === '/setting' ? setSetting(true) : setSetting(false);
  }, [location.pathname])

  return (
    <section>
      <div className="flex justify-center mt-[129px] lg:mt-[50px] w-[90%] mx-auto lg:w-full">
        <div>
          <img src="images/logo_mark.svg" alt="logo_mark" className="w-[65px] lg:w-[126.1px]" />
        </div>
        <div className="ml-[15px] lg:ml-[50px]">
          <h1 className="text-primary text-[70px] lg:text-[136.36px] font-[800] leading-[95px] lg:leading-[130px] not-italic font-bold">Trustle</h1>
          <p className="text-primary text-[10.539px] lg:text-[19.0254px] font-[500] leading-[13px] lg:leading-[24px] font-mediumItalic text-right">*Anti-AGI For Profit Organisation</p>
        </div>
        <div>
          <p className="text-primary text-[10px] lg:text-[19.0254px] font-[500] leading-[13px] lg:leading-[24px] font-extraBold">*</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="relative w-[90%] lg:w-[755px] flex flex-col justify-center items-center">
          <form className="relative w-full flex items-center mt-[50px] lg:mt-[70px]" onSubmit={handleSearch}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search name or username" className="w-full h-[42px] lg:h-[85px] bg-[#F2F2F2] rounded-[50px] border-none outline-none ring-0 text-secondary text-[13.2989px] lg:text-[20px] font-[400] leading-[15px] lg:leading-[23px] pl-[22px] lg:pl-[95px] font-arial" />
            <img src='images/icon_search.svg' alt="icon_search" className="absolute right-[15px] lg:right-[31.7px] w-[15px] lg:w-[30px] cursor-pointer" onClick={handleSearch} />
          </form>          
          <div className="flex justify-end w-full pr-[36px]">
            <p className="text-[#828282] text-[7.32673px] lg:text-[12px] font-[400] leading-[13px] lg:leading-[22px] font-arial">Report an issue</p>
          </div>
        </div>
        <div className="flex mt-[20px] flex-col lg:flex-row w-full lg:w-fit">
          <div className="w-full flex justify-center">
            {
              setting ? 
              <button onClick={(e) => handleNavigate(e, "/")} className="bg-[#190202] w-[90%] lg:w-[246px] h-[36px] lg:h-[59px] rounded-[30px] lg:rounded-[50px] text-[#FBFBFB] text-[12.2112px] lg:text-[20px] leading-[15px] lg:leading-[25px] transition-[shadow] duration-500 font-[800] ease-linear font-bold hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)]">Setting <img src="images/setting.svg" alt="setting" className="w-[25px] lg:w-[37px] inline ml-[5px]" /></button> :
              <button onClick={(e) => handleNavigate(e, "/signup")} className="bg-[#190202] w-[90%] lg:w-[246px] h-[36px] lg:h-[59px] rounded-[30px] lg:rounded-[50px] text-[#FBFBFB] text-[12.2112px] lg:text-[20px] leading-[15px] lg:leading-[25px] transition-[shadow] duration-500 font-[800] ease-linear font-bold hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)]">Sign up</button>       
            }
           
          </div>
          <div className="ml-0 lg:ml-[15px] w-full flex justify-center mt-[25px] lg:mt-0">            
            <button className="flex justify-center items-center bg-[#F2F2F2] w-[90%] lg:w-[265px] h-[36px] lg:h-[59px] rounded-[30px] lg:rounded-[50px] text-primary text-[12.2112px] lg:text-[20px] leading-[18px] lg:leading-[30px] font-[600] font-bold hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
              Pledge
              <img src="images/pledge.svg" alt="pledge" className="w-[37.24px] lg:w-[61px] ml-[10px]" />
            </button>            
          </div>
        </div>
        <div className="mt-[85px] mb-[50px] hidden lg:block w-[518.55px] px-[15px] lg:px-[12px] rounded-[11.5234px] py-[5px] bg-gray-200 bg-opacity-40">
          <p className="text-black text-[15.3249px] leading-[23px] font-[400]">In our <span className="text-secondary">beta v.1</span> you can find out all there is to know about your friends and family online presence through searching their name</p>
        </div>
        <div className="lg:hidden w-[90%] mx-auto mt-[106px] mb-[129px] gap-[20px] flex flex-col px-[15px] py-[5px] rounded-[11.5234px] bg-gray-200 bg-opacity-40">
          <div className="text-black font-[800] text-[13.2989px] leading-[20px] font-medium"><span>Trustle is a collective database of all online accounts in the world.</span> <img className="inline w-[25px]" src="images/Mask_1.svg" alt="Mask_1" /></div>
          <div className="text-black font-[800] text-[13.2989px] leading-[20px] font-medium">In our <span className="text-secondary">beta v.1</span> version you can search any name to locate all their online activity and more. <img className="inline w-[20px]" src="images/Mask_2.svg" alt="Mask_2" /></div>
          <div className="text-black font-[800] text-[13.2989px] leading-[20px] font-medium">Above this, you can ensure that any unwanted online activity is removed by creating your own account. <img src="images/Mask_3.svg" className="inline w-[20px]" alt="Mask_3" /></div>
        </div>
      </div>
    </section>
  )
} 

export default Home