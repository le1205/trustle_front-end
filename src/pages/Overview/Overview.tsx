import React from "react";
import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <section className="pl-[42px] pr-[24px] lg:pl-[128px] lg:pr-[113px] flex justify-center mb-[30px]">
      <div className="max-w-[1440px] w-full">
        <h1 className="text-black text-[19.73px] lg:text-[32.4043px] leading-[25px] lg:leading-[49px] font-[400] font-bold mt-[20px] lg:mt-0">How Search works</h1>
        <div className="pl-0 lg:pl-[14px] mt-[25px] lg:mt-[38px] gap-[20px] flex flex-col">
          <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-regular">Trustle’s search engine is built with the purpose of allowing searchers identify all online accounts connected to any person you want to search.</p>
          <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-regular">For instance, if person A wants to find all online accounts of person B, - person A will enter the online username of person B (or any other knowledgable information e.g. their full name), and Trustle will i. generate plausible username combinations that could belong to person B (through statistical evidence), and ii. check the authenticity of all accounts across all platforms (through crossmatching up-to-date meta-databases and/or URL-validating).</p>
          <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-regular">After a well-assessed search, Trustle will display the profiles with the highest statistical correlation to person B. After searching, you can filter through the accounts to find either specific platforms or other people with a similar name.</p>
          <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-regular">Trustle was originally designed to help individuals view and mange their personal ‘digital trails’. To access these tools create your account <Link to='/signup' className="cursor-pointer underline">here</Link>.</p>
        </div>
      </div>
    </section>
  )
}

export default Overview