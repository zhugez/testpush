import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="indigo accent-3 sticky">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo flow-text">
                ZhugeZ
              </Link>
              <Link to="/" data-target="side-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/#home">
                    <i class="fas fa-home"></i> Home
                  </Link>
                </li>
                <li>
                  <Link to="#skills">
                    <i class="fas fa-copy"></i> Skills
                  </Link>
                </li>
                <li>
                  <Link to="#experience">
                    <i class="fas fa-id-badge"></i> Experience
                  </Link>
                </li>
                <li>
                  <Link to="#educations">
                    <i class="fas fa-graduation-cap"></i> Educations
                  </Link>
                </li>
                <li>
                  <Link to="#achievements">
                    <i class="fas fa-address-card"></i> Achievements
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ul className="sidenav" id="side-nav">
          <li>
            <Link to="/">
              <i class="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="#101">
              <i class="fas fa-copy"></i> Skills
            </Link>
          </li>
          <li>
            <Link to="#102">
              <i class="fas fa-id-badge"></i> Experiences
            </Link>
          </li>
          <li>
            <Link to="#103">
              <i class="fas fa-graduation-cap"></i> Educations
            </Link>
          </li>
          <li>
            <Link to="/portfolios">
              <i class="fas fa-address-card"></i> Portfolios
            </Link>
          </li>
        </ul>
      </>
    );
  }
}
