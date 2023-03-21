import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="mt-[40px] lg:mt-0">
        <p className="text-[#828282] text-[12px] font-[400] leading-[22px] font-medium ml-[120px]">© Trustle 2023 - Beta v.1</p>
        <div className="bg-[#F2F2F2] w-full h-[100px] px-[60px] lg:px-[120px] hidden md:flex flex-row items-center justify-between">
          <ul className="flex gap-[23px]">
            <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">About</li>
            <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">FAQs</li>
            <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">Research</li>
            <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">How Search works</li>
          </ul>
          <ul className="flex gap-[18px]">
            <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">Privacy</li>
            <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">Terms</li>
            <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">Settings</li>
          </ul>
        </div>
        <div className="bg-[#F2F2F2] w-full h-[130px] px-[20px] flex md:hidden flex-col items-center justify-around">
          <ul className="flex gap-[23px]">
            <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">About</li>
            <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">FAQs</li>
            <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">Research</li>     
          </ul>
          <ul className="flex gap-[23px]">
            <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">Privacy</li>
            <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">Terms</li>
            <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">Settings</li>
            
          </ul>
          <ul className="flex">
            <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">How Search works</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Footer