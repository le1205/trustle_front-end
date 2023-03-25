import React from "react";
import AccountTab from "components/AccountTab";
import ItemInfo from "components/ItemInfo";

const AccountSelect = () => {
  return (
    <section className="px-[25px] lg:pl-[161px] lg:pr-[108px] flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-[1440px]">
        <div className="col-span-1 lg:col-span-2">
          <AccountTab />
        </div>        
        <div className="w-full mx-auto mt-[230px] lg:mt-0 mb-[65px] lg:mb-0">
          <ItemInfo />
        </div>
      </div>
    </section>
  )
}

export default AccountSelect