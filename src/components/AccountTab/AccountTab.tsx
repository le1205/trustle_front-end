import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AccountTab = () => {
  const location = useLocation();
  const [ account, setAccount ] = useState<boolean>(false);
  const [tabIndex, setTabIndex] = useState<number>(0);

  useEffect(() => {
    location.pathname === '/account' ? setAccount(true) : setAccount(false);
  }, [location.pathname]);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
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
              <img src="/images/spotify.svg" alt="spotify" className="w-[17px] lg:w-[22px]" />
            </div>            
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">2 accounts identified: <span className="underline">michael.bage</span>, <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/Apple_Music.svg" alt="Apple_Music" className="w-[16px] lg:w-[22px]" />
            </div>  
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/SoundCloud.svg" alt="SoundCloud" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/pandora.svg" alt="pandora" className="w-[13px] lg:w-[17px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">3 accounts identified: <span className="underline">michaelbage</span>, <span className="underline">michael.bage</span>, <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/tidal.svg" alt="tidal" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/deezer.svg" alt="deezer" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/amazon-music.svg" alt="amazon-music" className="w-[18px] lg:w-[24px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/Google_Play_Music.svg" alt="Google_Play_Music" className="w-[13px] lg:w-[18px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/shazam.svg" alt="shazam" className="w-[13px] lg:w-[18px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/last-fm.svg" alt="last-fm" className="w-[13px] lg:w-[18px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="flex flex-col gap-[27px] lg:gap-[43px]">
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/github.svg" alt="github" className="w-[16px] lg:w-[21px]" />
            </div>            
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">2 accounts identified: <span className="underline">michael.bage</span>, <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/stack-overflow.svg" alt="stack-overflow" className="w-[14px] lg:w-[18px]" />
            </div>  
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/codecademy.svg" alt="codecademy" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/replit.svg" alt="replit" className="w-[13px] lg:w-[17px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">3 accounts identified: <span className="underline">michaelbage</span>, <span className="underline">michael.bage</span>, <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/udacity.svg" alt="udacity" className="w-[12px] lg:w-[18px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/coursera.svg" alt="coursera" className="w-[14px] lg:w-[20px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/pluralsight.svg" alt="pluralsight" className="w-[14px] lg:w-[20px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/W3Schools.svg" alt="W3Schools" className="w-[14px] lg:w-[20px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/techcrunch.svg" alt="techcrunch" className="w-[14px] lg:w-[20px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="flex flex-col gap-[27px] lg:gap-[43px]">
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/steam.svg" alt="steam" className="w-[15px] lg:w-[20px]" />
            </div>            
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">2 accounts identified: <span className="underline">michael.bage</span>, <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/xbox.svg" alt="xbox" className="w-[16px] lg:w-[22px]" />
            </div>  
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/playstation.svg" alt="playstation" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/twitch.svg" alt="twitch" className="w-[13px] lg:w-[17px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">3 accounts identified: <span className="underline">michaelbage</span>, <span className="underline">michael.bage</span>, <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/discord.svg" alt="discord" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/roblox.svg" alt="roblox" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="flex flex-col gap-[27px] lg:gap-[43px]">
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/onlyfans.svg" alt="onlyfans" className="w-[18px] lg:w-[22px]" />
            </div>            
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">2 accounts identified: <span className="underline">michael.bage</span>, <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/tinder.svg" alt="tinder" className="w-[14px] lg:w-[18px]" />
            </div>  
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/bumble.svg" alt="bumble" className="w-[14px] lg:w-[18px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/hinge.svg" alt="hinge" className="w-[15px] lg:w-[19px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">3 accounts identified: <span className="underline">michaelbage</span>, <span className="underline">michael.bage</span>, <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/okcupid.svg" alt="okcupid" className="w-[16px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/match.png" alt="match" className="w-[15px] lg:w-[19px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/grnd.svg" alt="grnd" className="w-[13px] lg:w-[16px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/pinkcupid.svg" alt="pinkcupid" className="w-[17px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/pornhub.svg" alt="pornhub" className="w-[17px] lg:w-[22px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="flex flex-col gap-[27px] lg:gap-[43px]">
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/myheritage.svg" alt="myheritage" className="w-[16px] lg:w-[22px]" />
            </div>            
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">2 accounts identified: <span className="underline">michael.bage</span>, <span className="underline">michaelbage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/ancestry.svg" alt="ancestry" className="w-[16px] lg:w-[22px]" />
            </div>  
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/23andme.svg" alt="23andme" className="w-[8px] lg:w-[12px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">Michael Båge</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/Familytreedna.svg" alt="Familytreedna" className="w-[16px] lg:w-[20px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">3 accounts identified: <span className="underline">michaelbage</span>, <span className="underline">michael.bage</span>, <span className="underline">michaelbagebage</span></p>
          </div>
          <div className="flex items-center">
            <div className="w-[17px] lg:w-[23px] flex justify-center items-center">
              <img src="/images/Geneanet.svg" alt="Geneanet" className="w-[14px] lg:w-[18px]" />
            </div>
            <p className="text-black text-[11px] lg:text-[18px] leading-[14px] lg:leading-[22px] font-arial ml-[15px] lg:ml-[23px]">1 account identified: <span className="underline">michaelbage</span></p>
          </div>
        </div>
      </TabPanel>    
      {
        account &&  <TabPanel>
                      <div className="flex gap-[26px] pl-[32px] lg:pl-[46px]">
                        <p onClick={(e) => setTabIndex(0)} className="text-secondary font-arial font-[400] text-[10.3668px] lg:text-[12.6272px] leading-[9px] lg:leading-[11px] underline cursor-pointer">Clear</p>
                        <p onClick={(e) => setTabIndex(0)} className="text-secondary font-arial font-[400] text-[10.3668px] lg:text-[12.6272px] leading-[9px] lg:leading-[11px] underline cursor-pointer">Undo</p>
                        <p onClick={(e) => setTabIndex(0)} className="text-secondary font-arial font-[400] text-[10.3668px] lg:text-[12.6272px] leading-[9px] lg:leading-[11px] underline cursor-pointer">Verify all</p>
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
      <div className="flex mt-[44px] lg:mt-[20px] pl-0 lg:pl-[46px] justify-between w-full lg:justify-start lg:gap-[223px]">
        <p className={`text-secondary ${account ? 'visible' : 'invisible'} text-[9px] lg:text-[12.6272px] leading-[9px] lg:leading-[11px] font-[400] font-arial`}>Accounts are not verified - <span onClick={(e) => setTabIndex(7)} className="underline cursor-pointer">edit</span></p>
        <Link to='/reportissue' className="text-secondary text-[9px] lg:text-[12.6272px] leading-[9px] lg:leading-[11px] font-[400] font-arial">Report an issue</Link>
      </div>
    </Tabs>
  )
}

export default AccountTab