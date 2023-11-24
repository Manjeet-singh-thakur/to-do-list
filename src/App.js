
import React, { useEffect, useState } from 'react'
import './App.css';
import Todolist from './components/Todolist';
import View from './components/View'
import Textutils from './components/Textutils';
import Navbar from './components/Navbar';

function App() {
  const [data, setData] = useState([]);


  const addData = (item) => {
    setData([...data, item])
  }

  return (
    <div className="App">
      <Todolist addData={addData} />
      <View data={data} setData={setData} />
      
      <Navbar/>
      <Textutils/>
    </div>
  );
}

export default App;
