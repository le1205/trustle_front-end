import React from "react";

const Faq = () => {

  return (
    <section className="pl-[42px] pr-[24px] lg:pl-[128px] lg:pr-[113px] flex justify-center mb-[30px]">
      <div className="max-w-[1440px] w-full">
        <h2 className="text-black text-[19.73px] lg:text-[32.4043px] leading-[25px] lg:leading-[49px] font-[400] font-extraBold mt-[20px] lg:mt-0">FAQs</h2>
        <div className="mt-[25px] lg:mt-[38px] gap-[30px] flex flex-col">
          <div>
            <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-bold">Q: What is Trustle?</p>
            <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-regular">A: Trustle is an Anti-AGI (Artificial General Intelligence) FPO (For-Profit Organisation) that focuses on managing digital trails and online data.</p>
          </div>
          <div>
            <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-bold">Q: What services does Trustle provide?</p>
            <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-regular">A: Trustle provides services to manage digital trails and online data to prevent the development and impact of Artificial General Intelligence (AGI), including the tasks of locating all your online accounts and removing them according to your will.</p>
          </div>
          <div>
            <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-bold">Q: What does the future behold?</p>
            <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-regular">A: It is uncertain what the terminal state of humans will be in the future, e.g. 1,000,000 years from now. It is clear that there is not only a finite amount of recourses on earth - but also the universe. The consensus outlook is that globalisation will continue in the decades to come, causing convergence and sameness - but on scale (one big global market / ”the world is flat”) (<a href="https://www.amazon.co.uk/Life-3-0-Being-Artificial-Intelligence/dp/024123719X" target="_blank" rel="noreferrer" className="underline cursor-pointer">A</a>).</p>            
          </div>
          <div>
            <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-regular">The global plateu outlook of human progress is an inevitable road to extinction without technological advancements to relieve competitive pressures (expansion of linear competition at global scale &gt; conflict/end of resources &gt; extinction). From this standpoint, the coin-flip risk associated with developing robots transcending humans collective intelligence (“nothing or something” / “immortality or extinction”) is 1. inevitable (it must happen) as robots do not have ‘needs’ as humans do (they have no demands i.e. all added value resides with humans), and 2. it will prevent the current ‘platue’ outlook but in return provide us the coin-flip risk that is associated (take-off? or bye-bye?) (<a href="https://www.amazon.co.uk/Zero-One-Notes-Start-Future/dp/0753555204/ref=sr_1_2?hvlocint=62547&keywords=0+to+1+peter+thiel&sr=8-2" target="_blank" rel="noreferrer" className="underline cursor-pointer">B</a>, <a href="https://www.youtube.com/watch?v=fQ4rc7npiXQ" target="_blank" rel="noreferrer" className="underline cursor-pointer">C</a>).</p>
          </div>
          <div>
            <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-bold">Q: Why doesn’t Trustle participate in AI?</p>
            <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-regular">A: Most AI models are built using similar architectural structures as living organisms brains e.g. neural networks. These models use auto-encoding, reinforcement learning, and other techniques to automate the alignment, learning and efficiency of the models respective input and output capabilities i.e. they are self-learning and the true mechanisms underneath are unknown which is why these models are referred to as ‘black-boxes’ (<a href="https://openai.com/blog/our-approach-to-alignment-research" target="_blank" rel="noreferrer" className="underline pointer">1</a>, <a href="https://www.lesswrong.com/posts/bxt7uCiHam4QXrQAA/cyborgism" target="_blank" rel="noreferrer" className="underline cursor-pointer">2</a>, <a href='https://www.lesswrong.com/posts/t9svvNPNmFf5Qa3TA/mysteries-of-mode-collapse' target="_blank" rel="noreferrer" className="underline cursor-pointer">3</a>).</p>            
          </div>
          <div>
            <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-regular">Multiple studies have shown how models built with one purpose, e.g. generating images, have learnt other unintentional skills such as counting, text generating, and more. Max Tegmark explains consciousness as the act of processing information (and nothing else) which implies that today’s models are already ‘conscious’ to a certain degree (<a  href='https://www.openphilanthropy.org/research/some-background-on-our-views-regarding-advanced-artificial-intelligence/#:~:text=Definition%20%231%3A%20Roughly%20and%20conceptually,the%20agricultural%20or%20industrial%20revolution.' target="_blank" rel="noreferrer" className="underline cursor-pointer">4</a>, <a href="https://www.amazon.com/Superintelligence-Dangers-Strategies-Nick-Bostrom/dp/0199678111/?pldnSite=1" target="_blank" rel="noreferrer" className="underline cursor-pointer">5</a>, <a href="https://www.lesswrong.com/posts/uMQ3cqWDPHhjtiesc/agi-ruin-a-list-of-lethalities" target="_blank" rel="noreferrer" className="underline cursor-pointer">6</a>).</p>
          </div>
          <div>
            <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-regular">AGI, ANI, AI, ..., are and will improve our daily lives for the better, but for this to be accurately implemented, it is believed that we will require fully functional alignment technology to work - not any laws or regulations. The proposed technology solution is ‘RLHF’ (Reinforcement Learning from Human Feedback) which is a high-level concept that explores the possibility of adjusting the reinforcement learning according to our (human) feedback which will positively incentivise human-beneficial actions, i.e. aligning the technology to our needs (<a href="https://www.alignmentforum.org/posts/5bd75cc58225bf0670375575/the-learning-theoretic-ai-alignment-research-agenda" target="_blank" rel="noreferrer" className="underline cursor-pointer">7</a>, <a href="https://www.lesswrong.com/posts/vJFdjigzmcXMhNTsx/simulators" target="_blank" rel="noreferrer" className="underline cursor-pointer">8</a>, <a href="https://www.youtube.com/watch?v=uYt84WMmw24&list=LLhAKPMQIXQLwzrZ7xEEygug&index=4" target="_blank" rel="noreferrer" className="underline cursor-pointer">9</a>).</p>
          </div>
          <div>
            <p className="text-black text-[19.35px] lg:text-[24.7907px] leading-[29px] lg:leading-[37px] font-[400] font-regular">Trustle aims to accelerate the development of AGI but is prioritising a caution over speed approach in our R&D. An approach that we highly endorse to our competitors as well.</p>
          </div>
        </div>      
      </div>
    </section>
  )
}

export default Faq