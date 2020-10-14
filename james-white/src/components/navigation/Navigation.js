import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-bar-container container-middle-content ">
          <div className="nav-bar-personal-name fs-20">
            <span className="fw-700">James</span>White
          </div>
          <ul className="nav-bar-list">
            <li className="nav-bar-list-item">
              <Link className="nav-bar-link">
                About me
              </Link>
            </li>
            <li className="nav-bar-list-item">
              <Link className="nav-bar-link">
                Development Technologies
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

}
