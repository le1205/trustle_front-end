import React from "react";

const Pledge = () => {
  return (
    <section className="px-[121px]">
      <div className="max-w-[1440px]">
        <div className="flex gap-[20px]">
          <img src="images/pledge.svg" alt="pledge" className="w-[117.5px]" />
          <p className="text-black  text-[25.2545px] font-[800] leading-[32px] font-bold">Pledge</p>
        </div>        
        <div className="ml-[21px] mt-[12px]">
          <p className="text-black text-[24.7907px] font-[400] leading-[37px] font-light">Trustle is committed to safely producing sustainable technology solutions that will democratically improve the lives of millions. Our mission is to promote the development of ethical AI practices with a priority on caution over speed.</p>
          <div className="border-solid border-[1px] border-black px-[18px] py-[8px] w-fit flex flex-col gap-[7px] mt-[37px]">
            <ul className="flex gap-[18px]">
              <li className="border-solid border-[0.3px] border-black px-[13px] py-[9px] flex justify-center items-center text-black font-arial text-[18px] leading-[21px] font-[400] cursor-pointer">$2</li>
              <li className="border-solid border-[0.3px] border-black px-[13px] py-[9px] flex justify-center items-center text-black font-arial text-[18px] leading-[21px] font-[400] cursor-pointer">$5</li>
              <li className="border-solid border-[0.3px] border-black px-[13px] py-[9px] flex justify-center items-center text-black font-arial text-[18px] leading-[21px] font-[400] cursor-pointer">$10</li>
              <li className="border-solid border-[0.3px] border-black px-[13px] py-[9px] flex justify-center items-center text-black font-arial text-[18px] leading-[21px] font-[400] cursor-pointer">$20</li>
              <li className="border-solid border-[0.3px] border-black px-[13px] py-[9px] flex justify-center items-center text-black font-arial text-[18px] leading-[21px] font-[400] cursor-pointer">$30</li>
              <li className="border-solid border-[0.3px] border-black px-[13px] py-[9px] flex justify-center items-center text-black font-arial text-[18px] leading-[21px] font-[400] cursor-pointer">$50</li>
              <li className="border-solid border-[0.3px] border-black px-[13px] py-[9px] flex justify-center items-center text-black font-arial text-[18px] leading-[21px] font-[400] cursor-pointer">$100</li>
              <li className="flex">
                <div className="border-solid border-[0.3px] border-black px-[26px] py-[9px] flex justify-center items-center text-black font-arial text-[18px] leading-[21px] font-[400] cursor-pointer">Other</div>
                <div className="border-l-0 border-solid border-[0.3px] border-black px-[16px] py-[9px] flex justify-center items-center text-black font-arial text-[18px] leading-[21px] font-[400] cursor-pointer">$_</div>
              </li>
            </ul>
            <ul className="flex gap-[32px] justify-center">
              <li className="border-solid border-[0.3px] border-black px-[49px] py-[9px] flex justify-center items-center text-black font-arial text-[18px] leading-[21px] font-[400] cursor-pointer">Monthly</li>
              <li className="border-solid border-[0.3px] border-black px-[49px] py-[9px] flex justify-center items-center text-black font-arial text-[18px] leading-[21px] font-[400] cursor-pointer">Yearly</li>
              <li className="border-solid border-[0.3px] border-black px-[49px] py-[9px] flex justify-center items-center text-black font-arial text-[18px] leading-[21px] font-[400] cursor-pointer">Just Once</li>
            </ul>
          </div>
          <div className="mt-[40px]">
            <div className="flex h-[177px]">
              <div className="w-[194px] border-solid border-[1px] border-black flex justify-center items-center">
                <img src='images/tshirt_left.svg' alt="tshirt_left" className="w-[188.78px]" />
              </div>
              <div className="w-[194px] border-l-0 border-solid border-[1px] border-black flex justify-center items-center">
                <img src='images/tshirt_right.svg' alt="tshirt_right" className="w-[193.14px]" />
              </div>
            </div>
            <div className="w-[388px] items-center bg-[#F2F2F2] border-t-0 border-solid border-[1px] border-black h-[46px] flex justify-around">
              <select className="outline-none bg-white ring-0 w-[107px] h-[40px] border-solid border-[1px] border-black text-black text-[18px] font-[400] font-arial leading-[21px] px-[17px]">
                <option value='white' className="text-black text-[18px] font-[400] font-arial leading-[21px]">White</option>
                <option value='black' className="text-black text-[18px] font-[400] font-arial leading-[21px]">Black</option>
                <option value='pink' className="text-black text-[18px] font-[400] font-arial leading-[21px]">Pink</option>
              </select>
              <div className="outline-none ring-0 w-[161px] h-[40px] border-solid border-[1px] border-black px-[17px] bg-white flex justify-center items-center">
                <label className="text-black text-[18px] font-[400] leading-[21px] font-arial">Size:</label>
                <select className="outline-none ring-0 bg-white text-black text-[18px] font-[400] font-arial leading-[21px] ml-[10px]">
                  <option value='white' className="text-black text-[18px] font-[400] font-arial leading-[21px]">L</option>
                  <option value='black' className="text-black text-[18px] font-[400] font-arial leading-[21px]">XL</option>
                </select>
              </div>
              <div className="w-[53px] h-[40px] text-black bg-white border-solid border-[1px] border-black flex justify-center items-center text-[18px] font-[400] leading-[21px]">$60</div>
            </div>
            <div className="flex gap-[17px] mt-[40px] mb-[20px]">
              <div className="px-[18px] py-[9px] bg-[#F2F2F2]">
                <img src='images/ApplePay.svg' alt='ApplePay' className="w-[41px] h-[27.33px]" />
              </div>
              <div className="px-[18px] py-[9px] bg-[#F2F2F2]">
                <img src='images/PayPal.svg' alt='PayPal' className="w-[41px] h-[27.33px]" />
              </div>
              <div className="px-[18px] py-[9px] bg-[#8BA2B1]">
                <img src='images/GooglePay.svg' alt='GooglePay' className="w-[41px] h-[27.33px]" />
              </div>
              <div className="px-[18px] py-[9px] bg-[#F2F2F2] flex gap-[16px]">
                <img src="images/Visa.svg" alt="Visa" className="w-[41px] h-[27.33px]" />
                <img src="images/Mastercard.svg" alt="Mastercard" className="w-[41px] h-[27.33px]" />
                <img src="images/Maestro.svg" alt="Maestro" className="w-[41px] h-[27.33px]" />
                <img src="images/DinersClub.svg" alt="DinersClub" className="w-[41px] h-[27.33px]" />
                <img src="images/Amex.svg" alt="Amex" className="w-[41px] h-[27.33px]" />
              </div>
              <div className="px-[23px] py-[9px] bg-[#F2F2F2]">
                <img src='images/Bitcoin.svg' alt="Bitcoin" className="w-[41px] h-[27.33px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pledge
