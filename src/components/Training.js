import React, {Component} from 'react';
import './css/Training.css'
import 'bootstrap/dist/js/bootstrap.js';

class Training extends Component {
  render() {
    return (<div className="trainings">
      <div className="container">
        <h2 className="training-title">{this.props.training.title}
        </h2>
        {this.renderTraining()}</div>
      <button className="add-element-button" title="add new exercise"><i class="fa fa-plus"></i></button>
    </div>);
  }

  constructor(props) {
    super(props);
  }

  renderTraining() {
    if (this.props.training) {
      if (!this.props.training.exercises || this.props.training.exercises.length < 1) {
        return (<div className="exercise">Add exercise</div>);
      }
      return this.props.training.exercises.map((ex) => {
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

}

export default Training;
