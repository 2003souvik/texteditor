import React,{useState} from 'react'
import '../App.css';
export default function Textform(props) {
   const [text,setText]=useState('');
   const upclick=()=>
   { 
       let newtext=text.toUpperCase();
       setText(newtext)
       
   }
   const lowclick=()=>
   { 
    let newtext=text.toLowerCase();
    setText(newtext)
       
   }
   const clear=()=>
   {
     let newtext='';
     setText(newtext)
   }
   const remove=()=>
   {
     let newtext=text.trim();
     setText(newtext)
   }
   
   const handelOnChange=(event)=>
   { 
       setText(event.target.value);
   }

  return (
    <>
    <div className='Container' >
      <div className="mb-3">
        <h2 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h2>
  <label for="mytext" class="form-label"></label>
  <textarea className="form-control"value={text} onChange={handelOnChange} style={{backgroundColor:props.mode==='light'?'#165d7a':'white',
color:props.mode==='light'?'white':'black'}} id="mybox" rows="7" placeholder='Enter the text'></textarea>
</div>
<button className="btn btn-warning m-2" onClick={upclick} >Convert to uppercase</button>
<button className="btn btn-warning m-2" onClick={lowclick} >Convert to lowercase</button>
<button className="btn btn-warning m-2" onClick={clear} >Clear the text</button>
<button className="btn btn-warning m-2" onClick={remove} >Remove Extra Spaces</button>

    </div>
<div className="container my-4">
    <h1 style={{color:props.mode==='light'?'black':'white'}}>Text Summary</h1>
    
    <p style={{color:props.mode==='light'?'black':'white'}}> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p style={{color:props.mode==='light'?'black':'white'}}> {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length } minutes time to read</p>
    <h2 style={{color:props.mode==='light'?'black':'white'}}>Preview</h2>
    <p style={{color:props.mode==='light'?'black':'white'}} >{text.length>0?text:"Type Something to preview"}</p>
</div>

    </>
  
  )
}
