import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Menu extends Component {
  render() {
    return (<div className="container">
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
        <a className="navbar-brand" href="#">Fit tracker</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">Trainings<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">Statistics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">Settings</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>);
  }

}

export default Menu;
