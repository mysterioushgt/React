import React, { Component } from "react";

export default class Cstate extends Component {
  constructor() {
    super();
    this.state = {
      data: "vikas",
    };
  }
  apple() {
    this.setState({ data: "ram" });
  }
  render() {
    return (
        <>
        <h1>class state</h1>
        <div>
          <h1>{this.state.data}</h1>
          <button onClick={() => this.apple()}>Update Data</button>
        </div>
      </>
    );
  }
}
