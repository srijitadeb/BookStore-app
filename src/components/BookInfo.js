import React, { component } from "react";
import ReactDOM from "react-dom";

export class BookInfo extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }
  render() {
    console.log("details", this.props);

    return <div>{JSON.stringify(this.props.location.state)}</div>;
  }
}
