import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

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
        

        const separators: string[] = ['', '.', '-', '_'];
        const resultArray: string[] = ([] as string[]).concat(...separators.map((separator: string): string[] => generateUsername(firstName, lastName, separator)));
        setResult(resultArray);
        console.log("reuslt", resultArray)
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
        let combine2 = `${firstName.slice(0, i).toUpperCase()}${symbol}${lastName.slice(0, j).toLowerCase()}`;
        let combine3 = `${firstName.slice(0, i).toLowerCase()}${symbol}${lastName.slice(0, j).toUpperCase()}`;
        let combine4 = `${firstName.slice(0, i).toUpperCase()}${symbol}${lastName.slice(0, j).toUpperCase()}`;
        temp.push(combine1, combine2, combine3, combine4);
        if (i < firstName.length) {
            let combine5 = `${firstName.slice(0, i).toUpperCase() + firstName.slice(i).toLowerCase()}${symbol}${lastName.slice(0, j).toUpperCase()}`;
            let combine6 = `${firstName.slice(0, i).toUpperCase() + firstName.slice(i).toLowerCase()}${symbol}${lastName.slice(0, j).toLowerCase()}`;
            let combine7 = `${firstName.slice(0, i).toUpperCase() + firstName.slice(i).toLowerCase()}${symbol}${lastName.slice(0, j).toUpperCase() + lastName.slice(j).toLowerCase()}`;
            temp.push(combine5, combine6, combine7);
            if (j < lastName.length) {
              let combine8 = `${firstName.slice(0, i).toLowerCase()}${symbol}${lastName.slice(0, j).toUpperCase() + lastName.slice(j).toLowerCase()}`;
              let combine9 = `${firstName.slice(0, i).toUpperCase()}${symbol}${lastName.slice(0, j).toUpperCase() + lastName.slice(j).toLowerCase()}`;
              temp.push(combine8, combine9);
            }            
        }   
      }
    }    
    return temp;
  };  

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
          result && result.map(item => (
            <p className="text-black text-arial text-[18px] leading-[25px]">{item}</p>
          ))
        }
      </div>
    </section>
  )
}

export default Generate