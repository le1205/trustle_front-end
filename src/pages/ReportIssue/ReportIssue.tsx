import React from "react";

const ReportIssue = () => {
  return (
    <section className="pl-[33px] lg:pl-[141px] pr-[28px] lg:pr-[121px] mt-[20px] lg:mt-0">
      <div className="max-w-[1440px] mx-auto">
        <h3 className="text-black font-[800] text-[20px] lg:text-[25px] leading-[26px] lg:leading-[32px] font-bold">Report an issue</h3>
        <p className="text-black font-[400] hidden lg:block text-[25px] leading-[37px] font-regular mt-[10px]">If you have identified an issue, e.g. a profile displaying inaccurate information. Please submit a message describing the issue and Trustle will do it’s best aligning our technology to your needs.</p>
        <p className="text-black block lg:hidden font-[400] text-[20px] leading-[29px] font-regular mt-[40px]">If you have identified an issue, e.g. a profile displaying inaccurate information.</p>
        <p className="text-black block lg:hidden font-[400] text-[20px] leading-[29px] font-regular mt-[20px]">Please submit a message describing the issue and Trustle will do it’s best aligning our technology to your needs.</p>
        <div className="w-full lg:w-[573px] mt-[148px] lg:mt-[65px] mb-[100px]">
          <textarea className="w-full h-[136px] border-[1px] border-solid border-black bg-white outline-none ring-0 px-[22px] py-[11px] font-arial text-black"></textarea>
          <button className="w-full px-[22px] h-[36px] text-black text-[18px] leading-[22px] font-[400] font-arial text-start border-solid border-[1px] border-black border-t-transparent mt-[-8px] bg-[#F2F2F2] flex justify-between items-center">
            Send message
            <img src='images/mail.svg' alt="mail" />
          </button>
        </div>
      </div>
     
      
    </section>
  )
}

export default ReportIssue