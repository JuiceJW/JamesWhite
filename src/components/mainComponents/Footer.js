import React, { Component } from 'react';

export default class Footer extends Component {

  render() {
    return (
      <div id="footer" className="footer">
        <svg className="footer-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#191a1d" fillOpacity="1" d="M 0 144 L 51 150 C 120 160 192 181 288 224 C 384 267 480 277 576 256 C 677 240 782 214 879 197 C 998 182 1042 194 1152 219 C 1255 245 1344 277 1392 298.7 L 1440 320 L 1440 320 L 1392 320 C 1344 320 1248 320 1152 320 C 1056 320 960 320 864 320 C 768 320 672 320 576 320 C 480 320 384 320 288 320 C 192 320 96 320 48 320 L 0 320 Z"></path>
        </svg>
        <div className="container-middle-content footer-content">
          <div className="footer-box">
            <div className="social-media-item fw-600">
              <i className="social-icons fas fa-envelope-square"></i>
              <a
                className="social-link"
                href="mailto:jamesdwhite28@gmail.com">
                JAMESDWHITE28@GMAIL.COM
              </a>
            </div>
            <div className="social-media-item fw-600">
              <i className="social-icons fab fa-github-square"></i>
              <a
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/JuiceJW">
                ON GITHUB
              </a>
            </div>
            <div className="social-media-item fw-600">
              <i className="social-icons fab fa-linkedin"></i>
              <a
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/james-white-b70ab415b/">
                ON LINKEDIN
              </a>
            </div>
            <div className="social-media-item fw-600">
              <i className="social-icons fas fa-file-alt"></i>
              <a
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1cJgMmjKSw_0r5CiiBT9LWvulnh0LSk6B/view?usp=sharing">
                RESUME
              </a>
            </div>
          </div>

        </div>
        <div className="copyright">
          <div className="container-middle-content copyright-content">
            © 2020 James White. All rights reserved.
          </div>
        </div>
      </div>
    );
  }

}
