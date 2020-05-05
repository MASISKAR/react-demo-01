import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

function App() {
  const appclass = "App";
  return (
    <div className={appclass}>
      <header className="App-header">
         {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
      </header>
      <Person/>
    </div>
  );
}

export default App;
