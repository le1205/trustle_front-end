import React from "react";

type FooterProps = {
  search: boolean;
}

const Footer = ({ search }: FooterProps) => {
  return (
    <section>
      <div className="h-[55px] lg:h-[122px] w-full">
        <div className="absolute bottom-0 w-full">     
          <div className="px-[15px] lg:px-[120px] flex justify-center">
            <div className="max-w-[1440px] w-full">
              <p className={`${search ? 'hidden' : 'block'}  text-[#828282] text-[8px] lg:text-[12px] font-[400] leading-[15px] lg:leading-[22px] font-medium`}>© Trustle 2023 - Beta v.1</p>  
            </div>            
          </div>         
          <div className="bg-[#F2F2F2] w-full px-[15px] lg:px-[120px] py-[19px] lg:py-[37.25px] ">
            <div className="max-w-[1440px] flex flex-row items-center justify-between mx-auto">
              <ul className="flex gap-[10px] lg:gap-[20px]">
                <li className="text-primary text-[8px] lg:text-[17px] leading-[12px] lg:leading-[25px] font-[400] font-medium cursor-pointer">About</li>
                <li className="text-primary text-[8px] lg:text-[17px] leading-[12px] lg:leading-[25px] font-[400] font-medium cursor-pointer">FAQs</li>
                <li className="text-primary text-[8px] lg:text-[17px] leading-[12px] lg:leading-[25px] font-[400] font-medium cursor-pointer">Research</li>
                <li className="text-primary text-[8px] lg:text-[17px] leading-[12px] lg:leading-[25px] font-[400] font-medium cursor-pointer">How Search works</li>
              </ul>
              <ul className="flex gap-[10px] lg:gap-[20px]">
                <li className="text-primary text-[8px] lg:text-[17px] leading-[12px] lg:leading-[25px] font-[400] font-medium cursor-pointer">Privacy</li>
                <li className="text-primary text-[8px] lg:text-[17px] leading-[12px] lg:leading-[25px] font-[400] font-medium cursor-pointer">Terms</li>
                <li className="text-primary text-[8px] lg:text-[17px] leading-[12px] lg:leading-[25px] font-[400] font-medium cursor-pointer">Settings</li>
              </ul>
            </div>           
          </div>         
        </div>             
      </div>
    </section>
  )
}

export default Footer