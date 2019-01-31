import React, { component } from "react";
import data from "../data/books.json";
//const data = require('./data/books.json');
import { Header } from "./Header";
import { Home } from "./Home";
//const data = require('./data/books.json');

export class Root extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="col-md-12">
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

//export default Root;
