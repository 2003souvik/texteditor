import { useState } from 'react';
import './App.css';
import About from './Componenets/About';

import Navbar from './Componenets/Navbar';
import Textform from './Componenets/Textform';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";


function App() {
  const [mode,setmode] =useState('light');
  const togglemode=()=>
  {
    if(mode==='light')
    {
    setmode('dark')
    document.body.style.backgroundColor="#105775";
    }
    else
    {
    setmode('light')
    document.body.style.backgroundColor="#dde8f0";
    }
  }
  return (
    <>
    <Router>
   <Navbar title="TextEditor" about="About" mode={mode} togglemode={togglemode} />
   
   
   <div className="container">
   <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          
          <Route path="/">
          <Textform heading="Text Editor" mode={mode}/>
          
          </Route>
        </Switch>
   
   
   </div>
   </Router>
   


     
    </>
   
  );
}

export default App;
