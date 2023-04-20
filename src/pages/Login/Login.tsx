import React, { useState, useContext, useEffect } from "react";
import { Link, To, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as yup from "yup";
import { useFormik } from "formik";
import { login } from "api";
import { AppContext } from "context/AppContextProvider";

type AppContextType = typeof AppContext extends React.Context<infer T> ? T : never;

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordShow, setPasswordShow] = useState<boolean>(false);

  const { handleLogin, logged, userName } = useContext<AppContextType>(AppContext);

  useEffect(() => {
    if (logged && userName !== null) {
      navigate("/");
    }
  }, [logged, userName, navigate]); 
  
  const handleNavigate = (e: { preventDefault: () => void; }, url: To) => {
    e.preventDefault();
    navigate(url)
  }

  const validationFormSchema = yup.object({
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
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationFormSchema,
    onSubmit: async (values) => { 
      if (
        values.email &&
        values.password &&
        values.email.length !== 0 &&
        values.password.length !== 0
      ) {
        setLoading(true);
        const result = await login(values.email, values.password);
        if (result.loginResult && result.loginResult.isError === false) {
          localStorage.setItem("token", result.loginResult.accessToken);
          localStorage.setItem("name", result.loginResult.userName);
          localStorage.setItem("email", result.loginResult.email);

          handleLogin(result.loginResult.userName);
          notify(result.loginResult.message);
          setLoading(false);
          navigate("/");
        } else if (result && result.isError === true) { 
          notify(result.message)
          console.log("result", result)
          setLoading(false);
        } else {
          notify("Login Failed!")
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    },
  });

  const showPasswordHandler = (event: React.MouseEvent<SVGSVGElement, MouseEvent>): void => {
    event.preventDefault();
    if (passwordShow) {
      setPasswordShow(false);
    } else {
      setPasswordShow(true);
    }
  };

  const notify = (message: string): void => {
    toast(message);
  }
  
  return (
    <section>
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
            className={`${ formik.touched.email && formik.errors.email ? "border-solid border-[1px] border-[#ff0000]" : "" } w-[90%] lg:w-[526px] h-[38.43px] lg:h-[59.22px] bg-[#F2F2F2] rounded-[22.6049px] lg:rounded-[34.8344px] text-[#8BA2B1] text-[13.9036px] lg:text-[21.4257px] leading-[21px] lg:leading-[32px] font-[400] font-light pl-[18.7px] lg:pl-[28.9px] outline-none ring-0`}
            placeholder="Submit email" 
          />
          <p className="text-[#ff0000] mt-[-20px]">
            {formik.touched.email && formik.errors.email}
          </p>

          <div className="relative flex items-center w-[90%] lg:w-[526px]">
            <input 
              type={!passwordShow ? "password" : "text"}
              id='password'
              onChange={formik.handleChange}
              value={formik.values.password}
              className={`${ formik.touched.password && formik.errors.password ? "border-solid border-[1px] border-[#ff0000]" : "" } w-full h-[38.43px] lg:h-[59.22px] bg-[#F2F2F2] rounded-[22.6049px] lg:rounded-[34.8344px] text-[#8BA2B1] text-[13.9036px] lg:text-[21.4257px] leading-[21px] lg:leading-[32px] font-[400] font-light pl-[18.7px] lg:pl-[28.9px] outline-none ring-0`} 
              placeholder="Submit password" 
            />
            {formik.values.password && (              
              !passwordShow ?
                <svg onClick={showPasswordHandler} xmlns="http://www.w3.org/2000/svg" fill="#000" className="bi bi-eye w-[15px] lg:w-[20px] absolute right-[10px] cursor-pointer" viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg> :
                <svg onClick={showPasswordHandler} xmlns="http://www.w3.org/2000/svg" fill="#000" className="bi bi-eye-slash w-[15px] lg:w-[20px] absolute right-[10px] cursor-pointer" viewBox="0 0 16 16">
                  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                </svg>      
            )}       
          </div>     
          <p className="text-[#ff0000] mt-[-20px]">
            {formik.touched.password && formik.errors.password}
          </p>

          <Link to='/forgot' className="w-[90%] lg:w-full cursor-pointer mt-[20px]">
            <p className="text-[#828282] text-[12px] font-[400] leading-[22px] font-arial ml-[20px]">Forgot password?</p>     
          </Link>          
        </div>
        <div className="mt-[10px] mb-[50px] flex flex-col lg:flex-row w-[90%] lg:w-fit gap-3 lg:gap-1">
          <button onClick={(e) => handleNavigate(e, "/signup")} className="w-full lg:w-[265px] h-[38px] lg:h-[59px] bg-[#F2F2F2] rounded-[32.4462px] lg:rounded-[50px] text-primary text-[12.9785px] lg:text-[20px] leading-[19px] lg:leading-[30px] font-[700] font-extraBold hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)]">Sign up here</button>
          <button type="submit" disabled={loading} className="w-full relative lg:w-[265px] h-[38px] lg:h-[59px] bg-[#5f8fe6] rounded-[32.4462px] lg:rounded-[50px] text-white text-[12.9785px] lg:text-[20px] leading-[19px] lg:leading-[30px] font-[700] font-extraBold hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
            {
              loading ?
                <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg> :
              "Log in"
            }           
          </button>
        </div>
      </form>
    </section>
  )
}

export default Login