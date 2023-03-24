import React from "react";

const Checkout = () => {
  return (
    <section className="px-[33px] lg:px-[121px]">
      <div className="max-w-[1440px]">
        <div className="flex gap-[10px] lg:gap-[19px]">
          <img src="images/pledge.svg" alt="pledge" className="w-[117.5px]" />
          <p className="text-black text-[19.73px] lg:text-[25.2545px] font-[800] leading-[25px] lg:leading-[32px] font-bold">Pledge</p>
        </div> 
        <div className="ml-0 lg:ml-[21px] mt-[27px] lg:mt-[12px]">
          <p className="text-black hidden lg:block text-[24.7907px] font-[800] leading-[37px] font-light"><span className="font-extraBold">Trustle</span> is committed to safely producing sustainable technology solutions that will democratically improve the lives of millions. Our mission is to promote the development of ethical AI practices with a priority on caution over speed.</p>
          <p className="text-black block lg:hidden text-[16.2252px] font-[800] leading-[20px] font-light"><span className="font-extraBold">Trustle</span> is committed to safely producing sustainable technology solutions that will democratically improve the lives of millions.</p>
          <p className="text-black block lg:hidden text-[16.2252px] font-[800] leading-[20px] font-light mt-[20px]">Our mission is to promote the development of ethical AI practices with a priority on caution over speed.</p>
          <p className="ml-0 lg:ml-[13px] text-[#8BA2B1] font-arial font-[400] text-[14.9253px] lg:text-[18px] leading-[18px] lg:leading-[22px] mt-[27px] lg:mt-[37px]">Pledge - USD 20 every month</p>
          <p className="ml-0 lg:ml-[13px] text-[#8BA2B1] font-arial font-[400] text-[14.9253px] lg:text-[18px] leading-[18px] lg:leading-[22px] mt-[5px]">T-Shirt (1, White, Size L) -  USD 60</p>
          <p className="ml-0 lg:ml-[13px] text-[#4F4F4F] font-arial font-[400] text-[14.9253px] lg:text-[18px] leading-[18px] lg:leading-[22px] mt-[5px]">Total - USD 80</p>
          <div className="flex gap-[10px] lg:gap-[17px] w-fit px-[10px] lg:px-[15px] py-[5px] lg:py-[9px] border-solid border-[1px] border-black mt-[20px] lg:mt-[30px]">
            <img src="images/Amex.svg" alt="Amex" className="w-[36.44px] lg:w-[60px] h-[24.29px] lg:h-[40px]" />
            <div className="w-[86.23px] lg:w-[142px] h-[24.29px] lg:h-[40px] text-black text-[12px] lg:text-[18px] leading-[14px] lg:leading-[21px] font-[400] font-arial border-solid border-[0.291449px] border-black flex justify-center items-center">Card Number</div>
            <div className="w-[36.44px] lg:w-[60px] h-[24.29px] lg:h-[40px] text-black text-[12px] lg:text-[18px] leading-[14px] lg:leading-[21px] font-[400] font-arial border-solid border-[0.291449px] border-black flex justify-center items-center">CVC</div>
            <div className="w-[46.76px] lg:w-[77px] h-[24.29px] lg:h-[40px] text-black text-[12px] lg:text-[18px] leading-[14px] lg:leading-[21px] font-[400] font-arial border-solid border-[0.291449px] border-black flex justify-center items-center">MM/DD</div>
            <div className="w-[49.8px] lg:w-[82px] h-[24.29px] lg:h-[40px] text-black text-[12px] lg:text-[18px] leading-[14px] lg:leading-[21px] font-[400] font-arial border-solid border-[0.291449px] border-black flex justify-center items-center">Pay $80</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout