import React, { useState, useEffect } from "react";
import { useLocation  } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AccountTab = () => {
  const location = useLocation();
  const [ account, setAccount ] = useState<boolean>(false);

  useEffect(() => {
    location.pathname === '/account' ? setAccount(true) : setAccount(false);
  }, [location.pathname])

  return (
    <Tabs>
      <TabList>
        <Tab><p className="text-[10px] lg:text-[15px] leading-[16px] lg:leading-[22px]">Social</p></Tab>
        <Tab><p className="text-[10px] lg:text-[15px] leading-[16px] lg:leading-[22px]">Creative</p></Tab>
        <Tab><p className="text-[10px] lg:text-[15px] leading-[16px] lg:leading-[22px]">Music</p></Tab>
        <Tab><p className="text-[10px] lg:text-[15px] leading-[16px] lg:leading-[22px]">Tech</p></Tab>
        <Tab><p className="text-[10px] lg:text-[15px] leading-[16px] lg:leading-[22px]">Gaming</p></Tab>
        <Tab><p className="text-[10px] lg:text-[15px] leading-[16px] lg:leading-[22px]">Dating</p></Tab>
        <Tab><p className="text-[10px] lg:text-[15px] leading-[16px] lg:leading-[22px]">DNA</p></Tab>
        { account && <Tab><p className="text-[10px] lg:text-[15px] leading-[16px] lg:leading-[22px]">Edit Accouts</p></Tab>}
      </TabList>
      
      <TabPanel>
        <div className="flex flex-col gap-[27px] lg:gap-[43px]">
          <div className="flex items-center">
            <img src="/images/snapchat.svg" alt="snapchat" className="w-[17px] lg:w-[23px]" />
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">2 accounts identified: <span className="underline">michael.bage</span>, <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <img src="/images/twitter.svg" alt="twitter" className="w-[17px] lg:w-[23px]" />
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <img src="/images/facebook.svg" alt="facebook" className="w-[17px] lg:w-[23px]" />
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <img src="/images/tiktok.svg" alt="tiktok" className="w-[17px] lg:w-[23px]" />
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">3 accounts identified: <span className="underline">michaelbage</span>, <span className="underline">michael.bage</span>, <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <img src="/images/voi.svg" alt="voi" className="w-[17px] lg:w-[23px]" />
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <img src="/images/linkedin.svg" alt="linkedin" className="w-[17px] lg:w-[23px]" />
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
        </div>        
      </TabPanel>
      <TabPanel>
        <div className="flex flex-col gap-[27px] lg:gap-[43px]">
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/zhizhuwang.svg" alt="zhizhuwang" className="w-[12px] lg:w-[16px]" />
            </div>            
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">2 accounts identified: <span className="underline">michael.bage</span>, <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/adobe.svg" alt="adobe" className="w-[16px] lg:w-[22px]" />
            </div>  
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/adobe_cloud.svg" alt="adobe_cloud" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/icopy.svg" alt="icopy" className="w-[13px] lg:w-[17px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">3 accounts identified: <span className="underline">michaelbage</span>, <span className="underline">michael.bage</span>, <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/dribbble.svg" alt="dribbble" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/tshape.svg" alt="tshape" className="w-[9px] lg:w-[12px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
        </div>   
      </TabPanel>
      <TabPanel>
        <div className="flex flex-col gap-[27px] lg:gap-[43px]">
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/zhizhuwang.svg" alt="zhizhuwang" className="w-[12px] lg:w-[16px]" />
            </div>            
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">2 accounts identified: <span className="underline">michael.bage</span>, <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/adobe.svg" alt="adobe" className="w-[16px] lg:w-[22px]" />
            </div>  
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/adobe_cloud.svg" alt="adobe_cloud" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/icopy.svg" alt="icopy" className="w-[13px] lg:w-[17px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">3 accounts identified: <span className="underline">michaelbage</span>, <span className="underline">michael.bage</span>, <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/dribbble.svg" alt="dribbble" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/tshape.svg" alt="tshape" className="w-[9px] lg:w-[12px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="flex flex-col gap-[27px] lg:gap-[43px]">
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/zhizhuwang.svg" alt="zhizhuwang" className="w-[12px] lg:w-[16px]" />
            </div>            
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">2 accounts identified: <span className="underline">michael.bage</span>, <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/adobe.svg" alt="adobe" className="w-[16px] lg:w-[22px]" />
            </div>  
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/adobe_cloud.svg" alt="adobe_cloud" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/icopy.svg" alt="icopy" className="w-[13px] lg:w-[17px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">3 accounts identified: <span className="underline">michaelbage</span>, <span className="underline">michael.bage</span>, <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/dribbble.svg" alt="dribbble" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/tshape.svg" alt="tshape" className="w-[9px] lg:w-[12px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="flex flex-col gap-[27px] lg:gap-[43px]">
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/zhizhuwang.svg" alt="zhizhuwang" className="w-[12px] lg:w-[16px]" />
            </div>            
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">2 accounts identified: <span className="underline">michael.bage</span>, <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/adobe.svg" alt="adobe" className="w-[16px] lg:w-[22px]" />
            </div>  
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/adobe_cloud.svg" alt="adobe_cloud" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/icopy.svg" alt="icopy" className="w-[13px] lg:w-[17px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">3 accounts identified: <span className="underline">michaelbage</span>, <span className="underline">michael.bage</span>, <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/dribbble.svg" alt="dribbble" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/tshape.svg" alt="tshape" className="w-[9px] lg:w-[12px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="flex flex-col gap-[27px] lg:gap-[43px]">
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/zhizhuwang.svg" alt="zhizhuwang" className="w-[12px] lg:w-[16px]" />
            </div>            
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">2 accounts identified: <span className="underline">michael.bage</span>, <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/adobe.svg" alt="adobe" className="w-[16px] lg:w-[22px]" />
            </div>  
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/adobe_cloud.svg" alt="adobe_cloud" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/icopy.svg" alt="icopy" className="w-[13px] lg:w-[17px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">3 accounts identified: <span className="underline">michaelbage</span>, <span className="underline">michael.bage</span>, <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/dribbble.svg" alt="dribbble" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/tshape.svg" alt="tshape" className="w-[9px] lg:w-[12px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="flex flex-col gap-[27px] lg:gap-[43px]">
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/zhizhuwang.svg" alt="zhizhuwang" className="w-[12px] lg:w-[16px]" />
            </div>            
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">2 accounts identified: <span className="underline">michael.bage</span>, <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/adobe.svg" alt="adobe" className="w-[16px] lg:w-[22px]" />
            </div>  
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/adobe_cloud.svg" alt="adobe_cloud" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/icopy.svg" alt="icopy" className="w-[13px] lg:w-[17px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">3 accounts identified: <span className="underline">michaelbage</span>, <span className="underline">michael.bage</span>, <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/dribbble.svg" alt="dribbble" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/tshape.svg" alt="tshape" className="w-[9px] lg:w-[12px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
        </div>
      </TabPanel>    
      {
        account &&  <TabPanel>
                      <div className="flex gap-[26px] pl-[32px] lg:pl-[46px]">
                        <p className="text-secondary font-arial font-[400] text-[10.3668px] lg:text-[12.6272px] leading-[9px] lg:leading-[11px] underline cursor-pointer">Clear</p>
                        <p className="text-secondary font-arial font-[400] text-[10.3668px] lg:text-[12.6272px] leading-[9px] lg:leading-[11px] underline cursor-pointer">Undo</p>
                        <p className="text-secondary font-arial font-[400] text-[10.3668px] lg:text-[12.6272px] leading-[9px] lg:leading-[11px] underline cursor-pointer">Verify all</p>
                      </div>
                      <div className="flex flex-col gap-[27px] lg:gap-[43px] mt-[10px]">
                        <div className="flex items-center">
                          <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
                            <img src="/images/zhizhuwang.svg" alt="zhizhuwang" className="w-[12px] lg:w-[16px]" />
                          </div>        
                          <div className="flex items-center gap-[10px]">
                            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">2 accounts identified: <span className="underline">michael.bage</span>, <span className="underline">michaelbage</span></p>
                            <p className="text-[#4F4F4F] text-[10px] leading-[22px] font-arial font-[400] cursor-pointer"><span className="underline">Add</span>&nbsp;+</p>
                          </div>                              
                        </div>
                        <div className="flex items-center">
                          <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
                            <img src="/images/adobe.svg" alt="adobe" className="w-[16px] lg:w-[22px]" />
                          </div>  
                          <div className="flex items-center gap-[10px]">
                            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbagebage</span></p>
                            <p className="text-[#4F4F4F] text-[10px] leading-[22px] font-arial font-[400] cursor-pointer"><span className="underline">Add</span>&nbsp;+</p>
                          </div>                              
                        </div>
                        <div className="flex items-center">
                          <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
                            <img src="/images/adobe_cloud.svg" alt="adobe_cloud" className="w-[16px] lg:w-[22px]" />
                          </div>
                          <div className="flex items-center gap-[10px]">
                            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
                            <p className="text-[#4F4F4F] text-[10px] leading-[22px] font-arial font-[400] cursor-pointer"><span className="underline">Add</span>&nbsp;+</p>
                          </div>                             
                        </div>
                        <div className="flex items-center">
                          <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
                            <img src="/images/icopy.svg" alt="icopy" className="w-[13px] lg:w-[17px]" />
                          </div>
                          <div className="flex items-center gap-[10px]">
                            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">3 accounts identified: <span className="underline">michaelbage</span>, <span className="underline">michael.bage</span>, <span className="underline">michaelbagebage</span></p>
                            <p className="text-[#4F4F4F] text-[10px] leading-[22px] font-arial font-[400] cursor-pointer"><span className="underline">Add</span>&nbsp;+</p>
                          </div>                              
                        </div>
                        <div className="flex items-center">
                          <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
                            <img src="/images/dribbble.svg" alt="dribbble" className="w-[16px] lg:w-[22px]" />
                          </div>
                          <div className="flex items-center gap-[10px]">
                            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbage</span></p>
                            <p className="text-[#4F4F4F] text-[10px] leading-[22px] font-arial font-[400] cursor-pointer"><span className="underline">Add</span>&nbsp;+</p>
                          </div>                               
                        </div>
                        <div className="flex items-center">
                          <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
                            <img src="/images/tshape.svg" alt="tshape" className="w-[9px] lg:w-[12px]" />
                          </div>
                          <div className="flex items-center gap-[10px]">
                            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
                            <p className="text-[#4F4F4F] text-[10px] leading-[22px] font-arial font-[400] cursor-pointer"><span className="underline">Add</span>&nbsp;+</p>
                          </div>                           
                        </div>
                      </div>
                    </TabPanel>
      }
      <div className="flex mt-[44px] lg:mt-[20px] pl-0 lg:pl-[46px] gap-[160px] lg:gap-[223px]">
        <p className="text-secondary text-[9px] lg:text-[12.6272px] leading-[9px] lg:leading-[11px] font-[400] font-arial">Accounts are not verified - <span className="underline cursor-pointer">edit</span></p>
        <p className="text-secondary text-[9px] lg:text-[12.6272px] leading-[9px] lg:leading-[11px] font-[400] font-arial">Report an issue</p>
      </div>
    </Tabs>
  )
}

export default AccountTab