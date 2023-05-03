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
    "https://trustle-beta.com/api/signup",
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
  let result = await fetch("https://trustle-beta.com/api/login", {
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

export const logout = async (): Promise<any> => {
  let result = await fetch("https://trustle-beta.com/api/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
  let response = await result.json();
  return response;
};


export const forgotPassword = async (email: string): Promise<any> => {
  let forgotData = {
    email: email,
  };
  let result = await fetch(
    "https://trustle-beta.com/api/forgetPassword",
    {
      method: "POST",
      body: JSON.stringify(forgotData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
  let responseJson = await result.json();

  return responseJson;
};

export const checkUserSession = async (): Promise<any> => {
  const result = await fetch(
    "https://trustle-beta.com/api/checkUserSession",
    {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  ).then((response: Response) => {
    return response.json();
  });

  return result;
};

export const updateNewPassword = async (password: string, tokenParam: string): Promise<any> => {
  const updatePasswordData = {
    password: password,
  };

  const result = await fetch(
    `https://trustle-beta.com/api/updateNewPassword/${tokenParam}`,
    {
      method: "PUT",
      body: JSON.stringify(updatePasswordData),
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

export const verifyAccount = async (tokenParam: string): Promise<any> => {
  const result = await fetch(
    `https://trustle-beta.com/api/verifyAccount/${tokenParam}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  ).then((response) => {
    localStorage.setItem("sid", response.headers.get("Session-Id")!);
    return response.json();
  });

  return result;
};

export const changePassword = async (oldPassword: string, newPassword: string): Promise<any> => {
  const passwordData = {
    oldPassword: oldPassword,
    newPassword: newPassword
  };

  const result = await fetch(
    `https://trustle-beta.com/api/changepassword`,
    {
      method: "PUT",
      body: JSON.stringify(passwordData),
      headers: {        
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
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

export const deleteAccount = async (): Promise<any> => {
  let result = await fetch(`https://trustle-beta.com/api/delete`, {
    method: 'DELETE',
    headers: {     
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    }
  }).then((response) => {
    return response.json();
  });

  return result;
}

export interface SearchResult {
  title: string;
  link: string;
  snippet: string;
}

export const UseGoogleSearch = async (term: string, numResults: number, pageNum: number): Promise<SearchResult[]> => {
  const fetchData = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_CONTEXT_KEY}&q=${term}&num=${numResults}&start=${pageNum}`
  )
    .then(response => response.json())
    .then(result => { 
      const searchResults: SearchResult[] = result.items?.map((item: any) => ({
        title: item.title,
        link: item.link,
        snippet: item.snippet
      })) || [];

      return searchResults;
    });

  return fetchData;
}

export const GenerateUsernames = async (enNames: string[], separators: string[]): Promise<any> => {
  let data = {
    enNames: enNames,
    separators: separators
  }; 

  let result = await fetch(
    "https://trustle-beta.com/api/generate",
    {
      method: "POST",
      body: JSON.stringify(data),
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
}