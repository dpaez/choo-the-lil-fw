import React, { Component } from 'react';
import toReact from 'nanocomponent-adapters/react';
import logo from './logo.svg';
import './App.css';
import Button from '../../choo-example/component/button';

const ReactButton = toReact(Button, React)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Nanocomponent Example</h1>
        </header>
        <main>
            <ReactButton color='pink' />
        </main>
      </div>
    );
  }
}

export default App;
