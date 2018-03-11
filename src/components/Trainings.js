import React, {Component} from 'react';
import './css/Trainings.css'
import 'bootstrap/dist/js/bootstrap.js';


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
    return this.props.trainings.map((training) => {
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
}

export default Trainings;
