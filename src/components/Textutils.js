import React, { useState } from 'react'
import "./Textutil.css"

function Textutils() {

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

  const onclearText = ()=>{
    settext("")
  }
const oncount =()=>{
  const words =text.split(/\s+/);
  alert(`word length ${words.length}`)
}
const onlisten = ()=>{
  
}

  const [text, settext] = useState("Enter your value")
  return (
    <div className='parent'>
      <h1>Enter Your Text Here</h1>
      <textarea value={text} onChange={onvalueupdating} name="" id="" cols="80" rows="8"></textarea>
      <div className="btnprimary">
        <button onClick={() => onvaluechange('uppercase')} className="btn">Change To Uppercase</button>
        <button onClick={() => onvaluechange('lowercase')} className="btn">Change To Lowercase</button>
        <button onClick={ onclearText} className="btn">clear text</button>
        <button onClick={oncount} className="btn">count words</button>
        <button onClick={ onlisten} className="btn">listen voice</button>

      </div>
    </div>
  )
}

export default Textutils
