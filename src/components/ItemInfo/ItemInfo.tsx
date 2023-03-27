import React from "react";

const ItemInfo = () => {
  return (
    <>
      <div className="w-[245px] mx-auto lg:mx-0 lg:w-full bg-white border-[1px] border-solid border-[#E0E0E0] rounded-[6px] pb-[16px]]">
        <div className="flex p-[2px]">
          <img src="images/1.png" alt='pic1' className="w-[109px] lg:w-[140px]" />
          <img src="images/2.png" alt='pic2' className="w-[96px] lg:w-[120px]" />
        </div>
        <div className="flex justify-end">
          <div className="w-[83px] lg:w-[125px] h-[21px] lg:h-[32px] bg-[#666666] rounded-tl-[3px]  flex justify-center items-center mt-[10px]">
            <img src='images/union.svg' alt="union" className="w-[11px] lg:w-[17px]" />
            <p className="text-white text-[6px] lg:text-[10px] leading-[15px] lg:leading-[22px] font-[400] font-medium ml-[4px] lg:ml-[5px]">See more images</p>
          </div>
        </div>
        <div className="flex px-[11px] lg:px-[16px] justify-between mt-[13px] lg:mt-[20px]">
          <h1 className="text-[#333333] text-[20px] lg:text-[30px] leading-[15px] lg:leading-[22px] font-[400] font-extraBold">Michael Båge</h1>
          <img src='images/share_link.svg' alt="share_link" />
        </div>
        <div className="w-full h-[1px] border-b-[1px] border-solid border-gray mt-[20px]"></div>
        <div className="px-[11px] lg:px-[16px] py-[13px] lg:py-[20px]">
          <p className="text-[#333333] text-[10px] lg:text-[14px] leading-[15px] lg:leading-[22px] font-[400] font-medium">
            Michael is born in Stockholm, and currently lives in London, England, UK. He is a Finance student at Regent’s University London.            
          </p>
          <p className="text-[#333333] text-[10px] lg:text-[14px] leading-[15px] lg:leading-[22px] font-[400] font-medium mt-[20px] lg:mt-[40px]">Michael owns approximatley +400 different accounts across +200 platforms. </p>
        </div>
      </div>
      <div>
        <p className="text-right text-[#828282] text-[8px] lg:text-[12px] leading-[15px] lg:leading-[22px] font-[400] font-medium">Report an issue</p>
      </div>  
    </>
  )
}

export default ItemInfo