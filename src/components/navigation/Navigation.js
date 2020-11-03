import React, { Component } from 'react';
import { Link } from 'react-scroll'

export default class Navigation extends Component {

  handleNavigation(){
    let menuBtn = document.getElementById('menuHamburger');
    let mobileNav = document.getElementById("nav-list");
    menuBtn.classList.contains('open') ? menuBtn.classList.remove('open') : menuBtn.classList.add('open');
    menuBtn.classList.contains('open') ? mobileNav.classList.add('open') : mobileNav.classList.remove('open');
  }

  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-bar-container container-middle-content">
          <Link
            className="nav-bar-personal-name fs-20"
            to="header"
            spy={true}
            smooth={true}
            duration={500}>
            <span className="fw-700">James</span>White
          </Link>

          <div className="menu-btn-container">
            <div id="menuHamburger" className="menu-btn" onClick={() => this.handleNavigation()}>
              <div className="menu-btn-burger">
              </div>
            </div>
          </div>

          <div id="nav-list" className="responsive-nav-bar">
            <ul className="nav-bar-list">
              <li className="nav-bar-list-item">
                <Link
                  onClick={this.handleNavigation}
                  to="aboutMe"
                  spy={true}
                  smooth={true}
                  duration={400}
                  offset={-80}
                  className="nav-bar-link"
                  activeClass="active">
                  About
                </Link>
              </li>
              <li className="nav-bar-list-item">
                <Link
                  onClick={this.handleNavigation}
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={400}
                  offset={-80}
                  className="nav-bar-link"
                  activeClass="active">
                  Portfolio
                </Link>
              </li>
              <li className="nav-bar-list-item">
                <Link
                  onClick={this.handleNavigation}
                  to="technologies"
                  spy={true}
                  smooth={true}
                  duration={400}
                  offset={-80}
                  className="nav-bar-link"
                  activeClass="active">
                  Development Technologies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}
