import React from "react";
import { Link } from "react-router-dom";
interface PowerUpsProps {
  powerUps: boolean;
  setPowerUps: (value: boolean) => void;
}

const PowerUps: React.FC<PowerUpsProps> = ({ powerUps, setPowerUps }) => {
  return (
    <div className={`absolute w-[348px] ${powerUps ? 'top-[100px]' : 'top-[-500px]'} transition-[top] duration-500 ease-in-out overflow-hidden right-[19px] flex justify-end z-50`}>     
      <div className="w-[305px] flex justify-center flex-col items-center relative">
        <div onClick={() => setPowerUps(false)} className="w-[38.14px] h-[38.14px] rounded-[54.4928px] border-[1px] border-solid border-[#F1F1F1] bg-white flex justify-center items-center mr-[-150px] md:mr-[-40px]">
          <img src="images/close_x.svg" alt="close_x" className="cursor-pointer w-[35px]" />
        </div>
        <div className="flex items-center w-full">
          <div className="rounded-[50px] bg-white bg-opacity-33 border-solid border-[1px] border-[#F1F1F1] pt-[26px] w-full flex flex-col items-center mt-[8px]">
            <h1 className="text-primary text-[20px] font-[800] leading-[25px] font-extraBold">Trustle Powerups</h1>
            <div className="mt-[16px] w-full h-[1px] mb-[10px] border-b-[1px] border-solid border-[#F1F1F1]"></div>
            <div className="w-full px-[40px] pt-[30px] pb-[15px]">
              <div className="flex justify-between h-[62px]">
                <div className="flex flex-col items-center justify-between">
                  <img src='images/account.svg' alt="account" className="w-[49.44px]" />
                  <p className="text-secondary text-[13px] font-[400] leading-[20px] font-light">Account</p>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <img src='images/search.svg' alt="search" className="w-[48.63px]" />
                  <p className="text-secondary text-[13px] font-[400] leading-[20px] font-light">Search</p>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <img src='images/memorial.svg' alt="memorial" className="w-[45.96px]" />
                  <p className="text-secondary text-[13px] font-[400] leading-[20px] font-light">Memorial</p>
                </div>
              </div>
              <div className="flex justify-between h-[74px] mt-[20px]">
                <div className="flex flex-col items-center justify-between">
                  <img src='images/will.svg' alt="will" className="w-[72px] mt-[19px]" />
                  <p className="text-secondary text-[13px] font-[400] leading-[20px] font-light">Will</p>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <img src='images/city.svg' alt="city" className="w-[62.93px] mt-[13.46px]" />
                  <p className="text-secondary text-[13px] font-[400] leading-[20px] font-light">City</p>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <img src='images/hardware.svg' alt="hardware" className="w-[52.07px]" />
                  <p className="text-secondary text-[13px] font-[400] leading-[20px] font-light">Hardware</p>
                </div>
              </div>
              <div className="flex justify-between mt-[27px]">
                <div className="flex flex-col items-center justify-between">
                  <img src='images/pledge.svg' alt="pledge" className="w-[85px]" />
                  <p className="text-secondary text-[13px] font-[400] leading-[20px] font-light mt-[16.38px]">Pledge</p>
                </div>
              </div>
              <div className="flex justify-center mt-[10px]">
                <p className="text-primary text-[15px] leading-[22px] font-[600] font-bold">© 2023 Trustle</p>
              </div>
            </div>
          </div>
          <Link to='/privacy' onClick={() => setPowerUps(false)} className="absolute w-[43px] left-[-43px] h-[59px] bg-[white] bg-opacity-33 backdrop-blur-[15px] border-[1px] border-solid border-[#F1F1F1] rounded-tl-full rounded-bl-full flex justify-center items-center">
            <img src='images/arrow_up_left.svg' alt="arrow_up_left" className="ml-[7px]" />
          </Link>
        </div>        
      </div>   
    </div>
   
  )
}

export default PowerUps