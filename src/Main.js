import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Main.css';
import 'bootstrap/dist/js/bootstrap.js';
import Menu from './components/Menu';
import Trainings from './components/Trainings';
import {default as UUID} from "uuid";


class Main extends Component {
  render() {
    return (<div className="main">
      <Menu/>
      <Trainings trainings={this.state.trainings}/>
    </div>);
  }

  constructor() {
    super();
    this.state = {
      trainings: [
        {
          id: UUID.v4(),
          date: "21-02-2018",
          title: "klata",
          exercises: [
            {
              name: "wyciskanie",
              series: [
                90, 90, 80, 90
              ],
              unit: "kg"
            }, {
              name: "rospietki",
              series: [
                50, 50, 50
              ],
              unit: "kg"
            }
          ]

        }, {
          id: UUID.v4(),
          date: "21-02-2017",
          title: "klata",
          exercises: []
        }, {
          id: UUID.v4(),
          date: "21-02-2016",
          title: "klata",
          exercises: []
        }, {
          id: UUID.v4(),
          date: "21-02-2016",
          title: "klata",
          exercises: []
        }, {
          id: UUID.v4(),
          date: "21-02-2016",
          title: "klata",
          exercises: []
        }, {
          id: UUID.v4(),
          date: "21-02-2016",
          title: "klata",
          exercises: []
        }, {
          id: UUID.v4(),
          date: "21-02-2016",
          title: "klata",
          exercises: []
        }
      ]
    }
  }

}

export default Main;
