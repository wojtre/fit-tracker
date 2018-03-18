import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Main.css';
import 'bootstrap/dist/js/bootstrap.js';
import Trainings from './components/Trainings';
import Training from './components/Training';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import trainingsStore from "./store/Store"

class Main extends Component {
  render() {
    return (<Router>
      <div className="main">
        <Route exact path="/" component={Trainings}></Route>
        <Route path="/training/:id" component={Training}></Route>
      </div>
    </Router>);
  }

  constructor() {
    super();
    this.state = {
        trainings: trainingsStore
    }
  }

}

export default Main;
