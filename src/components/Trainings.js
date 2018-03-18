import React, {Component} from 'react';
import './css/Trainings.css'
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.css';
import {Redirect} from 'react-router-dom';
import trainingsStore from "../store/Store"
import {default as UUID} from "uuid";

class Trainings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainings: trainingsStore.getStore()
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
      <button className="add-element-button" title="add new training" onClick={this.addNewTraining.bind(this)}>
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
    return (<div className="training-short">
      <div onClick={this.handleClick.bind(this, training.id)}>
        <div>Title: {training.title}</div>
        <div>Date: {training.date}
        </div>
        <div>Exercises: {training.exercises.length}</div>
      </div>
      <span className="training-control" title="delete training">
        <i className="fa fa-trash" onClick={this.removeTraining.bind(this, training)}></i>
      </span>
    </div>);
  }

  removeTraining(training) {
    let trainings = this.state.trainings;
    trainings.splice(trainings.indexOf(training), 1);
    trainingsStore.setStore(trainings);
    this.setState({trainings: trainings});
  }

  addNewTraining() {;
    let train = {
      id: UUID.v4(),
      date: "21-02-2016",
      title: "new training",
      exercises: []
    };
    let trainings = [train].concat(this.state.trainings);
    trainingsStore.setStore(trainings);
    this.setState({
      trainings: trainings
    }, () => {
      this.props.history.push(`/training/${train.id}`)
    });
  }

  handleClick(id) {
    this.props.history.push(`/training/${id}`);
  }
}

export default Trainings;
