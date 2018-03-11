import React, {Component} from 'react';
import './css/Training.css'
import 'bootstrap/dist/js/bootstrap.js';

class Training extends Component {
  render() {
    return (<div className="trainings">
      <div className="container">{this.renderTraining()}</div>
    </div>);
  }

  constructor(props) {
    super(props);
    this.state = {
      training: props.training
    };
  }

  renderTraining() {
    return this.state.training.exercises.map((ex) => {
      return this.renderEx(ex);
    });
  }

  renderEx(ex) {
    return (<div className="exercise">
      <div>{ex.name}</div>
      {this.renderSeries(ex.series, ex.unit)}
    </div>)
  }

  renderSeries(series, unit) {
    return series.map((s, i) => {
      return (<div>Series {i+1}: {s}
        {unit}
      </div>);
    });
  }

}

export default Training;
