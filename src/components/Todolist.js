import React, { useState } from 'react'
import './Todo.css'

function Todolist(props) {
  const [displayValue, setdisplayvalue] = useState("");
  const [todoList, setTodolist] = useState([]);

  const onchangeHandler = (e) => {
    console.log("event object", e.target.value);
    setdisplayvalue(e.target.value)
    
  }

  const onSubmitHandler = () => {
    props.addData({
      email: displayValue
    })
    if (displayValue === "") {
      alert("please enter a value")
    } else {
      setdisplayvalue("");
      setTodolist([...todoList, displayValue]);
    }

  };


  return (
    <div className='demo'>
      <h1>To Do List</h1>
      <input onChange={onchangeHandler} value={displayValue} className='enter' type='text' placeholder='Enter your work here'></input>
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
