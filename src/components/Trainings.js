import React, {Component} from 'react';
import './css/Trainings.css'
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.css'

class Trainings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainings: props.trainings
    }
  }
  render() {
    return (<div className="trainings">
      <h1>FIT TRACKER
        <span className="logo">
          <i className="fa fa-heartbeat"></i>
        </span>
      </h1>

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
    return (<div onClick={this.handleClick.bind(this, training.id)} className="training-wrap  col-md-12 col-sm-12 col-12 col-lg-12">
      <div className="training-short">
        <div>Title: {training.title}</div>
        <div>Date: {training.date}</div>
        <div>Exercises: {training.exercises.length}</div>
      </div>
    </div>);
  }

  handleClick(id) {
    this.props.handleClick(id);
  }
}

export default Trainings;
