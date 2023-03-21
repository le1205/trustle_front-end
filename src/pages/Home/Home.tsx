import React from "react";
import { To, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()

  const handleNavigate = (e: { preventDefault: () => void; }, url: To) => {
    e.preventDefault();
    navigate(url)
  }
  
  return (
    <div>
      <section className="flex justify-center">
        <div>
          <img src="images/logo_mark.svg" alt="logo_mark" className="w-[50px] md:w-[75px] lg:w-[126px]" />
        </div>
        <div className="ml-[20px] md:ml-[50px]">
          <h1 className="text-primary text-[60px] md:text-[90px] lg:text-[136.36px] font-[800] leading-[40px] md:leading-[70px] lg:leading-[130px] not-italic font-bold">Trustle</h1>
          <p className="text-primary text-[8px] md:text-[12px] lg:text-[19.0254px] font-[500] leading-[24px] font-mediumItalic text-right">*Anti-AGI For Profit Organisation</p>
        </div>
        <div>
          <p className="text-primary text-[8px] md:text-[12px] lg:text-[19.0254px] font-[500] leading-[24px] font-bold">*</p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center mt-[28px]">
        <div className="relative w-[90%] lg:w-[755px] flex flex-col justify-center items-center">
          <div className="relative w-full flex items-center">
            <input type="text" placeholder="Search name or username" className="w-full h-[60px] md:h-[85px] bg-[#F2F2F2] rounded-[50px] border-none outline-none ring-0 text-secondary text-[16px] md:text-[20px] font-[400] leading-[23px] pl-[20px] md:pl-[95px] font-light" />
            <img src='images/icon_search.svg' alt="icon_search" className="absolute right-[15px] md:right-[31.7px] w-[20px] md:w-[30px]" />
          </div>          
          <div className="flex justify-end w-full pr-[36px]">
            <p className="text-[#828282] text-[12px] font-[400] leading-[22px] font-light">Report an issue</p>
          </div>
        </div>
        <div className="flex mt-[27px] flex-col md:flex-row w-full">
          <div className="w-full flex justify-center">
            <button onClick={(e) => handleNavigate(e, "/signup")} className="bg-[#190202] w-[90%] lg:w-[246px] h-[45px] lg:h-[59px] rounded-[50px] text-[#FBFBFB] text-[20px] leading-[25px] font-[800] font-bold">Sign up</button>       
          </div>
          <div className="ml-0 lg:ml-[15px] w-full flex justify-center mt-[20px] lg:mt-0">            
            <button className="flex justify-center items-center bg-[#F2F2F2] w-[90%] lg:w-[265px] h-[45px] lg:h-[59px] rounded-[50px] text-primary text-[20px] leading-[30px] font-[600] font-bold">
              Pledge
              <img src="images/pledge.svg" alt="pledge" className="w-[61px] ml-[10px]" />
            </button>            
          </div>
        </div>
      </section>
    </div >
  )
} 

export default Home