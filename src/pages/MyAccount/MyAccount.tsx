import React from "react";
import AccountTab from "components/AccountTab";
import AccountWMC from "components/AccountWMC";

const MyAccount = () => {
  return (
    <section className="px-[25px] lg:pl-[130px] lg:pr-[100px] flex justify-center">
      <div className="max-w-[1440px] w-full">
        <div className="flex gap-[13px] justify-center lg:justify-start items-end">
          <img src="images/account.svg" alt="account" className="w-[61.7px] lg:w-[72.11px]" />
          <h1 className="text-black text-[21px] lg:text-[25.2545px] font-[800] leading-[27px] lg:leading-[32px] font-extraBold">Your account</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full pl-0 lg:pl-[30px] mt-[10px]">
          <div className="col-span-1 lg:col-span-2">
            <AccountTab />            
          </div>        
          <div className="w-full mx-auto mt-[50px] lg:mt-0 mb-[52px] lg:mb-0">
            <AccountWMC />
          </div>
        </div>
      </div>      
    </section>
  )
}

export default MyAccount