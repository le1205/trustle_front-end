import React from "react";

const Hardware = () => {
  return (
    <section className="pl-[42px] pr-[24px] lg:px-[128px] flex justify-center mb-[30px]">
      <div className="max-w-[1440px] w-full">
        <div className="flex mt-[50px] lg:mt-0] gap-[20px] items-center">
          <img src="images/hardware.svg" alt="hardware" className="w-[92.62px]" />
          <h1 className="text-black text-[21.61px] lg:text-[25.2545px] leading-[27px] lg:leading-[32px] font-[800] font-bold">City</h1>
        </div>        
        <div className="pl-0 lg:pl-[14px] mt-[10px]">
          <p className="text-black text-[19.35px] lg:text-[24.7907px] font-[400] leading-[29px] lg:leading-[37px] font-regular">Physical cash, telephone subscriptions, and touchscreens - are all highly medieval tech-solutions to great products that allow us to move and communicate freely with each-other. Through scientific research, <span className="text-primary font-extraBold">Trustle</span> is approaching hardware with new eyes and redefining the consumer needs from the ground up.</p>          
          <div className="bg-[#F2F2F2] w-[151px] h-[35px] border-solid border-[1px] border-black flex justify-between items-center px-[22px] mt-[50px]">
            <p className="text-black text-[18px]leading-[22px] font-arial font-[400]">Cooming soon</p>
          </div>
        </div>        
      </div>
    </section>
  )
}

export default Hardware