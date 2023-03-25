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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
