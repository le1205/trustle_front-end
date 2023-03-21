import React from "react";

const Footer = () => {
  return (
    <div>
      <section>
        <p className="text-[#828282] text-[12px] font-[400] leading-[22px] font-medium ml-[120px]">© Trustle 2023 - Beta v.1</p>
        <div className="bg-[#F2F2F2] w-full h-[100px] px-[120px] flex items-center justify-between">
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
      </section>
    </div>
  )
}

export default Footer