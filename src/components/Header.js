import React from "react";
import {
  Route,
  Link,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import "../index.css";
import { Button } from "react-bootstrap";

export class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/App"
              >
                Home
              </NavLink>
              {/* <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/create"
              >
                Create
              </NavLink>

              {/* <a className="nav-link" href="#">Create</a> */}
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/about"
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
