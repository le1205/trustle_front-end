import React from "react";

export const registerUser = async (
    email: string,
    name: string,
    password: string
): Promise<any> => {
    let registerData = {
        email: email,
        name: name,
        password: password,
    };
    let result = await fetch(
        "https://localhost:4000/api/signup",
        {
            method: "POST",
            body: JSON.stringify(registerData),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
            },
        }
    ).then((response) => {
        return response.json();
    });

    return result;
};

export const login = async (email: string, password: string): Promise<any> => {
    let loginData = {
      email: email,
      password: password,
    };
    let result = fetch("https://localhost:4000/api/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }).then((response) => {
      localStorage.setItem("sid", response.headers.get("Session-Id")!);
      return response.json();
    });
  
    return result;
  };
  
