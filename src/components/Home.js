import React from "react";
import data from "../data/books.json";
export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data,
    };
    console.log(this.state.data);
  }
  componentWillMount() {}
  render() {
    let books = this.state.data.map((book, i) => {
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
              Delete
            </button>
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
          <tbody>{books}</tbody>
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
