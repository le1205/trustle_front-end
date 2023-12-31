import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from "react-infinite-scroll-component";
import { GenerateUsernames } from "api";

const Generate = () => {
  const [result, setResult] = useState<string[]>([]);
  const [showResult, setShowResult] = useState<string[]>([]);
  const { t, i18n } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const [allNames, setAllNames] = useState<string[][]>([]);
  const [pageIndex, setPageIndex] = useState<number>(1); 
  const [loading, setLoading] = useState<boolean>(false);
  const countPerPage = 100;

  const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
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
          notify("This is Full Name");
          setLoading(true);
          const nameArray = inputValue.trim().split(/\s+/);
          const enNames = nameArray.map((name: string, index: number) => {
            for (let i = 0; i < name.length; i++) {
              if (!/^[a-zA-Z]$/.test(name[i])) {              
                name = name.replace(name[i], t(name[i]));
              }         
            }  
            return name;
          })
          
          const separators: string[] = ["", ".", "_", "both"];
          let finalResult = await GenerateUsernames(enNames, separators)          
          console.log("finalResult", finalResult)
          if (finalResult && finalResult.isError === false) {
            setLoading(false);            
            setResult(finalResult.finalResult);
            setShowResult(finalResult.finalResult.slice((pageIndex - 1) * countPerPage, pageIndex * countPerPage));
            setPageIndex((prevState) => prevState + 1);
          } else if (finalResult && finalResult.isError === true) {
            
          }
        }
       
      }   
    } else {
      notify("Type your fullname or username")
    }
  }

  const showUsernames = () => {
    setShowResult([...showResult, ...result.slice((pageIndex - 1) * countPerPage, pageIndex * countPerPage)]);
    setPageIndex((prevState) => prevState + 1);
  }

  const fetchSocial = async () => { 
    try {
      // const response = await axios.get(`https://api.twitter.com/1.1/users/show.json?screen_name=Julia`, {
      //   headers: {
      //     Authorization: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`
      //   }
      // });    
      // const response = await axios.get('https://trustle-beta.com/api/search')  
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
        {
          loading && 
          <svg aria-hidden="true" className="mt-[100px] inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
        }
      </div>
    </section>
  )
}

export default Generate