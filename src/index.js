console.log(" React Webpack Babel Setup");
import React, { component } from "react";
//import React from "react";
import ReactDOM from "react-dom";
//import { Route, Router, browserHistory } from "react-router";
//import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import {
  Route,
  Link,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import "./index.css";

//import { NameForm } from './components/formdata';
import { App } from "./components/App";
//import { Root } from "./components/Root";
import { Detail } from "./components/Details";
import { Create } from "./components/Create";
import { Header } from "./components/Header";
// import { Home } from "./components/Home";
// import { Header } from "./components/Header";

const routing = (
  <Router>
    <div>
        <Header />
        <Route exact path="/App" component={App} />
        <Route path="/create" component={Create} />
        <Route path="/about" component={Detail} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("app"));

module.hot.accept();
