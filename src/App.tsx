import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from 'components/Layout';
import Home from 'pages/Home';
import SignUp from 'pages/SignUp';
import Search from 'pages/Search';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />        
          <Route path="/signup" element={<SignUp />} />        
          <Route path="/search" element={<Search />} />          
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
