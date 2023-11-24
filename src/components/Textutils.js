import React, { useState,useEffect} from 'react'
import "./Textutil.css"


function Textutils() {
  // const [blank, setblank] = useState([]);
  const [text, settext] = useState('')


const msg = new SpeechSynthesisUtterance();


const onlisten = (msg) => {
    msg.text=text;
    window.speechSynthesis.speak(msg)
}

  const onvalueupdating = (val) => {
    console.log(val.target.value)
    settext(val.target.value)
  }



  const onvaluechange = (caseType) => {
    console.log("value is changed")
    if (caseType === 'uppercase') {
      settext(text.toUpperCase());
    } else if (caseType === 'lowercase') {
      settext(text.toLowerCase());
    }
  }




  const onclearText = () => {
    settext("")
  }



  const oncount = () => {
    if(text===""){
alert(" please enter a value in input")
    }else{
      const words = text.split(/\s+/);
      alert(`word length ${words.length}`)
    }
   
  }
  // const onprivew = () => {
  //   if (text === "") {
  //     alert("please enter the value in textarea")
  //   } else {
  //     setblank(...blank, text);
  //     settext("")
  //   }
  // }


  return (
    <div className='parent'>
      <h1>Enter Your Text Here</h1>
      <textarea value={text} onChange={ onvalueupdating} name="" id="" cols="80" rows="8"></textarea>
      <div className="btnprimary">
        <button onClick={() => onvaluechange('uppercase')} className="btn">Change To Uppercase</button>
        <button onClick={() => onvaluechange('lowercase')} className="btn">Change To Lowercase</button>
        <button onClick={onclearText} className="btn">clear text</button>
        <button onClick={oncount} className="btn">count words</button>
        <button onClick={() => onlisten(msg)} className="btn">listen voice</button>
        {/* <button onClick={onprivew} className="btn">preview text</button> */}
      </div>
      {/* {blank.map((item1)=>item1)} */}
    </div>
  )
}

export default Textutils
