import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Main.css';
import 'bootstrap/dist/js/bootstrap.js';
import Trainings from './components/Trainings';
import Training from './components/Training';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import trainingsStore from "./store/Store"
import { init as firebaseInit } from './database/firebase'
import { Provider } from 'react-redux'
import configureStore from './components/configureStore'


class Main extends Component {
  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <div className="main">
            <Route exact path="/" component={Trainings}></Route>
            <Route path="/training/:id" component={Training}></Route>
          </div>
        </Router>
      </Provider>);
  }

  constructor() {
    super();
    this.state = {
      trainings: trainingsStore
    }
    firebaseInit()
    this.store = configureStore()
  }

}

export default Main;
