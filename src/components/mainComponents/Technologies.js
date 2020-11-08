import React, { Component } from 'react';

export default class Technologies extends Component {

  render() {
    return (
      <div id="technologies" className="container-middle-content">
        <h1 className="section-title"><span className="fw-700">Development</span> <span className="fw-normal">technologies</span></h1>
        <div className="technologies-content">
          <div className="technologies-cell w33">
            <div className="tech-cell-title fs-22">
              <div className="tech-title-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="">
              Languages
              </div>
            </div>
            <ul>
              <li className="tech-item">HTML</li>
              <li className="tech-item">CSS - Learning SASS</li>
              <li className="tech-item">JavaScript</li>
              <li className="tech-item">CSharp</li>
              <li className="tech-item">Python</li>
              <li className="tech-item">Java</li>
              <li className="tech-item">SQL</li>
            </ul>
          </div>
          <div className="technologies-cell w33">
            <div className="tech-cell-title fs-22">
              <div className="tech-title-icon">
                <i className="fas fa-layer-group"></i>
              </div>
              <div>
                Frameworks
              </div>
            </div>
            <ul>
              <li className="tech-item">React.js</li>
              <li className="tech-item">.Net Core</li>
              <li className="tech-item">Bootstrap</li>
            </ul>
          </div>
          <div className="technologies-cell w33">
            <div className="tech-cell-title fs-22">
              <div className="tech-title-icon">
                <i className="fas fa-edit"></i>
              </div>
              <div>
                Extras
              </div>
            </div>
            <ul>
              <li className="tech-item">UI/UX</li>
              <li className="tech-item">Google Firebase</li>
              <li className="tech-item">Agile - Rapid Application Development</li>
              <li className="tech-item">GitHub</li>
              <li className="tech-item">Atom IDE</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
