import React from "react";
import { To, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  
  const handleNavigate = (e: { preventDefault: () => void; }, url: To) => {
    e.preventDefault();
    navigate(url)
  }

  return (
    <section>
      <div className="flex justify-center flex-col items-center">
        <div className="mt-[70px] lg:mt-[30px]">
          <img src="images/signup_logo.svg" alt="signup_logo" className="w-[81.83px] lg:w-[126.1px]" />
        </div>
        <div className="mt-[31.8px] lg:mt-[49px] flex flex-col items-center w-full lg:w-fit gap-[11.54px] lg:gap-[17.78px]">
          <input type='email' className="w-[90%] lg:w-[526px] h-[38.43px] lg:h-[59.22px] bg-[#F2F2F2] rounded-[22.6049px] lg:rounded-[34.8344px] text-[#8BA2B1] text-[13.9036px] lg:text-[21.4257px] leading-[21px] lg:leading-[32px] font-[400] font-light pl-[18.7px] lg:pl-[28.9px] outline-none ring-0" placeholder="Submit email" />
          <input type='text' className="w-[90%] lg:w-[526px] h-[38.43px] lg:h-[59.22px] bg-[#F2F2F2] rounded-[22.6049px] lg:rounded-[34.8344px] text-[#8BA2B1] text-[13.9036px] lg:text-[21.4257px] leading-[21px] lg:leading-[32px] font-[400] font-light pl-[18.7px] lg:pl-[28.9px] outline-none ring-0" placeholder="Submit most commonly used usernames*" />
          <div className="relative flex items-center w-[90%] lg:w-[526px]">
            <input type='password' className="w-full h-[38.43px] lg:h-[59.22px] bg-[#F2F2F2] rounded-[22.6049px] lg:rounded-[34.8344px] text-[#8BA2B1] text-[13.9036px] lg:text-[21.4257px] leading-[21px] lg:leading-[32px] font-[400] font-light pl-[18.7px] lg:pl-[28.9px] outline-none ring-0" placeholder="Submit password" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000" className="bi bi-eye w-[15px] lg:w-[20px] absolute right-[10px] cursor-pointer" viewBox="0 0 16 16">
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
            </svg>
          </div>
          <div className="relative flex items-center w-[90%] lg:w-[526px]">
            <input type='password' className="w-full h-[38.43px] lg:h-[59.22px] bg-[#F2F2F2] rounded-[22.6049px] lg:rounded-[34.8344px] text-[#8BA2B1] text-[13.9036px] lg:text-[21.4257px] leading-[21px] lg:leading-[32px] font-[400] font-light pl-[18.7px] lg:pl-[28.9px] outline-none ring-0" placeholder="Confirm password" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000" className="bi bi-eye w-[15px] lg:w-[20px] absolute right-[10px] cursor-pointer" viewBox="0 0 16 16">
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
            </svg>
          </div>          
        </div>
        <div className="mt-[31.66px] lg:mt-[48.78px] flex flex-col lg:flex-row w-[90%] lg:w-fit gap-3 lg:gap-1">
          <button onClick={(e) => handleNavigate(e, "/login")} className="w-full lg:w-[265px] h-[38px] lg:h-[59px] bg-[#F2F2F2] rounded-[32.4462px] lg:rounded-[50px] text-primary text-[12.9785px] lg:text-[20px] leading-[19px] lg:leading-[30px] font-[700] font-extraBold hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)]">Log in here</button>
          <button className="w-full lg:w-[265px] h-[38px] lg:h-[59px] bg-[#5f8fe6] rounded-[32.4462px] lg:rounded-[50px] text-white text-[12.9785px] lg:text-[20px] leading-[19px] lg:leading-[30px] font-[700] font-extraBold hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)]">Sign up</button>
        </div>
        <div className="mt-[67.35px] lg:mt-[48px] mb-[90px] lg:mb-[50px] w-[90%] lg:w-[518.55px] flex justify-center bg-gray-200 bg-opacity-40 px-[12px] rounded-[11.5234px] py-[5px]">
          <p className=" text-black text-[13.3px] lg:text-[15.3px] font-[400] leading-[23px] font-medium"><span className="text-secondary">*</span> <span className="font-extraBold">Trustle</span> requires your most commonly used online usernames to accurately identify and display all your online accounts</p>
        </div>
      </div>
    </section>
  )
}

export default SignUp