import React from 'react';
import './App.css';
import Menu from './Menu.js';
import ToDo from './ToDo.jsx';
import ParamsExample from './example';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function About() {
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <div className="title">
            <p>
              <h1 class="container"><button class="btn btn-default btn-lg active" style={{ color: "white", margin: "2%" }}>Справочник на React</button></h1>
            </p>
          </div>
        </header>

        <div className="menu">
          <ParamsExample />
        </div>

        <div className="content">
          <Switch>
            <Route path="/:id" component={ToDo} />
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default About;
