import React from 'react'
import '../App.css';
export default function About(props) {
    
  return (
    <div className='Container p-4 ' >
        <h2 className="ha"style={{color:props.mode==='light'?'black':'white'}}>About us</h2>
        <img src="/favicon.png" alt="" />
        <p className="abt mt-4" style={{color:props.mode==='light'?'black':'white'}}>
        A texteditor is a simple computer program that allows users to create, change, or edit plain text files. It can be used for creating computer programs, editing the source code of programming languages, editing hypertext markup language (HTML), and creating web pages or web design templates. This software is most commonly used today for programming purposes, rather than creating documents, as is was in the past.
        <h2 className="features mt-5" style={{color:props.mode==='light'?'black':'white'}}>Features</h2>
        <p className="abt mt-3" style={{color:props.mode==='light'?'black':'white'}} > The most common features availables are:<br/> 1. The ability to convert text into lowerCase<br/> 2. The ability to convert text into uppercase<br/>3. The ability to clear the text<br/> 
        4. The ability to remove extra spaces<br/> 
        </p>
        
        </p>
      </div>
  )
}
