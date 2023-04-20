import React, { useRef } from "react";
import WillDoc from "components/WillDoc";
import jsPDF from 'jspdf';

const Will = () => {
  const docRef = useRef<HTMLInputElement>(null);

  const handleGeneratePdf = () => {
		const doc = new jsPDF({
			format: 'a4',
      orientation: 'portrait',
			unit: 'px',
		});

    const padding = 10;
    if (docRef.current) {
      const content = docRef.current;
      const pageWidth = doc.internal.pageSize.getWidth();
      content.style.width = `${pageWidth - padding * 1}px`;
      
      doc.html(content, {
        callback: (doc: jsPDF) => {
          doc.save('document');
        }
      });
    }
	};

  return (
    <section className="pl-[42px] pr-[24px] lg:px-[128px] flex justify-center mb-[30px]">
      <div className="max-w-[1440px] w-full">
        <div className="flex mt-[20px] lg:mt-0 gap-[20px] items-center">
          <img src="/images/will.svg" alt="will" className="w-[96px]" />
          <h1 className="text-black text-[21.61px] lg:text-[25.2545px] leading-[27px] lg:leading-[32px] font-[800] font-bold">Will</h1>
        </div>        
        <div className="pl-0 lg:pl-[14px] mt-[10px]">
          <p className="text-black text-[19.35px] lg:text-[24.7907px] font-[400] leading-[29px] lg:leading-[37px] font-regular">By signing your will, Trustle ensures that all your online accounts will be removed once you have passed away.</p>
          <p className="text-black text-[19.35px] lg:text-[24.7907px] font-[400] leading-[29px] lg:leading-[37px] font-regular mt-[30px]">Review which accounts are included in your will through visiting your account or reading your will.</p>
          <div className="mt-[30px]">
            <p className="text-secondary text-[18px] font-[400] leading-[22px] font-arial">Last opened:</p>
            <p className="text-secondary text-[18px] font-[400] leading-[22px] font-arial mt-[5px]">(2023-02-07 12:12)</p>
            <button onClick={handleGeneratePdf} className="bg-[#F2F2F2] w-full lg:w-[573px] h-[35px] border-solid border-[1px] border-black flex justify-between items-center px-[22px] mt-[20px]">
              <p className="text-black text-[18px] leading-[22px] font-arial font-[400]">Open Will</p>
              <img src="/images/icon _file.svg" alt="icon _file" className="w-[11.47px]" />
            </button>
          </div>
          <div className="mt-[50px]">
            <p className="text-secondary text-[18px] font-[400] leading-[22px] font-arial">Last signed:</p>
            <p className="text-secondary text-[18px] font-[400] leading-[22px] font-arial mt-[5px]">(2023-02-07 12:15)</p>
            <div className="bg-[#F2F2F2] w-full lg:w-[573px] h-[35px] border-solid border-[1px] border-black flex justify-between items-center px-[22px] mt-[20px]">
              <p className="text-black text-[18px] leading-[22px] font-arial font-[400]">Sign Will</p>
              <img src="/images/icon_file_edit.svg" alt="icon_file_edit" className="w-[13.43px]" />
            </div>
          </div>
          <div className="mt-[50px]">
            <p className="text-secondary text-[18px] font-[400] leading-[22px] font-arial">Uploaded:</p>
            <p className="text-secondary text-[18px] font-[400] leading-[22px] font-arial mt-[5px]">(2023-02-07 12:00)</p>
            <div className="bg-[#F2F2F2] w-full lg:w-[573px] h-[35px] border-solid border-[1px] border-black flex justify-between items-center px-[22px] mt-[20px]">
              <p className="text-black text-[18px] leading-[22px] font-arial font-[400]">Upload Passport copy</p>
              <img src="/images/icon_upload.svg" alt="icon_upload" className="w-[13.43px]" />
            </div>
          </div>
        </div>        
      </div>
      <div className="hidden">
        <div ref={docRef}>
          <WillDoc />
        </div>  
      </div>          
    </section>
  )
}

export default Will