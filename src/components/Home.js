import React from "react";
import data from "../data/books.json";
import { Detail } from "./Details";
import { hashHistory } from "react-router";
import { browserHistory } from "react-router";
import {
  Route,
  Link,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

// const Child (match) => console.log(match) ||(
//   <div>
//    <h3>Id:</h3>
//   </div>
// );


export class Home extends React.Component {
  constructor() {
    super();
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    //browserHistory.push("/about");
    hashHistory.push("/about");
    // const { history } = this.props;

    // console.log("path");
    // let path = "/about";
    // history.push(path);
    //this.props.history.push("/");
  }
  Child (match){
    console.log(match);
  }

  render() {
    console.log(this.props.books);
    let bookList = this.props.books.map((book, i) => {
      return (
        <tr key={i}>
          <th>{i + 1}</th>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>
            <button type="button" className="btn btn-primary space">
              Edit{" "}
            </button>
            <button type="button" className="btn btn-secondary">
              {/* <Route path="/:id" component={Child} /> Detail */}
               <Link to={`/about/${i+1}`}> Details
            </Link> 
            </button>

            {/* <button
              type="button"
              className="btn btn-secondary"
              onClick={this.routeChange}
            >
              Details
            </button> */}
          </td>
        </tr>
      );
    });
    return (
      <div className="container space">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{bookList}</tbody>
        </table>
      </div>
    );
  }
}

// Home.propTypes = {
//     name: React.PropTypes.string,
//     age: React.PropTypes.number,
//     user: React.PropTypes.object
// };
