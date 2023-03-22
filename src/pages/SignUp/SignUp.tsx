import React from "react";

const SignUp = () => {
  return (
    <section>
      <div className="flex justify-center flex-col items-center">
        <div>
          <img src="images/signup_logo.svg" alt="signup_logo" className="w-[126.1px]" />
        </div>
        <div className="mt-[50px] flex flex-col items-center w-full lg:w-fit">
          <input type='text' className="w-[90%] lg:w-[526px] h-[59.22px] bg-[#F2F2F2] rounded-[34.8344px] text-[#8BA2B1] text-[21.4257px] leading-[32px] font-[400] font-light pl-[28.9px] outline-none ring-0" placeholder="Submit username" />
          <input type='text' className="w-[90%] lg:w-[526px] h-[59.22px] bg-[#F2F2F2] rounded-[34.8344px] text-[#8BA2B1] text-[21.4257px] leading-[32px] font-[400] font-light pl-[28.9px] outline-none ring-0 mt-[17.75px]" placeholder="Submit password" />
        </div>
        <div className="mt-[48px] flex flex-col lg:flex-row w-[90%] lg:w-fit">
          <button className="w-full lg:w-[265px] h-[59px] bg-[#F2F2F2] rounded-[50px] text-primary text-[20px] leading-[30px] font-[700] font-extraBold hover:shadow-[0_4px_15px_rgba(0,0,0,1)]">Sign up</button>
          <button className="w-full lg:w-[265px] h-[59px] bg-[#5f8fe6] rounded-[50px] text-white text-[20px] leading-[30px] font-[700] font-extraBold ml-[2px] mt-[20px] lg:mt-0 hover:shadow-[0_4px_15px_rgba(0,0,0,1)]">Log in</button>
        </div>
      </div>
    </section>
  )
}

export default SignUp