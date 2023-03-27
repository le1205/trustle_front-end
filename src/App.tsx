import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from 'components/Layout';
import Home from 'pages/Home';
import SignUp from 'pages/SignUp';
import Login from 'pages/Login';
import Search from 'pages/Search';
import AccountSelect from 'pages/AccountSelect';
import ReportIssue from 'pages/ReportIssue';
import Pledge from 'pages/Pledge';import './App.css';
import Checkout from 'pages/Checkout';
import MyAccount from 'pages/MyAccount';
import About from 'pages/About';
import Faq from 'pages/Faq';
import Privacy from 'pages/Privacy';
import Terms from 'pages/Terms';
import Overview from 'pages/Overview';
import Research from 'pages/Research';
import Will from 'pages/Will';
import Memorial from 'pages/Memorial';
import City from 'pages/City';
import Hardware from 'pages/Hardware';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />     
          <Route path="/setting" element={<Home />} />        
          <Route path="/signup" element={<SignUp />} />        
          <Route path="/login" element={<Login />} />        
          <Route path="/search" element={<Search />} />          
          <Route path="/accountselect" element={<AccountSelect />} />          
          <Route path="/reportissue" element={<ReportIssue />} />         
          <Route path="/pledge" element={<Pledge />} />       
          <Route path="/checkout" element={<Checkout />} />          
          <Route path="/account" element={<MyAccount />} />
          <Route path="/about" element={<About />} />   
          <Route path="/faq" element={<Faq />} />   
          <Route path="/privacy" element={<Privacy />} />   
          <Route path="/terms" element={<Terms />} />       
          <Route path="/overview" element={<Overview />} />       
          <Route path="/research" element={<Research />} /> 
          <Route path="/will" element={<Will />} />       
          <Route path="/memorial" element={<Memorial />} />    
          <Route path="/city" element={<City />} />       
          <Route path="/hardware" element={<Hardware />} />       
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
