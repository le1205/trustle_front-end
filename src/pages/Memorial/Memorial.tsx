import React from "react";

const Memorial = () => {
  return (
    <section className="pl-[42px] pr-[24px] lg:px-[128px] flex justify-center mb-[30px]">
      <div className="max-w-[1440px] w-full">
        <div className="flex mt-[20px] lg:mt-0 gap-[20px] items-center">
          <img src="images/memorial.svg" alt="memorial" className="w-[75.74px]" />
          <h1 className="text-black text-[21.61px] lg:text-[25.2545px] leading-[27px] lg:leading-[32px] font-[800] font-bold">Memorial</h1>
        </div>        
        <div className="pl-0 lg:pl-[14px] mt-[10px]">
          <p className="text-black text-[19.35px] lg:text-[24.7907px] font-[400] leading-[29px] lg:leading-[37px] font-regular">If you want to store any valuable information online for your loved one’s to remember you by, feel free to submit memorable assets (photos, videos, accounts, ...) or any logistical information (legal documentation, password management, digital assets, ...).</p>
          <div className="mt-[50px]">
            <p className="text-secondary text-[18px] font-[400] leading-[22px] font-arial">History:</p>
            <p className="text-secondary text-[18px] font-[400] leading-[22px] font-arial mt-[7px]">(2023-01-01 03:46) - Mortgage.pdf:</p>
            <p className="text-secondary text-[18px] font-[400] leading-[22px] font-arial mt-[7px]">(2023-02-07 12:12) - Marriage.pdf</p>
            <p className="text-secondary text-[18px] font-[400] leading-[22px] font-arial mt-[7px]">(2023-01-29 23:57) - Testament.pdf</p>
            <div className="bg-[#F2F2F2] w-full lg:w-[573px] h-[58px] lg:h-[35px] border-solid border-[1px] border-black flex justify-between items-center px-[15px] lg:px-[22px] mt-[70px]">
              <p className="text-black text-[18px] leading-[22px] font-arial w-[221.98px] lg:w-fit font-[400]">Upload file: (pdf, png. mov, svg, jpg, ...) </p>
              <img src="images/icon_upload.svg" alt="icon_upload" className="w-[13.32px]" />
            </div>
          </div>
        </div>        
      </div>
    </section>
  )
}

export default Memorial