import React, { Component } from 'react';

export default class AboutMe extends Component {

  render() {
    return (
      <div id="aboutMe" className="about-container">
        <div className="container-middle-content">
          <h1><span className="fw-700">About</span><span className="fw-normal">me</span></h1>
          <p>
            Self motivated, confident individual, who takes pride in his work and has the ability to adapt quickly
            to challenges. I grew up in a small rural town in the Kaipara region, and moved to Auckland city at the beginning
            of 2018 to attend Manukau Institute of Technology and complete a Bachelors of Digital Technology, Majoring in
            Software and Web Development.
          </p>
          <p>
            Interested in all aspects of the Web Development spectrum, and looking to apply my knowledge from MIT in a
            professional environment in order to progress my development ability to a high standard.
          </p>
        </div>
      </div>
    );
  }
}
