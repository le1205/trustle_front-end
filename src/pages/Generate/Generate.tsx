import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { string } from "yup";

const Generate = () => {
  const [result, setResult] = useState<string[]>([]);
  const { t, i18n } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const allNames: string[][] = [];

  const handleGenerate = (e: React.FormEvent<HTMLFormElement>) => {
    setResult([]);
    e.preventDefault();
    const inputValue = inputRef.current?.value;
    
    if (inputValue) {
      if (inputValue.trim().split(" ").length === 1) {
        notify("This is username")
      } else if (inputValue.trim().split(" ").length > 1) { 
        notify("This is Full Name")
        const nameArray = inputValue.trim().split(/\s+/);
        console.log("nameArray", nameArray)
        let firstName = nameArray[0];
        let lastName = nameArray[1];
        const enNames = nameArray.map((name: string, index: number) => {
          for (let i = 0; i < name.length; i++) {
            if (!/^[a-zA-Z]$/.test(name[i])) {              
              name = name.replace(name[i], t(name[i]));
            }         
          }  
          return name;
        })
        
        generateCombinations([], enNames);
        // for (let i = 0; i < firstName.length; i++) {
        //   if (!/^[a-zA-Z]$/.test(firstName[i])) {
        //     firstName = firstName.replace(firstName[i], t(firstName[i]));
        //   }         
        // }   
        // for (let i = 0; i < lastName.length; i++) {
        //   if (!/^[a-zA-Z]$/.test(lastName[i])) {
        //     lastName = lastName.replace(lastName[i], t(lastName[i]));
        //   }         
        // }        
        
        const separators: string[] = ['', '.', '_'];
        // const resultArray: string[] = ([] as string[]).concat(...separators.map((separator: string): string[] => generateUsername(firstName, lastName, separator)));
        // const reverseArray: string[] = ([] as string[]).concat(...separators.map((separator: string): string[] => generateUsername(lastName, firstName, separator)));
        // let finalResult = [...resultArray, ...reverseArray]
        let finalResult: string[] = [];
        allNames.forEach((name:string[]) => {
          finalResult = finalResult.concat(...separators.map((separator: string): string[] => generateUsername(name, separator)));
        })
        console.log("finalResult", finalResult)
        setResult(finalResult);
        // fetchSocial();
      }   
    } else {
      notify("Type your fullname or username")
    }
  }

  const generateUsername = (
    name: string[],
    symbol: string
  ): string[] => {
    let temp: string[] = [];
    for (let i = 1; i <= name[0].length; i++) {     
      for (let j = 1; j <= name[1].length; j++) {
        if (symbol === '') {
          let combine1 = `${name[0].slice(0, i).toLowerCase()}${symbol}${name[1].slice(0, j).toLowerCase()}`;
          temp = temp.concat(combine1);
        } else {
          let combine1 = [];
          combine1.push(name[0].slice(0, i).toLowerCase(), name[1].slice(0, j).toLowerCase());
          temp = temp.concat(generateSymbolNames(combine1, symbol));
        }        
       
      }
    }   
    return temp;   
  };  

  const generateSymbolNames = (
    name: string[],
    symbol: string
  ): string[] => {
    let mergeName = name.join('');
    let withDashes = [];
    for (let i = 1; i < Math.pow(2, mergeName.length - 1); i++) {
      let binary = i.toString(2).padStart(mergeName.length - 1, "0");
      let combination = mergeName[0];    
      for (let j = 0; j < binary.length; j++) {
        if (binary[j] === "1") {
          combination += symbol;
        }
        combination += mergeName[j + 1];
      }
    
      withDashes.push(combination);
    }
    return withDashes;
  }

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

  function generateCombinations(currentCombination: string[], remainingNumbers: string[]): void {
    if (remainingNumbers.length === 0) {
      allNames.push(currentCombination);
      return;
    }
    for (let i = 0; i < remainingNumbers.length; i++) {
      const newCombination = [...currentCombination, remainingNumbers[i]];
      const newRemainingNumbers = remainingNumbers.filter((_, index) => index !== i);
      generateCombinations(newCombination, newRemainingNumbers);
    }
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
      <h1>{t('Д')}</h1>
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