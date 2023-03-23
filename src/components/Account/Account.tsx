import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Account = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>          
          <p className="text-[11.5px] lg:text-[15px] leading-[17px] lg:leading-[22px]">Social</p>
        </Tab>
        <Tab><p className="text-[11.5px] lg:text-[15px] leading-[17px] lg:leading-[22px]">Creative</p></Tab>
        <Tab><p className="text-[11.5px] lg:text-[15px] leading-[17px] lg:leading-[22px]">Music</p></Tab>
        <Tab><p className="text-[11.5px] lg:text-[15px] leading-[17px] lg:leading-[22px]">Tech</p></Tab>
        <Tab><p className="text-[11.5px] lg:text-[15px] leading-[17px] lg:leading-[22px]">Gaming</p></Tab>
        <Tab><p className="text-[11.5px] lg:text-[15px] leading-[17px] lg:leading-[22px]">Dating</p></Tab>
        <Tab><p className="text-[11.5px] lg:text-[15px] leading-[17px] lg:leading-[22px]">DNA</p></Tab>
      </TabList>
      
      <TabPanel>
        <div className="flex flex-col gap-[27px] lg:gap-[43px]">
          <div className="flex items-center">
            <img src="images/snapchat.svg" alt="snapchat" className="w-[17px] lg:w-[23px]" />
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">2 accounts identified: michael.bage, michaelbage</p>
          </div>
          <div className="flex items-center">
            <img src="images/twitter.svg" alt="twitter" className="w-[17px] lg:w-[23px]" />
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: michaelbagebage</p>
          </div>
          <div className="flex items-center">
            <img src="images/facebook.svg" alt="facebook" className="w-[17px] lg:w-[23px]" />
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: Michael Båge</p>
          </div>
          <div className="flex items-center">
            <img src="images/tiktok.svg" alt="tiktok" className="w-[17px] lg:w-[23px]" />
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">3 accounts identified: michaelbage, michael.bage, michaelbagebage</p>
          </div>
          <div className="flex items-center">
            <img src="images/voi.svg" alt="voi" className="w-[17px] lg:w-[23px]" />
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: michaelbage</p>
          </div>
          <div className="flex items-center">
            <img src="images/linkedin.svg" alt="linkedin" className="w-[17px] lg:w-[23px]" />
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: Michael Båge</p>
          </div>
        </div>        
      </TabPanel>
      <TabPanel>
        <div className="flex flex-col gap-[27px] lg:gap-[43px]">
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="images/zhizhuwang.svg" alt="zhizhuwang" className="w-[12px] lg:w-[16px]" />
            </div>            
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">2 accounts identified: michael.bage, michaelbage</p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="images/adobe.svg" alt="adobe" className="w-[16px] lg:w-[22px]" />
            </div>  
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: michaelbagebage</p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="images/adobe_cloud.svg" alt="adobe_cloud" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: Michael Båge</p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="images/icopy.svg" alt="icopy" className="w-[13px] lg:w-[17px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">3 accounts identified: michaelbage, michael.bage, michaelbagebage</p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="images/dribbble.svg" alt="dribbble" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: michaelbage</p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="images/tshape.svg" alt="tshape" className="w-[9px] lg:w-[12px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: Michael Båge</p>
          </div>
        </div>   
      </TabPanel>
      <TabPanel>
        <h2>This is a Music Page</h2>
      </TabPanel>
      <TabPanel>
        <h2>This is a Tech Page</h2>
      </TabPanel>
      <TabPanel>
        <h2>This is a Gaming Page</h2>
      </TabPanel>
      <TabPanel>
        <h2>This is a Dating Page</h2>
      </TabPanel>
      <TabPanel>
        <h2>This is a DNA Page</h2>
      </TabPanel>
    </Tabs>
  )
}

export default Account