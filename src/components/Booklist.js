import React from "react";
import { Link } from "react-router-dom";

export class BookList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    console.log(this.props);
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
              <Link
                to={{ pathname: `/bookinfo/${i + 1}`, state: { book: book } }}
              >
                Details
              </Link>
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.routeChange}
            >
              Details 1
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
