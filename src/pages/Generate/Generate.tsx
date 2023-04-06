import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';

const Generate = () => {
  const [result, setResult] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null)

  const handleGenerate = (e: React.FormEvent<HTMLFormElement>) => {
    setResult([]);
    e.preventDefault();
    const inputValue = inputRef.current?.value;
    
    if (inputValue) {
      if (inputValue.trim().split(" ").length === 1) {
        notify("This is username")
      } else if (inputValue.trim().split(" ").length > 1) { 
        notify("This is Full Name")
        const nameArray = inputValue.trim().split(/\s+/); // split by one or more whitespace characters
        const firstName = nameArray[0];
        const lastName = nameArray[1];
        console.log("first and second name", nameArray[0], nameArray[1] )
        

        const separators: string[] = ['', '.', '_'];
        const resultArray: string[] = ([] as string[]).concat(...separators.map((separator: string): string[] => generateUsername(firstName, lastName, separator)));
        const reverseArray: string[] = ([] as string[]).concat(...separators.map((separator: string): string[] => generateUsername(lastName, firstName, separator)));
        let finalResult = [...resultArray, ...reverseArray]
        setResult(finalResult);
        console.log("reuslt", finalResult)
        fetchSocial();
      }   
    } else {
      notify("Type your fullname or username")
    }
  }

  const generateUsername = (
    firstName: string,
    lastName: string,
    symbol: string
  ): string[] => {
    let temp = [];
    for (let i = 1; i <= firstName.length; i++) {     
      for (let j = 1; j <= lastName.length; j++) {
        let combine1 = `${firstName.slice(0, i).toLowerCase()}${symbol}${lastName.slice(0, j).toLowerCase()}`;
        temp.push(combine1);
      }
    }    
    return temp;
  };  

  const fetchSocial = async () => { console.log("twitter bear key", process.env.REACT_APP_TWITTER_BEARER_TOKEN)
    try {
      // const response = await axios.get(`https://api.twitter.com/1.1/users/show.json?screen_name=Julia`, {
      //   headers: {
      //     Authorization: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`
      //   }
      // });    
      const response = await axios.get('http://localhost:4000/api/search')  
    } catch (error) {
      console.error("error", error);
    }
  }

  const notify = (message: string): void => {
    toast(message);
  }

  return (
    <section>
      <form onSubmit={handleGenerate} className="w-full flex justify-center" >
        <input 
          ref={inputRef}
          className="w-[50%] h-[50px] border-[1px] border-solid border-black rounded-[12px] px-[10px]" 
          placeholder="Fullname or Username"
        />
      </form>
      <div className="w-full text-center mt-[20px]">
        {
          result && result.map((item, idx) => (
            <p className="text-black text-arial text-[18px] leading-[25px]" key={idx}>{item}</p>
          ))
        }
      </div>
    </section>
  )
}

export default Generate