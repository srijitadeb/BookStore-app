import React, { component } from "react";
import data from "../data/books.json";
//const data = require('./data/books.json');
import { Home } from "./Home";
//const data = require('./data/books.json');

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

//export default App;
