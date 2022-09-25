
import { useState } from 'react';
// import React from "react";
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import  TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode , setMode] = useState('light');
  
  const togglemod=()=>{
    if(mode === 'dark')
    {
      setMode('light')
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='#182747';
    }
  }
  return (
   <>
   <Router>
  <Navbar title="TextUtils" mode={mode} togglemod={togglemod}/>
  <Alert alert="WELCOME to TextUtils!!!"/>

  <div className="container my-4" >
  <Routes>
          <Route path="/about" element= {<About mode={mode}/>}>
          </Route>
          
          <Route path="/" element={<TextForm heading="enter the text to analyze" mode={mode} />}>
          
          </Route>
  </Routes>
  </div>
  </Router>
   </>
   
  );
}

export default App;
