import React, { useState, useLayoutEffect, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { verifyAccount } from "api";
import { AppContext, AppContextType } from "context/AppContextProvider";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [tokenParam, setTokenParam] = useState<string>();
  const { handleLogin } = useContext<AppContextType>(AppContext);

  let { id } = useParams<{ id: string }>();

  useLayoutEffect(() => {
    setTokenParam(id);    
  }, [id]);

  useEffect(() => {    
    async function fetchData() {
      if (tokenParam) {
        let result  = await verifyAccount(tokenParam);
        if (result.loginResult && result.loginResult.isError === false) {
          localStorage.setItem("token", result.loginResult.accessToken);
          localStorage.setItem("name", result.loginResult.userName);
          localStorage.setItem("email", result.loginResult.email);

          handleLogin(result.loginResult.accessToken);
          notify(result.loginResult.message);
          navigate("/");
        } else if (result && result.isError === true) { 
          notify(result.message);
        } else {
          notify("Login Failed!");
        }
      }
    }
    fetchData();
  }, [handleLogin, navigate, tokenParam]);

  const notify = (message: string): void => {
    toast(message);
  }

  return (
    <>
    </>
  )
}

export default VerifyEmail