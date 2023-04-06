import React from "react";

const AccountWMC = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-5 items-center">
        <div className="col-span-2 flex items-end flex-col">
          <h1 className="text-black text-[14.3074px] lg:text-[20px] font-[800] leading-[18px] lg:leading-[25px] font-extraBold">Will</h1>
          <div className="flex mt-[6px]">
            <p className="text-right text-secondary text-[9.03311px] lg:text-[12.6272px] font-[400] leading-[8px] lg:leading-[11px]">Your will is verified</p><img src="/images/icon_check.svg" className="w-[7.37px] lg:w-[10.52px] ml-[2px] lg:ml-[5px]" alt="icon_check " />
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2 flex items-end justify-start lg:justify-center">
          <img src="/images/will.svg" className="w-[91.57px] lg:w-[128px]" alt="will" />
        </div>
      </div>
      <div className="grid grid-cols-5 mt-[53px] lg:mt-[75px] items-center">
        <div className="col-span-2 flex items-end flex-col">
          <h1 className="text-black text-[14.3074px] lg:text-[20px] font-[800] leading-[18px] lg:leading-[25px] font-extraBold">Memorial</h1>
          <div className="flex mt-[6px]">
            <p className="text-right text-secondary text-[9.03311px] lg:text-[12.6272px] font-[400] leading-[8px] lg:leading-[11px]">Your memorial is uploaded</p><img src="/images/icon_check.svg" className="w-[7.37px] lg:w-[10.52px] ml-[2px] lg:ml-[5px]" alt="icon_check " />
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2 flex items-end justify-start lg:justify-center">
          <img src="/images/memorial.svg" className="w-[62.05px] lg:w-[86.74px] ml-[12.23px] lg:ml-0" alt="memorial" />
        </div>
      </div>
      <div className="grid grid-cols-5 mt-[53px] lg:mt-[75px] items-center">
        <div className="col-span-2 flex items-end flex-col">
          <h1 className="text-black text-[14.3074px] lg:text-[20px] font-[800] leading-[18px] lg:leading-[25px] font-extraBold">City</h1>
          <div className="flex mt-[6px]">
            <p className="text-right text-secondary text-[9.03311px] lg:text-[12.6272px] font-[400] leading-[8px] lg:leading-[11px]">+100 cities</p>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2 flex items-end justify-start lg:justify-center">
          <img src="/images/city.svg" className="w-[68.6px] lg:w-[95.9px] ml-[8.88px] lg:ml-0" alt="city" />
        </div>
      </div>
      <div className="grid grid-cols-5 mt-[53px] lg:mt-[75px] items-center">
        <div className="col-span-2 flex items-end flex-col">
          <h1 className="text-black text-[14.3074px] lg:text-[20px] font-[800] leading-[18px] lg:leading-[25px] font-extraBold">Hardware</h1>
          <div className="flex mt-[6px]">
            <p className="text-right text-secondary text-[9.03311px] lg:text-[12.6272px] font-[400] leading-[8px] lg:leading-[11px]">Coming soon</p>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2 flex items-end justify-start lg:justify-center">
          <img src="/images/hardware.svg" className="w-[66.26px] lg:w-[92.62px] ml-[12.52px] lg:ml-0" alt="hardware" />
        </div>
      </div>
    </div>
  )
}

export default AccountWMC