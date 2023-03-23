import React from "react";

const SignUp = () => {
  return (
    <section>
      <div className="flex justify-center flex-col items-center">
        <div>
          <img src="images/signup_logo.svg" alt="signup_logo" className="w-[126.1px]" />
        </div>
        <div className="mt-[50px] flex flex-col items-center w-full lg:w-fit gap-[17.75px]">
          <input type='email' className="w-[90%] lg:w-[526px] h-[38.43px] lg:h-[59.22px] bg-[#F2F2F2] rounded-[22.6049px] lg:rounded-[34.8344px] text-[#8BA2B1] text-[13.9036px] lg:text-[21.4257px] leading-[21px] lg:leading-[32px] font-[400] font-light pl-[18.7px] lg:pl-[28.9px] outline-none ring-0" placeholder="Submit email" />
          <input type='text' className="w-[90%] lg:w-[526px] h-[38.43px] lg:h-[59.22px] bg-[#F2F2F2] rounded-[22.6049px] lg:rounded-[34.8344px] text-[#8BA2B1] text-[13.9036px] lg:text-[21.4257px] leading-[21px] lg:leading-[32px] font-[400] font-light pl-[18.7px] lg:pl-[28.9px] outline-none ring-0" placeholder="Submit most commonly used usernames*" />
          <input type='password' className="w-[90%] lg:w-[526px] h-[38.43px] lg:h-[59.22px] bg-[#F2F2F2] rounded-[22.6049px] lg:rounded-[34.8344px] text-[#8BA2B1] text-[13.9036px] lg:text-[21.4257px] leading-[21px] lg:leading-[32px] font-[400] font-light pl-[18.7px] lg:pl-[28.9px] outline-none ring-0" placeholder="Submit password" />
          <input type='password' className="w-[90%] lg:w-[526px] h-[38.43px] lg:h-[59.22px] bg-[#F2F2F2] rounded-[22.6049px] lg:rounded-[34.8344px] text-[#8BA2B1] text-[13.9036px] lg:text-[21.4257px] leading-[21px] lg:leading-[32px] font-[400] font-light pl-[18.7px] lg:pl-[28.9px] outline-none ring-0" placeholder="Confirm password" />
        </div>
        <div className="mt-[31px] lg:mt-[48px] flex flex-col lg:flex-row w-[90%] lg:w-fit gap-3 lg:gap-1">
          <button className="w-full lg:w-[265px] h-[38px] lg:h-[59px] bg-[#F2F2F2] rounded-[32.4462px] lg:rounded-[50px] text-primary text-[12.9785px] lg:text-[20px] leading-[19px] lg:leading-[30px] font-[700] font-extraBold hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)]">Log in here</button>
          <button className="w-full lg:w-[265px] h-[38px] lg:h-[59px] bg-[#5f8fe6] rounded-[32.4462px] lg:rounded-[50px] text-white text-[12.9785px] lg:text-[20px] leading-[19px] lg:leading-[30px] font-[700] font-extraBold hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)]">Sign up</button>
        </div>
        <div className="mt-[67px] lg:mt-[48px] mb-[90px] lg:mb-[50px] flex justify-center">
          <p className="w-[90%] lg:w-[518.55px] text-black text-[13px] lg:text-[15.3px] font-[400] leading-[23px] font-medium"><span className="text-secondary">*</span> <span className="font-extraBold">Trustle</span> requires your most commonly used online usernames to accurately identify and display all your online accounts</p>
        </div>
      </div>
    </section>
  )
}

export default SignUp