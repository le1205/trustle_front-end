import ItemInfo from "components/ItemInfo";
import React from "react";

const Search = () => {
  return (
    <section className="px-[25px] lg:pl-[164px] lg:pr-[108px] flex justify-center">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <p className="text-[#828282] text-[14px] leading-[22px] font-[400] font-medium">Approximately 105 000 000 profiles (0,43 seconds)</p>
          <div className="mt-[11px]">
            <img src='images/1.png' alt="michael" className="w-[57px]" />
          </div>
          <div className="mt-[21px]">
            <h1 className="text-primary text-[22px] leading-[22px] font-[400] font-extraBold">Michael Båge - 21 years old, London, UK</h1>
            <p className="text-[#333333] text-[14px] leading-[22px] font-[400] font-medium mt-[5px]">+1,000 connected accounts</p>
          </div>
          <div className="mt-[15px] w-[523px]">
            <div className="flex justify-between">
              <div className="w-[221px]">
                <h1 className="text-primary text-[22px] leading-[22px] font-[400] font-extraBold">Snapchat</h1>
                <p className="text-[#333333] text-[14px] leading-[22px] font-[400] font-medium mt-[10px]">3 accounts</p>
              </div>
              <div className="w-[221px]">
                <h1 className="text-primary text-[22px] leading-[22px] font-[400] font-extraBold">Linkedin</h1>
                <p className="text-[#333333] text-[14px] leading-[22px] font-[400] font-medium mt-[10px]">1 account, 2 business account</p>
              </div>
            </div>
            <div className="flex justify-between mt-[19px]">
              <div className="w-[221px]">
                <h1 className="text-primary text-[22px] leading-[22px] font-[400] font-extraBold">Instagram</h1>
                <p className="text-[#333333] text-[14px] leading-[22px] font-[400] font-medium mt-[10px]">1 public account, 2 private accounts</p>
              </div>
              <div className="w-[221px]">
                <h1 className="text-primary text-[22px] leading-[22px] font-[400] font-extraBold">Facebook</h1>
                <p className="text-[#333333] text-[14px] leading-[22px] font-[400] font-medium mt-[10px]">1 account</p>
              </div>
            </div>
          </div>
          <div className="mt-[21px]">
            <h1 className="text-primary text-[22px] leading-[22px] font-[400] font-extraBold">Michael Bage - 33 years old, Marrakesh, Morocco</h1>
            <p className="text-[#333333] text-[14px] leading-[22px] font-[400] font-medium mt-[5px]">+100 connected accounts</p>
          </div>
          <div className="mt-[53px]">
            <h1 className="text-primary text-[22px] leading-[22px] font-[400] font-extraBold">Michael Baage - unkown</h1>
            <p className="text-[#333333] text-[14px] leading-[22px] font-[400] font-medium mt-[5px]">+10 connected accounts</p>
          </div>
          <div className="mt-[53px]">
            <h1 className="text-primary text-[22px] leading-[22px] font-[400] font-extraBold">Michael Bage - 10 years old</h1>
            <p className="text-[#333333] text-[14px] leading-[22px] font-[400] font-medium mt-[5px]">+120 connected accounts</p>
          </div>
        </div>
        <div>
          <ItemInfo />        
        </div>
      </div>
    </section>
  )
}

export default Search