import React from "react";

interface PowerUpsProps {
  powerUps: boolean;
  setPowerUps: (value: boolean) => void;
}

const PowerUps: React.FC<PowerUpsProps> = ({ powerUps, setPowerUps }) => {
  return (
    <div className={`absolute ${powerUps ? 'w-[348px]' : 'w-0'} transition-[width] duration-500 ease-in-out overflow-hidden right-0 flex justify-end`}>     
      <div className="w-[305px] flex justify-center flex-col items-center relative">
        <div onClick={() => setPowerUps(false)}>
          <img src="images/close_menu.svg" alt="close_menu" className="cursor-pointer w-[35px]" />
        </div>
        <div className="flex items-center w-full">
          <div className="rounded-[50px] bg-white bg-opacity-33 border-solid border-[1px] border-[#F1F1F1] pt-[26px] w-full flex flex-col items-center mt-[8px]">
            <h1 className="text-primary text-[20px] font-[800] leading-[25px] font-extraBold">Trustle Powerups</h1>
            <div className="mt-[16px] w-full h-[1px] mb-[10px] border-b-[1px] border-solid border-[#F1F1F1]"></div>
            <div className="w-full px-[40px] py-[30px]">
              <div className="flex justify-between h-[62px]">
                <div className="flex flex-col items-center justify-between">
                  <img src='images/account.svg' alt="account" className="w-[49.44px]" />
                  <p className="text-secondary text-[13px] font-[400] leading-[20px] font-medium">Account</p>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <img src='images/search.svg' alt="search" className="w-[48.63px]" />
                  <p className="text-secondary text-[13px] font-[400] leading-[20px] font-medium">Search</p>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <img src='images/account.svg' alt="account" className="w-[45.96px]" />
                  <p className="text-secondary text-[13px] font-[400] leading-[20px] font-medium">Memorial</p>
                </div>
              </div>
              <div className="flex justify-between h-[74px] mt-[20px]">
                <div className="flex flex-col items-center justify-between">
                  <img src='images/will.svg' alt="will" className="w-[72px] mt-[19px]" />
                  <p className="text-secondary text-[13px] font-[400] leading-[20px] font-medium">Will</p>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <img src='images/city.svg' alt="city" className="w-[62.93px] mt-[13.46px]" />
                  <p className="text-secondary text-[13px] font-[400] leading-[20px] font-medium">City</p>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <img src='images/hardware.svg' alt="hardware" className="w-[52.07px]" />
                  <p className="text-secondary text-[13px] font-[400] leading-[20px] font-medium">Memorial</p>
                </div>
              </div>
              <div className="flex justify-between mt-[27px]">
                <div className="flex flex-col items-center justify-between">
                  <img src='images/pledge.svg' alt="pledge" className="w-[85px]" />
                  <p className="text-secondary text-[13px] font-[400] leading-[20px] font-medium mt-[16.38px]">Pledge</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[43px] left-[-43px] h-[59px] bg-[white] bg-opacity-33 backdrop-blur-[15px] border-[1px] border-solid border-[#F1F1F1] rounded-tl-full rounded-bl-full flex justify-center items-center">
            <img src='images/arrow_up_left.svg' alt="arrow_up_left" className="ml-[7px]" />
          </div>
        </div>
        
      </div>   
    </div>
   
  )
}

export default PowerUps