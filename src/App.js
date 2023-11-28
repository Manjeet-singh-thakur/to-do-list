
import React, {} from 'react'
import './App.css';
import Todolist from './components/Todolist';
import View from './components/View'
import { GlobalContextProvider } from './store';
import Memo from './components/Memo';

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Todolist />
        <View />
        <Memo/>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
