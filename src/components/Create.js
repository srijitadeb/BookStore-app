import React, { Component } from "react";
import PropTypes from "prop-types";

export class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      language: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(props);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const data = {
      [name]: value,
    };
    //console.log(data);
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
   //*********passing state  */
    this.props.history.push({
      pathname: "/App",
      state: {
        title: this.state.title,
        author: this.state.author,
        language: this.state.language,
      },
    });
    // this.setState({
    //   title: "",
    //   author: "",
    //   language: "",
    // });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Book Name:
                <input type="text" name="title" onChange={this.handleChange} />
              </label>
            </div>
            <div>
              <label>
                Author :
                <input type="text" name="author" onChange={this.handleChange} />
              </label>
            </div>
            <div>
              <label>
                Language :
                <input
                  type="text"
                  name="language"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
Create.propTypes = {
  createNewBook: PropTypes.func,
};

export default Create;
