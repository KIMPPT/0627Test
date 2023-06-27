import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountComp from './components/CountComp';
import ArrayComp from './components/ArrayComp';
function App() {
  return (
    <div className="App">
      <CountComp firstNumber={20}/>
      <ArrayComp/>
    </div>
  );
}

export default App;
