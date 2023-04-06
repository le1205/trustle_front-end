import React, { useState, useEffect, FormEvent, useContext, useLayoutEffect } from "react";
import ItemInfo from "components/ItemInfo";
import { UseGoogleSearch, SearchResult } from 'api'
import { AppContext, AppContextType } from "context/AppContextProvider";

// type AppContextType = typeof AppContext extends React.Context<infer T> ? T : never;

const Search = () => {

  const { search } = useContext<AppContextType>(AppContext);
  console.log("search", search)

  useEffect(() => {
    const fetchData = async () => {
      const result: SearchResult[] = await UseGoogleSearch(search, 10, 1);
      console.log('result', result)
    }
    fetchData();
  }, [search]);
  
  return (
    <section className="px-[25px] lg:px-[50px] xl:pl-[164px] xl:pr-[108px] flex justify-center mt-[20px] lg:mt-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-[1440px]">
        <div className="col-span-1 lg:col-span-2">
          <p className="text-[#828282] text-[9.99129px] lg:text-[14px] leading-[16px] lg:leading-[22px] font-[400] font-arial">Approximately 105 000 000 profiles (0,43 seconds)</p>
          <div className="mt-[8px] lg:mt-[11px]">
            <img src='/images/1.png' alt="michael" className="w-[40.68px] lg:w-[57px]" />
          </div>
          <div className="mt-[15px] lg:mt-[21px]">
            <h1 className="text-primary tex-[15.7006px] lg:text-[22px] leading-[16px] lg:leading-[22px] font-[700] font-arial">Michael Båge - 21 years old, London, UK</h1>
            <p className="text-[#333333] text-[9.99129px] lg:text-[14px] leading-[16px] lg:leading-[22px] font-[400] font-arial mt-[5px]">+1,000 connected accounts</p>
          </div>
          <div className="mt-[8px] lg:mt-[15px] w-[373.25px] lg:w-[523px]">
            <div className="flex justify-between">
              <div className="w-[158.08px] lg:w-[221px]">
                <h1 className="text-primary tex-[15.7006px] lg:text-[22px] leading-[16px] lg:leading-[22px] font-[700] font-arial">Snapchat</h1>
                <p className="text-[#333333] text-[9.99129px] lg:text-[14px] leading-[16px] lg:leading-[22px] font-[400] font-arial mt-[10px]">3 accounts</p>
              </div>
              <div className="w-[158.08px] lg:w-[221px]">
                <h1 className="text-primary tex-[15.7006px] lg:text-[22px] leading-[16px] lg:leading-[22px] font-[700] font-arial">Linkedin</h1>
                <p className="text-[#333333] text-[9.99129px] lg:text-[14px] leading-[16px] lg:leading-[22px] font-[400] font-arial mt-[10px]">1 account, 2 business account</p>
              </div>
            </div>
            <div className="flex justify-between mt-[19px]">
              <div className="w-[158.08px] lg:w-[221px]">
                <h1 className="text-primary tex-[15.7006px] lg:text-[22px] leading-[16px] lg:leading-[22px] font-[700] font-arial">Instagram</h1>
                <p className="text-[#333333] text-[9.99129px] lg:text-[14px] leading-[16px] lg:leading-[22px] font-[400] font-arial mt-[10px]">1 public account, 2 private accounts</p>
              </div>
              <div className="w-[158.08px] lg:w-[221px]">
                <h1 className="text-primary tex-[15.7006px] lg:text-[22px] leading-[16px] lg:leading-[22px] font-[700] font-arial">Facebook</h1>
                <p className="text-[#333333] text-[9.99129px] lg:text-[14px] leading-[16px] lg:leading-[22px] font-[400] font-arial mt-[10px]">1 account</p>
              </div>
            </div>
          </div>
          <div className="mt-[35px] lg:mt-[21px]">
            <h1 className="text-primary tex-[15.7006px] lg:text-[22px] leading-[16px] lg:leading-[22px] font-[700] font-arial">Michael Bage - 33 years old, Marrakesh, Morocco</h1>
            <p className="text-[#333333] text-[9.99129px] lg:text-[14px] leading-[16px] lg:leading-[22px] font-[400] font-arial mt-[5px]">+100 connected accounts</p>
          </div>
          <div className="mt-[35px] lg:mt-[53px]">
            <h1 className="text-primary tex-[15.7006px] lg:text-[22px] leading-[16px] lg:leading-[22px] font-[700] font-arial">Michael Baage - unkown</h1>
            <p className="text-[#333333] text-[9.99129px] lg:text-[14px] leading-[16px] lg:leading-[22px] font-[400] font-arial mt-[5px]">+10 connected accounts</p>
          </div>
          <div className="mt-[35px] lg:mt-[53px]">
            <h1 className="text-primary tex-[15.7006px] lg:text-[22px] leading-[16px] lg:leading-[22px] font-[700] font-arial">Michael Bage - 10 years old</h1>
            <p className="text-[#333333] text-[9.99129px] lg:text-[14px] leading-[16px] lg:leading-[22px] font-[400] font-arial mt-[5px]">+120 connected accounts</p>
          </div>
        </div>
        <div>
          <ItemInfo />        
        </div>
      </div>
    </section>
  )
}

export default Search