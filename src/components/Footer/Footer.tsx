import React from "react";

type FooterProps = {
  search: boolean;
}

const Footer = ({ search }: FooterProps) => {
  return (
    <section>
      <div className="mt-[40px] lg:mt-0">
        <p className={`${search ? 'hidden' : 'block'} text-[#828282] text-[12px] font-[400] leading-[22px] font-medium ml-0 text-center lg:text-start lg:ml-[120px] absolute bottom-[130px] md:bottom-[100px]`}>© Trustle 2023 - Beta v.1</p>
        <div className="h-[100px]">
          <div className="bg-[#F2F2F2] w-full px-[60px] lg:px-[120px] py-[37.25px] hidden md:flex flex-row items-center justify-between absolute bottom-0">
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
        </div>
        <div className="h-[130px]">
          <div className="bg-[#F2F2F2] w-full  px-[20px] py-[26.75px] flex md:hidden flex-col items-center justify-around absolute bottom-0">
            <ul className="flex gap-[30px]">
              <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">About</li>
              <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">FAQs</li>
              <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">Research</li>     
            </ul>
            <ul className="flex gap-[30px]">
              <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">Privacy</li>
              <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">Terms</li>
              <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">Settings</li>
              
            </ul>
            <ul className="flex">
              <li className="text-primary text-[17px] font-[400] font-medium cursor-pointer">How Search works</li>
            </ul>
          </div>
        </div>        
      </div>
    </section>
  )
}

export default Footer