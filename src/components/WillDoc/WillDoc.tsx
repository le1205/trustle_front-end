import React from "react";

const WillDoc = () => {
  return (
    <>
      <div className="px-[29px] mt-[44px]">
        <img src='/images/logo.png' alt="logo" className='w-[119.8px]' />
      </div>
      <div className="px-[40px] mt-[10px]" style={{ pageBreakAfter: 'always' }}>
        <div>
          <h1 className="text-black text-[13px] leading-[19px] font-[800]">Will</h1>
          <h1 className="text-black text-[10px] leading-[16px] font-[800] mt-[5px]">Section 1 - Power of attorney</h1>
          <p className="text-[#8BA2B1] font-[400] text-[7px] leading-[7px] mt-[5px]">These accounts belong to *Client: legal name* with the social security number *Client: Social security number*:</p>
          <ul className="ml-[10px] text-[#8BA2B1] font-[400] text-[7px] leading-[10px] mt-[5px]">
            <li>&bull; Meta, Inc. (facebook.com/account/URL, instagram.com/account/URL, ...)</li>
            <li>&bull; Snap, Inc. (snapchat.com/account/URL)</li>
            <li>&bull; Twitter, Inc. (twitter.com/account/URL)</li>
            <li>&bull; Alphabet, Inc. (google.com/user/URL, ...)’</li>
            <li>&bull; Tinder, Inc. (tinder.com/account(URL)</li>
            <li>&bull; ... # KEEP THE LIST GOING</li>
          </ul>
          <p className="text-[#8BA2B1] font-[400] text-[7px] leading-[12px] mt-[5px]">I, [*Client: legal name*] with the social security number *Client: Social security number* confirm that I obtain the rightful ownership of all attached accounts (defined under section 3) and adhere Trustle in the assignment of removing all my online accounts in the event of death (defined under section 2).</p>
        </div>
        <div>
          <h1 className="text-black text-[10px] leading-[16px] font-[800] mt-[30px]">Section 2 - Legal Permutations</h1>
          <p className="text-[#8BA2B1] font-[400] text-[7px] leading-[7px] mt-[5px]">Death is legally defined as the irreversible stopping of all brain and bodily functions, as confirmed by a qualified medical practitioner, as outlined in Council Directive 93/119/EC (1993), Uniform Determination of Death Act (UDDA 1981), and the Births and Deaths Registration Act 1953. </p>
          <p className="text-[#8BA2B1] font-[400] text-[7px] leading-[7px] mt-[5px]">According to Trustle's terms and conditions, if a user has not logged into their accounts for a minimum of one year, they will be deemed inactive and considered deceased under the agreement.</p>
        </div>
        <div>
          <h1 className="text-black text-[10px] leading-[16px] font-[800] mt-[30px]">Section 3 - Evidence of Ownership</h1>
          <p className="text-[#8BA2B1] font-[400] text-[7px] leading-[7px] mt-[5px]">In order to support and establish the correlation of any accounts with uncertain or unrecognizable ownership to ‘Client: Legal Name’ with Social Security Number ‘Client: Social Security Number’, we may have attached additional evidence to clarify such ownership to the fullest extent possible.</p>
        </div>
      </div>
      
      <div className="px-[30px] mt-[50px]">
        <div className="flex">
          <div>
            <h1 className="text-black text-[10px] leading-[19px] font-[800]">Name</h1>
            <p className="text-[#8BA2B1] font-[400] text-[6px] leading-[7px] mt-[5px]">First name Last name</p>
          </div>
          <div className="ml-[15px]">
            <h1 className="text-black text-[10px] leading-[19px] font-[800]">Signature</h1>
            <p className="text-[#8BA2B1] font-[400] text-[6px] leading-[7px] mt-[5px]">Signature</p>
          </div>
          <div className="ml-[33px]">
            <h1 className="text-black text-[10px] leading-[19px] font-[800]">Social Security Number</h1>
            <p className="text-[#8BA2B1] font-[400] text-[6px] leading-[7px] mt-[5px]">(YYYY-MM-DD-XXXX)</p>
          </div>
          <div className="ml-[33px]">
            <h1 className="text-black text-[10px] leading-[19px] font-[800]">Date</h1>
            <p className="text-[#8BA2B1] font-[400] text-[6px] leading-[7px] mt-[5px]">(YYYY-MM-DD)</p>
          </div>
        </div>       
      </div> 
      <div className="px-[30px] flex justify-between w-full mt-[60px] items-center">
        <div>
          <h1 className="text-black text-[13px] leading-[19px] font-[800]">Michael Båge</h1>
          <p className="text-[#8BA2B1] font-[400] text-[6px] leading-[7px] mt-[5px]">CEO & Founder</p>
        </div>
        <div className="flex items-end">
          <div className="mb-[10px]">
            <p className="text-[#190202] font-[400] text-[6px] leading-[7px]">Anti-AGI For Profit Organisation</p>
            <p className="text-[#190202] font-[400] text-[6px] leading-[7px] mt-[5px]">www.trustle-beta.com</p>
          </div>
          <div>
            <img src='/images/logo_icon.png' alt="logo_icon" className='w-[30px]' />
          </div>
        </div>
      </div>
    </>
  )
}

export default WillDoc