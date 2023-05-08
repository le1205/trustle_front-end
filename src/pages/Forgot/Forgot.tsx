import React, { useState } from "react";
import { To, useNavigate } from 'react-router-dom';
import { Formik } from "formik";
import * as yup from "yup";
import { useFormik } from "formik";
import { forgotPassword } from "api";

const Forgot = () => {
  const navigate = useNavigate();
  const [responseError, setResponseError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>();
  window.localStorage.clear();

  const handleNavigate = (e: { preventDefault: () => void; }, url: To) => {
    e.preventDefault();
    navigate(url)
  }

  const validationFormSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email address.")
      .required("email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationFormSchema,
    onSubmit: async (values) => {
      console.log(values.email);
      if (values.email && values.email.length !== 0) {
        setLoading(true);
        const result = await forgotPassword(values.email);
        if (result && !result.isError) {
          setResponseError(result.message);
          setLoading(false);
        } else if (result && result.isError === true) {
          setResponseError(result.message);
          setLoading(false);
        } else {
          setResponseError("Update Failed!");
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
      setLoading(false);
    },
  });

  return (
    <section>
      {
        responseError.length === 0 ?
          <form onSubmit={formik.handleSubmit} className="flex justify-center flex-col items-center">
            <div className="mt-[40px]">
              <img src="/images/signup_logo.svg" alt="signup_logo" className="w-[126.1px]" />
            </div>
            <div className="mt-[50px] flex flex-col items-center w-full lg:w-fit gap-[11.47px] lg:gap-[17.75px]">
              <input
                type='email'
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={`${formik.touched.email && formik.errors.email ? "border-solid border-[1px] border-[#ff0000]" : ""} w-[90%] lg:w-[526px] h-[38.43px] lg:h-[59.22px] bg-[#F2F2F2] rounded-[22.6049px] lg:rounded-[34.8344px] text-[#8BA2B1] text-[13.9036px] lg:text-[21.4257px] leading-[21px] lg:leading-[32px] font-[400] font-light pl-[18.7px] lg:pl-[28.9px] outline-none ring-0`}
                placeholder="Submit email"
              />
              <p className="text-[#ff0000] mt-[-20px]">
                {formik.touched.email && formik.errors.email}
              </p>
            </div>

            <div className="mt-[20px] lg:mt-[30px] mb-[50px] flex flex-col lg:flex-row w-[90%] lg:w-fit gap-3 lg:gap-1">
              <button onClick={(e) => handleNavigate(e, "/login")} className="w-full lg:w-[265px] h-[38px] lg:h-[59px] bg-[#F2F2F2] rounded-[32.4462px] lg:rounded-[50px] text-primary text-[12.9785px] lg:text-[20px] leading-[19px] lg:leading-[30px] font-[700] font-extraBold hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)]">Back</button>
              <button type='submit' disabled={loading} className="w-full lg:w-[265px] h-[38px] lg:h-[59px] bg-[#5f8fe6] rounded-[32.4462px] lg:rounded-[50px] text-white text-[12.9785px] lg:text-[20px] leading-[19px] lg:leading-[30px] font-[700] font-extraBold hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
                {
                  loading ?
                    <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg> :
                    "Next"
                }
              </button>
            </div>
          </form> :
          <div className="flex justify-center flex-col items-center">
            <div className="mt-[40px]">
              <img src="/images/signup_logo.svg" alt="signup_logo" className="w-[126.1px]" />
            </div>
            <div className="w-[580px] text-center text-[#8BA2B1] text-[21.3176px] font-[400] leading-[32px] font-regular mt-[75px]">
              {responseError}
            </div>
            <div className="mt-[20px] lg:mt-[30px] mb-[50px] flex flex-col lg:flex-row w-[90%] lg:w-fit gap-3 lg:gap-1">
              <button onClick={(e) => setResponseError('')} className="w-full lg:w-[265px] h-[38px] lg:h-[59px] bg-[#F2F2F2] rounded-[32.4462px] lg:rounded-[50px] text-[#5F8FE6] text-[12.9785px] lg:text-[20px] leading-[19px] lg:leading-[30px] font-[700] font-extraBold hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)]">Try again</button>
              <button onClick={(e) => handleNavigate(e, "/login")} className="w-full lg:w-[265px] h-[38px] lg:h-[59px] bg-[#5f8fe6] rounded-[32.4462px] lg:rounded-[50px] text-white text-[12.9785px] lg:text-[20px] leading-[19px] lg:leading-[30px] font-[700] font-extraBold hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)]">Login</button>
            </div>
          </div>
      }

    </section>
  )
}

export default Forgot