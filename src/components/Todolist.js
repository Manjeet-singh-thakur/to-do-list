import React, { useState,useRef, useContext} from 'react'
import './Todo.css'
import { ContextStore } from '../store';

function Todolist() {
  const storeVal =  useContext(ContextStore);
  const refelement = useRef("");
  const [displayValue, setdisplayvalue] = useState("");
  const [todoList, setTodolist] = useState([]);

  const onchangeHandler = (e) => {
    console.log("event object", e.target.value);
    setdisplayvalue(e.target.value)
  }
  const onSubmitHandler = () => {
    storeVal.addData({
      email: displayValue
    })
    if (displayValue === "") {
      alert("please enter a value")
    } else {
      setdisplayvalue("");
      refelement.current.focus();
      setTodolist([...todoList, displayValue]);
    }
  };


  return (
    <div className='demo'>
      <h1>To Do List</h1>
      <input ref={refelement} onChange={onchangeHandler} value={displayValue} className='enter' type='text' placeholder='Enter your work here'></input>
      <button onClick={onSubmitHandler} className='your'>Add</button>
  
      <ul>
        {todoList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
export default Todolist
