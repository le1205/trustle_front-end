import React from "react";
import { Link } from "react-router-dom";

type FooterProps = {
  account: boolean;
}

const Footer = ({ account }: FooterProps) => {
  return (
    <section>
      <div className="h-[55px] lg:h-[122px] w-full">
        <div className="absolute bottom-0 w-full">     
          <div className="px-[15px] lg:px-[120px] flex justify-center">
            <div className="max-w-[1440px] w-full">
              <p className={`${account ? 'hidden' : 'block'}  text-[#828282] text-[8px] lg:text-[12px] font-[400] leading-[15px] lg:leading-[22px] font-medium`}>© Trustle 2023 - Beta v.1</p>  
            </div>            
          </div>         
          <div className="bg-[#F2F2F2] w-full px-[15px] lg:px-[120px] py-[19px] lg:py-[37.25px] ">
            <div className="max-w-[1440px] flex flex-row items-center justify-between mx-auto">
              <ul className="flex gap-[10px] lg:gap-[20px]">
                <li className="text-primary text-[8px] lg:text-[17px] leading-[12px] lg:leading-[25px] font-[400] font-medium cursor-pointer"><Link to='/about'>About</Link></li>                
                <li className="text-primary text-[8px] lg:text-[17px] leading-[12px] lg:leading-[25px] font-[400] font-medium cursor-pointer"><Link to='/faq'>FAQs</Link></li>
                <li className="text-primary text-[8px] lg:text-[17px] leading-[12px] lg:leading-[25px] font-[400] font-medium cursor-pointer"><Link to='/research'>Research</Link></li>
                <li className="text-primary text-[8px] lg:text-[17px] leading-[12px] lg:leading-[25px] font-[400] font-medium cursor-pointer"><Link to='/overview'>How Search works</Link></li>
              </ul>
              <ul className="flex gap-[10px] lg:gap-[20px]">
                <li className="text-primary text-[8px] lg:text-[17px] leading-[12px] lg:leading-[25px] font-[400] font-medium cursor-pointer"><Link to='/privacy'>Privacy</Link></li>
                <li className="text-primary text-[8px] lg:text-[17px] leading-[12px] lg:leading-[25px] font-[400] font-medium cursor-pointer"><Link to='/terms'>Terms</Link></li>
                <li className="text-primary text-[8px] lg:text-[17px] leading-[12px] lg:leading-[25px] font-[400] font-medium cursor-pointer"><Link to='/setting'>Settings</Link></li>
              </ul>
            </div>           
          </div>         
        </div>             
      </div>
    </section>
  )
}

export default Footer