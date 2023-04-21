import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout, deleteAccount } from "api";
import { AppContext, AppContextType } from "context/AppContextProvider";
import { toast } from "react-toastify";

const Setting = () => {
  const navigate = useNavigate();
  const { handleLogout, logged, token } = useContext<AppContextType>(AppContext);

  const logoutHadler = async () => {      
    const result = await logout();
    if (result && result.isError === false) {
      handleLogout();
      notify(result.message);
      navigate("/login");
      window.localStorage.clear();
    } else if (result && result.isError === true) {
      notify(result.message);
    } else {
      notify("There is an error in logout");
    }
  };

  const deleteHandler = async () => {    
    let result = await deleteAccount();   
    if (result && result.isError === false) {
      handleLogout();
      notify(result.message);
      navigate("/signup");
      window.localStorage.clear();
    } else if (result && result.isError === true) {
      notify(result.message);
    } else {
      notify("There is an error in delete");
    }
  }

  const notify = (message: string): void => {
    toast(message);
  }

  // useEffect(() => {
  //   if (!logged && token === '') {
  //     navigate("/login");
  //   }
  // }, [logged, token, navigate]);

  return (
    <section className="pl-[42px] pr-[24px] lg:px-[128px] mb-[30px]">
      <div className="max-w-[1440px] w-full">
        <h1 className="text-black text-[21.61px] lg:text-[32.4043px] leading-[27px] lg:leading-[49px] font-[400] font-regular">Setting</h1>
        <div className="flex flex-col pl-0 lg:pl-[14px]">
          {
            logged && token !== '' ?
              <>
                <button onClick={logoutHadler} className="w-fit text-black text-[19.35px] lg:text-[24.7907px] font-[400] leading-[29px] lg:leading-[37px] font-regular mt-[38px]">Log out</button>
                <button onClick={deleteHandler} className="w-fit text-black text-[19.35px] lg:text-[24.7907px] font-[400] leading-[29px] lg:leading-[37px] font-regular mt-[20px]">Delete account</button>
                <Link to='/changepassword' className="w-fit text-black text-[19.35px] lg:text-[24.7907px] font-[400] leading-[29px] lg:leading-[37px] font-regular mt-[20px]">Change password</Link>
              </>  :
              <Link to='/signup' className="w-fit text-black text-[19.35px] lg:text-[24.7907px] font-[400] leading-[29px] lg:leading-[37px] font-regular mt-[20px]">Change account</Link>
          }        
          
          <Link to='/reportissue' className="w-fit text-black text-[19.35px] lg:text-[24.7907px] font-[400] leading-[29px] lg:leading-[37px] font-regular mt-[20px]">Report issue</Link>
          <a href="mailto:support@trustle-beta.com" className="w-fit text-black text-[19.35px] lg:text-[24.7907px] font-[400] leading-[29px] lg:leading-[37px] font-regular mt-[20px]">Contact us</a>
        </div>
        
      </div>
    </section>
  )
}

export default Setting