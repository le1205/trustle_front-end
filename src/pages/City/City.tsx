import React from "react";

const City = () => {
  return (
    <section className="pl-[42px] pr-[24px] lg:px-[128px] flex justify-center mb-[30px]">
      <div className="max-w-[1440px] w-full">
        <div className="flex mt-[50px] lg:mt-0] gap-[20px] items-center">
          <img src="images/city.svg" alt="city" className="w-[95.9px]" />
          <h1 className="text-black text-[21.61px] lg:text-[25.2545px] leading-[27px] lg:leading-[32px] font-[800] font-bold">City</h1>
        </div>        
        <div className="pl-0 lg:pl-[14px] mt-[10px]">
          <p className="text-black text-[19.35px] lg:text-[24.7907px] font-[400] leading-[29px] lg:leading-[37px] font-regular">We’re already living in the cloud, but in the future, borders won’t be limited to individual networks, countries or states, instead ‘startup cities’ will generate individual rules, statutes and guidelines to create cities using sustainable technology; implementing a greater degree of freedom, prosperity, and democratic choice.</p>          
          <div className="bg-[#F2F2F2] w-full lg:w-[539px] h-[35px] border-solid border-[1px] border-black flex justify-between items-center px-[15px] lg:px-[22px] mt-[50px]">
            <p className="text-black text-[12.1224px] lg:text-[18px] leading-[15px] lg:leading-[22px] font-arial font-[400]">See dashboard of cities (<span className="underline">The Network State Dashboard</span>)</p>
            <img src="images/star.svg" alt="star" className="w-[11.11px] lg:w-[16.5px]" />
          </div>
        </div>        
      </div>
    </section>
  )
}

export default City