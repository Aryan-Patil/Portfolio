import './App.css';
import Home from './Components/Home';
import Main from './main';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Main className="left"/>
      <Home className="right"/>
    </div>
  );
}

export default App;
