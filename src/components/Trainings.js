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
    return this.state.trainings.map((training) => {
      return (<div className="training-short  col-md-4 col-sm-6">{training.date}</div>);
    });
  }

  renderTraining(training) {
    return (<div>{training.date}</div>);
  }

  constructor() {
    super();
    this.state = {
      trainings: [
        {
          date: "21-02-2018"
        }, {
          date: "21-02-2017"
        }
        , {
          date: "21-02-2016"
        }
        , {
          date: "21-02-2016"
        }
        , {
          date: "21-02-2016"
        }
        , {
          date: "21-02-2016"
        }
        , {
          date: "21-02-2016"
        }
        , {
          date: "21-02-2016"
        }
        , {
          date: "21-02-2016"
        }
        , {
          date: "21-02-2016"
        }
      ]
    }
  }
}

export default Trainings;
