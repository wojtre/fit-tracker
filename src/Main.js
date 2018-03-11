import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Main.css';
import 'bootstrap/dist/js/bootstrap.js';
import Menu from './components/Menu'
import Trainings from './components/Trainings'

class Main extends Component {
  render() {
    return (<div className="main">
      <Menu/>
      <Trainings/>
    </div>);
  }

}

export default Main;
