import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';


function App() {
  return (
    <div className="App">

     <Timer/>

        <img src={logo} className="App-logo" alt="logo" />
        
    </div>
  );
}

export default App;
