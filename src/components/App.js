import React, { component } from "react";
import data from "../data/books.json";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Create } from "./Create";
import axios from "axios";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: data,
    };
  }

  componentWillMount(){
    console.log("state maintain",this.props.location.state);
    let books = this.state.books;
    let newBook = this.props.location.state;
    books.push(newBook);
    this.setState({ 
        books
     });
    
  }

  render() {
      
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Home books={this.state.books} />
          </div>
        </div>
      </div>
    );
  }
}

//export default App;
