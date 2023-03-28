import React from "react";
import { To, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  
  const handleNavigate = (e: { preventDefault: () => void; }, url: To) => {
    e.preventDefault();
    navigate(url)
  }
  
  return (
    <section>
      <div className="flex justify-center flex-col items-center">
        <div className="mt-[40px]">
          <img src="images/signup_logo.svg" alt="signup_logo" className="w-[126.1px]" />
        </div>
        <div className="mt-[50px] flex flex-col items-center w-full lg:w-fit gap-[11.47px] lg:gap-[17.75px]">
          <input type='email' className="w-[90%] lg:w-[526px] h-[38.43px] lg:h-[59.22px] bg-[#F2F2F2] rounded-[22.6049px] lg:rounded-[34.8344px] text-[#8BA2B1] text-[13.9036px] lg:text-[21.4257px] leading-[21px] lg:leading-[32px] font-[400] font-light pl-[18.7px] lg:pl-[28.9px] outline-none ring-0" placeholder="Submit email" />
          <div className="relative flex items-center w-[90%] lg:w-[526px]">
            <input type='password' className="w-full h-[38.43px] lg:h-[59.22px] bg-[#F2F2F2] rounded-[22.6049px] lg:rounded-[34.8344px] text-[#8BA2B1] text-[13.9036px] lg:text-[21.4257px] leading-[21px] lg:leading-[32px] font-[400] font-light pl-[18.7px] lg:pl-[28.9px] outline-none ring-0" placeholder="Submit password" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000" className="bi bi-eye w-[15px] lg:w-[20px] absolute right-[10px] cursor-pointer" viewBox="0 0 16 16">
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
            </svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
              <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
              <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
              <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
            </svg> */}
          </div>          
        </div>
        <div className="mt-[31.66px] lg:mt-[48.78px] mb-[50px] flex flex-col lg:flex-row w-[90%] lg:w-fit gap-3 lg:gap-1">
          <button className="w-full lg:w-[265px] h-[38px] lg:h-[59px] bg-[#F2F2F2] rounded-[32.4462px] lg:rounded-[50px] text-primary text-[12.9785px] lg:text-[20px] leading-[19px] lg:leading-[30px] font-[700] font-extraBold hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)]">Sign up here</button>
          <button className="w-full lg:w-[265px] h-[38px] lg:h-[59px] bg-[#5f8fe6] rounded-[32.4462px] lg:rounded-[50px] text-white text-[12.9785px] lg:text-[20px] leading-[19px] lg:leading-[30px] font-[700] font-extraBold hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)]">Log in</button>
        </div>
      </div>
    </section>
  )
}

export default Login