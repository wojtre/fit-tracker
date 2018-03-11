import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.css';
import './css/Menu.css'

class Menu extends Component {
  render() {
    return (<nav >
      <div className="navWide">
        <div className="wideDiv">
          <a href="#">Trainings</a>
          <a href="#">Statistics</a>
          <a href="#">Settings</a>
        </div>
      </div>
      <div className="navNarrow">
        <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
        <div className="narrowLinks">
          <a href="#" onClick={this.burgerToggle}>Trainings</a>
          <a href="#" onClick={this.burgerToggle}>Statistics</a>
          <a href="#" onClick={this.burgerToggle}>Settings</a>
        </div>
      </div>
    </nav>);
  }

  burgerToggle() {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
  }

}

export default Menu;
