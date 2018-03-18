import React, {Component} from 'react';
import './css/Training.css'
import 'bootstrap/dist/js/bootstrap.js';
import trainingsStore from "../store/Store"

class Training extends Component {
  render() {

    return (<div className="trainings">
      <div className="container">
        <h2 className="training-title">{this.state.training.title}
        </h2>
        {this.renderTraining()}</div>
      <button className="add-element-button" title="add new exercise">
        <i class="fa fa-plus"></i>
      </button>
    </div>);
  }

  constructor(props) {
    super(props);
    this.state = {
      training: this.getTraining(this.props.match.params.id)
    }
  }

  renderTraining() {
    if (this.state.training) {
      if (!this.state.training.exercises || this.state.training.exercises.length < 1) {
        return (<div className="exercise">Add exercise</div>);
      }
      return this.state.training.exercises.map((ex) => {
        return this.renderEx(ex);
      });
    }
  }

  renderEx(ex) {
    return (<div className="exercise">
      <div>{ex.name}</div>
      {this.renderSeries(ex.series, ex.unit)}
    </div>)
  }

  renderSeries(series, unit) {
    return series.map((s, i) => {
      return (<div>Series {i + 1}: {s}
        {unit}
      </div>);
    });
  }

  getTraining(id) {
    return trainingsStore.filter((tr) => {
      return tr.id === id;

    })[0];
  }

}

export default Training;
