import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from "react-infinite-scroll-component";

const Generate = () => {
  const [result, setResult] = useState<string[]>([]);
  const [showResult, setShowResult] = useState<string[]>([]);
  const { t, i18n } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const [allNames, setAllNames] = useState<string[][]>([]);
  const [pageIndex, setPageIndex] = useState<number>(1); 
  const countPerPage = 100;

  const handleGenerate = (e: React.FormEvent<HTMLFormElement>) => {
    setResult([]);
    e.preventDefault();
    const inputValue = inputRef.current?.value;
    
    if (inputValue) {
      if (inputValue.trim().split(" ").length === 1) {
        notify("This is username");
        if (inputValue.trim().length < 3) {
          notify("Username must be over 3 letters");
        }
      } else if (inputValue.trim().split(" ").length > 1) { 
        if (inputValue.trim().split(" ").length > 4) {
          notify("This is Full Name")
          notify("Max Username is 4")
        } else {
          notify("This is Full Name")
          const nameArray = inputValue.trim().split(/\s+/);
          const enNames = nameArray.map((name: string, index: number) => {
            for (let i = 0; i < name.length; i++) {
              if (!/^[a-zA-Z]$/.test(name[i])) {              
                name = name.replace(name[i], t(name[i]));
              }         
            }  
            return name;
          })
          
          for (let length = 2; length <= 4; length++) {
            generateCombinations([], enNames, length, length);
          }
          
          const separators: string[] = ['', '.', '_', 'both'];
          let finalResult: string[] = ([] as string[]).concat(...allNames.map((name: string[]): string[] => ([] as string[]).concat(...separators.map((separator: string): string[] => generateUsername(name, separator))))); 
          console.log("finalResult", finalResult)
          setResult(finalResult);
          setShowResult(finalResult.slice((pageIndex - 1) * countPerPage, pageIndex * countPerPage));
          setPageIndex((prevState) => prevState + 1);
          // fetchSocial();
        }
       
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
    if (name.length === 2) {
      for (let i = 1; i <= name[0].length; i++) {     
        for (let j = 1; j <= name[1].length; j++) {
          if (symbol === '' || symbol === '.') {
            let combine1 = `${name[0].slice(0, i).toLowerCase()}${symbol}${name[1].slice(0, j).toLowerCase()}`;
            temp = temp.concat(combine1);
          } else if (symbol === '_') { 
            let combine1 = [];
            combine1.push(name[0].slice(0, i).toLowerCase(), name[1].slice(0, j).toLowerCase());
            temp = temp.concat(generateSymbolNames(combine1, symbol));
          } else if (symbol === 'both') {
            // let dotDash = generateDotDash(`${name[0].slice(0, i).toLowerCase()}${name[1].slice(0, j).toLowerCase()}`);
            // temp = temp.concat(dotDash);
          }    
        }
      }   
    } else if (name.length === 3) { 
      for (let i = 1; i <= name[0].length; i++) {     
        for (let j = 1; j <= name[1].length; j++) {
          for (let k = 1; k <=  name[2].length; k++) {
            if (symbol === '') {
              let combine1 = `${name[0].slice(0, i).toLowerCase()}${name[1].slice(0, j).toLowerCase()}${name[2].slice(0, k).toLowerCase()}`;
              temp = temp.concat(combine1);
            } else if (symbol === '.') {
              let combine1 = `${name[0].slice(0, i).toLowerCase()}${symbol}${name[1].slice(0, j).toLowerCase()}${name[2].slice(0, k).toLowerCase()}`;
              let combine2 = `${name[0].slice(0, i).toLowerCase()}${name[1].slice(0, j).toLowerCase()}${symbol}${name[2].slice(0, k).toLowerCase()}`;
              temp = temp.concat(combine1, combine2);
            } else if (symbol === '_') { 
              let combine1 = [];
              combine1.push(name[0].slice(0, i).toLowerCase(), name[1].slice(0, j).toLowerCase(), name[2].slice(0, k).toLowerCase());
              temp = temp.concat(generateSymbolNames(combine1, symbol));
            } else if (symbol === 'both') {
              let dotDash = generateDotDash(`${name[0].slice(0, i).toLowerCase()}${name[1].slice(0, j).toLowerCase()}${name[2].slice(0, k).toLowerCase()}`);
              // temp = temp.concat(dotDash);
            }    
          }         
        }
      }
    } else if (name.length === 4) { 
      for (let i = 1; i <= name[0].length; i++) {     
        for (let j = 1; j <= name[1].length; j++) {
          for (let k = 1; k <=  name[2].length; k++) {
            for (let m = 1; m <= name[3].length; m++) {
              if (symbol === '') {
                let combine1 = `${name[0].slice(0, i).toLowerCase()}${name[1].slice(0, j).toLowerCase()}${name[2].slice(0, k).toLowerCase()}${name[3].slice(0, m).toLowerCase()}`;
                temp = temp.concat(combine1);
              } else if (symbol === '.') {
                let combine1 = `${name[0].slice(0, i).toLowerCase()}${symbol}${name[1].slice(0, j).toLowerCase()}${name[2].slice(0, k).toLowerCase()}${name[3].slice(0, m).toLowerCase()}`;
                let combine2 = `${name[0].slice(0, i).toLowerCase()}${name[1].slice(0, j).toLowerCase()}${symbol}${name[2].slice(0, k).toLowerCase()}${name[3].slice(0, m).toLowerCase()}`;
                let combine3 = `${name[0].slice(0, i).toLowerCase()}${name[1].slice(0, j).toLowerCase()}${name[2].slice(0, k).toLowerCase()}${symbol}${name[3].slice(0, m).toLowerCase()}`;
                temp = temp.concat(combine1, combine2, combine3);
              } else if (symbol === '_') { 
                let combine1 = [];
                combine1.push(name[0].slice(0, i).toLowerCase(), name[1].slice(0, j).toLowerCase(), name[2].slice(0, k).toLowerCase(), name[3].slice(0, m).toLowerCase());
                temp = temp.concat(generateSymbolNames(combine1, symbol));
              } else if (symbol === 'both') {
                let dotDash = generateDotDash(`${name[0].slice(0, i).toLowerCase()}${name[1].slice(0, j).toLowerCase()}${name[2].slice(0, k).toLowerCase()}${name[3].slice(0, m).toLowerCase()}`);
                // temp = temp.concat(dotDash);
              }   
            }
          }         
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

  const fetchSocial = async () => { 
    try {
      // const response = await axios.get(`https://api.twitter.com/1.1/users/show.json?screen_name=Julia`, {
      //   headers: {
      //     Authorization: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`
      //   }
      // });    
      // const response = await axios.get('http://localhost:4000/api/search')  
    } catch (error) {
      console.error("error", error);
    }
  }

  const notify = (message: string): void => {
    toast(message);
  }

  const generateCombinations = (currentCombination: string[], remainingNumbers: string[], minLength: number, maxLength: number) => {
    if (currentCombination.length >= minLength && currentCombination.length <= maxLength) {
      let alterNames: string[][] = [];
      alterNames = allNames;
      alterNames.push(currentCombination);
      setAllNames(alterNames)
    }
    if (currentCombination.length >= maxLength) {
      return;
    }
    for (let i = 0; i < remainingNumbers.length; i++) {
      const newCombination = [...currentCombination, remainingNumbers[i]];
      const newRemainingNumbers = remainingNumbers.filter((_, index) => index !== i);
      generateCombinations(newCombination, newRemainingNumbers, minLength, maxLength);
    }
  }

  const generateDotDash = (nameArray: string) => {
    const withDashes: string[] = [];
    for (let i = 1; i < Math.pow(2, nameArray.length - 1); i++) {
      let binary = i.toString(2).padStart(nameArray.length - 1, "0");
      let combination_dash = nameArray[0];    
  
      for (let j = 0; j < binary.length; j++) {
        if (binary[j] === "1") {
          combination_dash += '_';
        }    
        combination_dash += nameArray[j + 1];    
        
        if(j === binary.length - 1) {
          for(let k = 1; k < combination_dash.length; k++) { 
            if (!(combination_dash[k] === '_' || combination_dash[k-1] === '_')) {         
              let str: string = combination_dash;
              str = str.slice(0, k) + "." + str.substring(k);
              withDashes.push(str);
            }
          }
        }    
      }    
    }

    return withDashes;
  }

  const showUsernames = () => {
    setShowResult([...showResult, ...result.slice((pageIndex - 1) * countPerPage, pageIndex * countPerPage)]);
    setPageIndex((prevState) => prevState + 1);
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
        <InfiniteScroll
          dataLength={showResult.length}
          next={showUsernames}
          hasMore={true}
          loader=''
          scrollableTarget="scrollableDiv"
          scrollThreshold={"10px"}
        >
          {
            showResult && showResult.map((item, idx) => (
              <p className="text-black text-arial text-[18px] leading-[25px]" key={idx}>{item}</p>
            ))
          }
        </InfiniteScroll>
      </div>
    </section>
  )
}

export default Generate