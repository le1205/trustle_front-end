import React from "react";

const Search = () => {
  return (
    <section className="px-[50px] xl:pl-[164px] xl:pr-[108px] flex justify-center">
      <div className="grid grid-cols-3 max-w-[1168px]">
        <div className="col-span-2">
          <p className="text-[#828282] text-[14px] leading-[22px] font-[400] font-medium">Approximately 105 000 000 profiles (0,43 seconds)</p>
          <div className="mt-[11px]">
            <img src='images/michael.svg' alt="michael" className="w-[57px]" />
          </div>
          <div className="mt-[21px]">
            <h1 className="text-primary text-[22px] leading-[22px] font-[400] font-extraBold">Michael Båge - 21 years old, London, UK</h1>
            <p className="text-[#333333] text-[14px] leading-[22px] font-[400] font-medium mt-[5px]">+1,000 connected accounts</p>
          </div>
          <div className="mt-[15px] w-[523px]">
            <div className="flex justify-between">
              <div className="w-[221px]">
                <h1 className="text-primary text-[22px] leading-[22px] font-[400] font-extraBold">Snapchat</h1>
                <p className="text-[#333333] text-[14px] leading-[22px] font-[400] font-medium mt-[10px]">3 accounts</p>
              </div>
              <div className="w-[221px]">
                <h1 className="text-primary text-[22px] leading-[22px] font-[400] font-extraBold">Linkedin</h1>
                <p className="text-[#333333] text-[14px] leading-[22px] font-[400] font-medium mt-[10px]">1 account, 2 business account</p>
              </div>
            </div>
            <div className="flex justify-between mt-[19px]">
              <div className="w-[221px]">
                <h1 className="text-primary text-[22px] leading-[22px] font-[400] font-extraBold">Instagram</h1>
                <p className="text-[#333333] text-[14px] leading-[22px] font-[400] font-medium mt-[10px]">1 public account, 2 private accounts</p>
              </div>
              <div className="w-[221px]">
                <h1 className="text-primary text-[22px] leading-[22px] font-[400] font-extraBold">Facebook</h1>
                <p className="text-[#333333] text-[14px] leading-[22px] font-[400] font-medium mt-[10px]">1 account</p>
              </div>
            </div>
          </div>
          <div className="mt-[21px]">
            <h1 className="text-primary text-[22px] leading-[22px] font-[400] font-extraBold">Michael Bage - 33 years old, Marrakesh, Morocco</h1>
            <p className="text-[#333333] text-[14px] leading-[22px] font-[400] font-medium mt-[5px]">+100 connected accounts</p>
          </div>
          <div className="mt-[53px]">
            <h1 className="text-primary text-[22px] leading-[22px] font-[400] font-extraBold">Michael Baage - unkown</h1>
            <p className="text-[#333333] text-[14px] leading-[22px] font-[400] font-medium mt-[5px]">+10 connected accounts</p>
          </div>
          <div className="mt-[53px]">
            <h1 className="text-primary text-[22px] leading-[22px] font-[400] font-extraBold">Michael Bage - 10 years old</h1>
            <p className="text-[#333333] text-[14px] leading-[22px] font-[400] font-medium mt-[5px]">+120 connected accounts</p>
          </div>
        </div>
        <div>
          <div className="w-full bg-white border-[1px] border-solid border-[#E0E0E0] rounded-[6px] pb-[16px]]">
            <div className="flex">
              <img src="images/1.png" alt='pic1' className="w-[164px]" />
              <img src="images/2.png" alt='pic2' className="w-[145px]" />
            </div>
            <div className="flex justify-end">
              <div className="w-[125px] h-[32px] bg-[#666666] rounded-tl-[3px]  flex justify-center items-center mt-[10px]">
                <img src='images/union.svg' alt="union" className="w-[17px]" />
                <p className="text-white text-[10px] leading-[22px] font-[400] font-medium ml-[5px]">See more images</p>
              </div>
            </div>
            <div className="flex px-[16px] justify-between mt-[20px]">
              <h1 className="text-[#333333] text-[30px] leading-[22px] font-[400] font-extraBold">Michael Båge</h1>
              <img src='images/info.svg' alt="info" />
            </div>
            <div className="w-full h-[1px] border-b-[1px] border-solid border-gray mt-[20px]"></div>
            <div className="px-[16px] py-[16px]">
              <p className="text-[#333333] text-[14px] leading-[22px] font-[400] font-medium">
                Michael is born in Stockholm, and currently lives in London, England, UK. He is a Finance student at Regent’s University London.<br />
                <span className="mt-[10px]">Michael owns approximatley +400 different accounts across +200 platforms. </span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-right text-[#828282] text-[12px] leading-[22px] font-[400] font-medium">Report an issue</p>
          </div>          
        </div>
      </div>
    </section>
  )
}

export default Search