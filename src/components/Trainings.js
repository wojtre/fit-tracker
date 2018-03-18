import React, {Component} from 'react';
import './css/Trainings.css'
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.css';
import {Redirect} from 'react-router-dom';
import trainingsStore from "../store/Store"

class Trainings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainings: trainingsStore
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
        {this.renderTrainings()}</div>
      <button className="add-element-button" title="add new training">
        <i class="fa fa-plus"></i>
      </button>
    </div>);
  }

  renderTrainings() {
    return this.state.trainings.map((training) => {
      return this.renderTraining(training);
    });
  }

  renderTraining(training) {
    return (<div className="training-short" onClick={this.handleClick.bind(this, training.id)}>
      <div>Title: {training.title}</div>
      <div>Date: {training.date}
      </div>
      <div>Exercises: {training.exercises.length}</div>
      <span className="training-control" title="delete training">
        <i className="fa fa-trash"></i>
      </span>
    </div>);
  }

  handleClick(id) {
    this.props.history.push(`/training/${id}`);
  }
}

export default Trainings;
