
import React, { useEffect, useState } from 'react'

import './App.css';
import Todolist from './components/Todolist';
import View from './components/View'

function App() {
  const [data, setData] = useState([]);


  const addData = (item) => {
    setData([...data, item])
  }

  return (
    <div className="App">
      <Todolist addData={addData} />
      <View data={data} setData={setData} />
    </div>
  );
}

export default App;
