import React from "react";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="pl-[42px] pr-[24px] lg:pl-[128px] lg:pr-[113px] flex justify-center mb-[30px]">
      <div className="max-w-[1440px] w-full">
        <h1 className="text-black text-[19.73px] lg:text-[32.4043px] leading-[25px] lg:leading-[49px] font-[400] font-bold mt-[50px] lg:mt-0]">About</h1>
        <div className="pl-0 lg:pl-[14px] mt-[25px] lg:mt-[38px] gap-[20px] flex flex-col">
          <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-regular">Trustle is an Anti-AGI (Artificial General Intelligence) FPO (For-Profit Organisation) that specialises in the management of digital trails and online data(read how it works <Link to="/overview" className="underline">here</Link>).</p>
          <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-regular">Human life is already largely ‘digital’, i.e. we work and interact mostly online (the average person spends 10 hours a day online, and this does not take into account the ‘digital spillover effect’ (where the surroundings (people and objects) within your proximity are also online)). These transactions are both monitored and stored as valuable data.</p>
          <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-regular">The 1s and 0s that built our amazing technology (computers, internet, software, ...), have also left our online presence interpretable as 1s and 0s. The digitisation of our existence and collective knowledge provides multiple possibilities. The transitional affects are initially materially positive, e.g. the creation of separate generative AI models for various fields of scientific innovation (medicine, applied mathematics, cosmology, ...) and the replacement of ‘repetitive’ jobs (manufacturing, transportation, admin, ...).</p>
          <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-regular">But given the mass and density of our digital economy, we are already far beyond the requirements of allowing RL-based (self-training) AI models fully steering human’s progress from here. This can cause unprecedented turns if not aligned correctly or put in the wrong hands (read our research <Link to='/research' className="cursor-pointer underline">here</Link>).</p>
        </div>
      </div>
    </section>
  )
}

export default About