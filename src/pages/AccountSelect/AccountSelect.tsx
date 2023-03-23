import Account from "components/Account";
import ItemInfo from "components/ItemInfo";
import React from "react";

const AccountSelect = () => {
  return (
    <section className="px-[25px] lg:pl-[108px] lg:pr-[108px] flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-[1440px]">
        <div className="col-span-1 lg:col-span-2">
          <Account />
        </div>        
        <div className="w-fit mx-auto mt-[256px] lg:mt-0 mb-[65px] lg:mb-0">
          <ItemInfo />
        </div>
      </div>
    </section>
  )
}

export default AccountSelect