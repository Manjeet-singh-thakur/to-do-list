import React, { useMemo, useState } from 'react'

function Memo() {
    const[number,setnumber]=useState(0)
    const[number1,setnumber1]=useState(0)

    const incrment = ()=>{
        setnumber(number  +  1)
    }
    
    const incrment1 = ()=>{
        setnumber1(number1  +  1)
    }
   
    const iseven =useMemo( ()=>{
        let i = 0;
        while (i<2000000000) {
            i++;
        }
        return number%2===0
    },[number])

  return (
    <div>
      <button onClick={incrment}value={number}>click me</button>
      <h1>number:{number}</h1>
      <span>{iseven ?"Even":"Odd"}</span>
      <button onClick={incrment1}>click me</button>
      <h1>number:{number1}</h1>
    </div>
  )
}

export default Memo
