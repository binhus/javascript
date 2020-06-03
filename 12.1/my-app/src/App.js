import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'

const name = 'Roger'
const element = <h1>Hello, {name}</h1>;
const clock = <div id="timer"></div>;
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document);
}

setInterval(tick, 1000);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {element}
        {clock}
      </header>
    </div>
  );
}

export default App;
