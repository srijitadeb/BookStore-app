import React from "react";

export class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      language: "",
      list: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleSubmit() {
    let listArray = this.state.list;
    listArray.push(this.state);
    console.log(listArray);

    this.setState({
      list: listArray,
    });
    event.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <div classNameName="row">
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
              <input
                type="submit"
                value="Submit"
                onChange={this.handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Create;
