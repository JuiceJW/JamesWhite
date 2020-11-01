import React, { Component } from 'react';

import BackgroundImage from '../../img/auckland-skyline-4.jpg';

export default class HeadImage extends Component {

  render() {
    return (
      <div id="header" className="head-description">
        <img
          className="head-desc-img"
          src={BackgroundImage}
          alt=""
        />
        <div className="centered-name-desc">
          <div className="my-name fw-500">James Dylan White</div>
          <div className="my-desc fw-700">Web Developer</div>
        </div>
      </div>
    );
  }
}
