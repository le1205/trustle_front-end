import React, { useState } from "react";
import { To, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as yup from "yup";
import { useFormik } from "formik";
import { registerUser } from "api";

const SignUp = () => {
  const navigate = useNavigate();
  let [loading, setLoading] = useState<boolean>(false);
  const [responseError, setResponseError] = useState<string>();
  const [paswordShow, setPaswordShow] = useState<boolean>(false);
  const [rePaswordShow, setRePaswordShow] = useState<boolean>(false);

  const handleNavigate = (e: { preventDefault: () => void; }, url: To) => {
    e.preventDefault();
    navigate(url)
  }

  const validationSchemaForm = yup.object({
    name: yup
      .string()
      .required("name is required")
      .min(3, "A minimum of 3 characters is required."),
    email: yup
      .string()
      .email("Please enter a valid email address.")
      .required("email is required"),
    password: yup
      .string()
      .required("password is required")
      .min(8, "Your password length must be greater than or equal to 8")
      .matches(
        /[a-z]+/,
        "Your password must contain one or more lowercase characters."
      )
      .matches(
        /[A-Z]+/,
        "Your password must contain one or more uppercase characters."
      )
      .matches(
        /[@$!%*#?&]+/,
        "The password must contain one or more special characters."
      )
      .matches(/\d+/, "Your password must contain one or more numeric values."),
    repassword: yup
      .string()
      .test("match", "Passwords must match", (value, { parent }) => {
        return value === parent.password || value === null;
      })
      .nullable()
      .required("Password confirm is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
      terms: false,
      newsletter: false,
    },
    validationSchema: validationSchemaForm,
    onSubmit: async (values) => { console.log("values", values)
      // if (
      //   values.email &&
      //   values.name &&
      //   values.password &&
      //   values.repassword &&
      //   values.email.length !== 0 &&
      //   values.password.length !== 0 &&
      //   values.repassword.length !== 0 &&
      //   values.password.toLowerCase() === values.repassword.toLowerCase()
      // ) {
      //   setLoading(true);
      //   let lastName = "";
      //   let imageUrl = "";
      //   const result = await registerUser(
      //     values.email,
      //     values.name,
      //     lastName,
      //     imageUrl,
      //     values.password
      //   );
      //   if (result && result.isError === false) {
      //     notify(result.message);
      //     setLoading(false);
      //     navigate("/login");
      //   } else {
      //     setResponseError(
      //       "The account you are trying to register with already exists, please login."
      //     );
      //     setLoading(false);
      //   }
      // } else {
      //   setResponseError(
      //     "The account you are trying to register with already exists, please login."
      //   );
      //   setLoading(false);
      // }
    },
  });

  const showPasswordHandler = (event: React.MouseEvent<SVGSVGElement, MouseEvent>): void => {
    event.preventDefault();
    if (paswordShow) {
      setPaswordShow(false);
    } else {
      setPaswordShow(true);
    }
  };

  const showRePasswordHandler = (event: React.MouseEvent<SVGSVGElement, MouseEvent>): void => {
    event.preventDefault();
    if (rePaswordShow) {
      setRePaswordShow(false);
    } else {
      setRePaswordShow(true);
    }
  };

  const notify = (message: string): void => {
    toast(message);
  }

  return (
    <section>
      <form className="flex justify-center flex-col items-center" onSubmit={formik.handleSubmit}>
        <div className="mt-[70px] lg:mt-[30px]">
          <img src="images/signup_logo.svg" alt="signup_logo" className="w-[81.83px] lg:w-[126.1px]" />
        </div>
        <div className="mt-[31.8px] lg:mt-[49px] flex flex-col items-center w-full lg:w-fit gap-[11.54px] lg:gap-[17.78px]">
          <input 
            type='email' 
            id="email"  
            onChange={formik.handleChange}
            value={formik.values.email}
            className={`${ formik.touched.email && formik.errors.email ? "border-solid border-[1px] border-[#ff0000]" : "" } w-[90%] lg:w-[526px] h-[38.43px] lg:h-[59.22px] bg-[#F2F2F2] rounded-[22.6049px] lg:rounded-[34.8344px] text-[#8BA2B1] text-[13.9036px] lg:text-[21.4257px] leading-[21px] lg:leading-[32px] font-[400] font-light pl-[18.7px] lg:pl-[28.9px] outline-none ring-0`}
            placeholder="Submit email" 
          />
          <p className="text-[#ff0000] mt-[-20px]">
            {formik.touched.email && formik.errors.email}
          </p>

          <input 
            type='text' 
            id="name"  
            onChange={formik.handleChange}
            value={formik.values.name}
            className={`${ formik.touched.name && formik.errors.name ? "border-solid border-[1px] border-[#ff0000]" : "" } w-[90%] lg:w-[526px] h-[38.43px] lg:h-[59.22px] bg-[#F2F2F2] rounded-[22.6049px] lg:rounded-[34.8344px] text-[#8BA2B1] text-[13.9036px] lg:text-[21.4257px] leading-[21px] lg:leading-[32px] font-[400] font-light pl-[18.7px] lg:pl-[28.9px] outline-none ring-0`}
            placeholder="Submit most commonly used usernames*" 
          />
          <p className="text-[#ff0000] mt-[-20px]">
            {formik.touched.name && formik.errors.name}
          </p>

          <div className="relative flex items-center w-[90%] lg:w-[526px]">
            <input 
              type={!paswordShow ? "password" : "text"}
              id='password'
              onChange={formik.handleChange}
              value={formik.values.password} 
              className={`${ formik.touched.password && formik.errors.password ? "border-solid border-[1px] border-[#ff0000]" : "" } w-full h-[38.43px] lg:h-[59.22px] bg-[#F2F2F2] rounded-[22.6049px] lg:rounded-[34.8344px] text-[#8BA2B1] text-[13.9036px] lg:text-[21.4257px] leading-[21px] lg:leading-[32px] font-[400] font-light pl-[18.7px] lg:pl-[28.9px] outline-none ring-0`} 
              placeholder="Submit password" 
            />
            {
              !paswordShow ?
                <svg onClick={showPasswordHandler} xmlns="http://www.w3.org/2000/svg" fill="#000" className="bi bi-eye w-[15px] lg:w-[20px] absolute right-[10px] cursor-pointer" viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>  :
                <svg onClick={showPasswordHandler} xmlns="http://www.w3.org/2000/svg" fill="#000" className="bi bi-eye-slash w-[15px] lg:w-[20px] absolute right-[10px] cursor-pointer" viewBox="0 0 16 16">
                  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                </svg>
            }            
          </div>
          <p className="text-[#ff0000] mt-[-20px]">
            {formik.touched.password && formik.errors.password}
          </p>

          <div className="relative flex items-center w-[90%] lg:w-[526px]">
            <input 
              type={!rePaswordShow ? "password" : "text"}
              id='repassword'              
              onChange={formik.handleChange}
              value={formik.values.repassword}
              className={`${ formik.touched.repassword && formik.errors.repassword ? "border-solid border-[1px] border-[#ff0000]" : "" } w-full h-[38.43px] lg:h-[59.22px] bg-[#F2F2F2] rounded-[22.6049px] lg:rounded-[34.8344px] text-[#8BA2B1] text-[13.9036px] lg:text-[21.4257px] leading-[21px] lg:leading-[32px] font-[400] font-light pl-[18.7px] lg:pl-[28.9px] outline-none ring-0`} 
              placeholder="Confirm password" 
            />
            {
              !rePaswordShow ?
                <svg onClick={showRePasswordHandler} xmlns="http://www.w3.org/2000/svg" fill="#000" className="bi bi-eye-slash w-[15px] lg:w-[20px] absolute right-[10px] cursor-pointer opacity-40" viewBox="0 0 16 16">
                  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                </svg> :
                <svg onClick={showRePasswordHandler} xmlns="http://www.w3.org/2000/svg" fill="#000" className="bi bi-eye w-[15px] lg:w-[20px] absolute right-[10px] cursor-pointer" viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg> 
            }        
          </div>
          <p className="text-[#ff0000] mt-[-20px]">
            {formik.touched.repassword && formik.errors.repassword}
          </p>
        </div>

        {
          responseError && <p className="text-[#ff0000]">{responseError}</p>
        }        

        <div className="mt-[31.66px] lg:mt-[48.78px] flex flex-col lg:flex-row w-[90%] lg:w-fit gap-3 lg:gap-1">
          <button onClick={(e) => handleNavigate(e, "/login")} className="w-full lg:w-[265px] h-[38px] lg:h-[59px] bg-[#F2F2F2] rounded-[32.4462px] lg:rounded-[50px] text-primary text-[12.9785px] lg:text-[20px] leading-[19px] lg:leading-[30px] font-[700] font-extraBold hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)]">Log in here</button>
          <button type='submit' className="w-full lg:w-[265px] h-[38px] lg:h-[59px] bg-[#5f8fe6] rounded-[32.4462px] lg:rounded-[50px] text-white text-[12.9785px] lg:text-[20px] leading-[19px] lg:leading-[30px] font-[700] font-extraBold hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)]">Sign up</button>
        </div>
        <div className="mt-[67.35px] lg:mt-[48px] mb-[90px] lg:mb-[50px] w-[90%] lg:w-[518.55px] flex justify-center bg-gray-200 bg-opacity-40 px-[12px] rounded-[11.5234px] py-[5px]">
          <p className=" text-black text-[13.3px] lg:text-[15.3px] font-[400] leading-[23px] font-medium"><span className="text-secondary">*</span> <span className="font-extraBold">Trustle</span> requires your most commonly used online usernames to accurately identify and display all your online accounts</p>
        </div>
      </form>
    </section>
  )
}

export default SignUp