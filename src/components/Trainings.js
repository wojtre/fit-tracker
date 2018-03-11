import React, {Component} from 'react';
import './css/Trainings.css'
import 'bootstrap/dist/js/bootstrap.js';
import {default as UUID} from "uuid";
class Trainings extends Component {
  render() {
    return (<div className="trainings">
      <div className="container">
        <div className="row">
          {this.renderTrainings()}</div>
      </div>
    </div>);
  }

  renderTrainings() {
    return this.state.trainings.map((training) => {
      return this.renderTraining(training);
    });
  }

  renderTraining(training) {
    return (<div className="training-wrap  col-md-3 col-sm-4 col-6 col-lg-2">
      <div className="training-short">
        <div>Title: {training.title}</div>
        <div>Date: {training.date}</div>
        <div>Exercises: {training.exercises.length}</div>
      </div>
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

export default Trainings;
