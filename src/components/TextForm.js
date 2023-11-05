import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert(" converted to uppercase", "success");
    } 
    const handleOnChange = (event) =>{
        setText(event.target.value);
    } 
    const handleLowClick = () => {
      let newText= text.toLowerCase();
      setText(newText);
      props.showAlert(" converted to lowercase", "success");
    }
    const handleClearClick = () => {
      let newText= '';
      setText(newText);
    }
    const handleCopy= () =>{
      //var text=document.getElementById("mybox");
      //text.select();
      navigator.clipboard.writeText(text);
      //document.getSelection().removeAllRanges();
      props.showAlert(" text copied", "success");
    }
    const handleSpaces = () =>{
      let newText= text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert(" removed spaces", "success");
    }
    const [text, setText] = useState('');
    //text= "new text"; wrong way to change the state
    //setText= ("new text"); correct way to change the state
  return (
    <>
      <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
        <div className="mb-3">
        <h1 className='mb-4'>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'?'dark':'#b3b3b3'}}id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
      </div>
    </>
  )
}
