/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Pages
import HomePage from "./pages/home.js";

//Components
//import Navigation from "./components/navigation";


function AppRouter(props) {
  return (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
  );
}

function App() {
  return (
      <div className="App">
          <BrowserRouter>
            <div>
              <AppRouter />
            </div>
          </BrowserRouter>
      </div>
  );
}

export default App;