import React, { Component } from "react";
import UserContext from "../utils/userContext";

class AboutClass extends Component {
  constructor(props) {
    super(props);
    console.log("constructor called", props);
    this.state = {
      name: "",
      count: 0,
    };
    this.timer = null;

    console.log(this);
  }

  UNSAFE_componentWillMount() {
    console.log("componentWillMount called");
  }
  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/MantejSingh01");
    const response = await res.json();
    this.setState({ name: response.login });
    console.log("component did mount ", response);
    this.timer = setInterval(() => {
      console.log("interval started");
    }, 1000);
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate called");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps, prevState, "getSnapshotBeforeUpdate");
    return "help me from getSnapshotBeforeUpdate";
  }
  componentDidUpdate(prevState, prevProps, snapshot) {
    if (prevState.count != this.state.count) {
      console.log("kepp update", prevState.count, this.state.count);
    }

    console.log(
      "componentDidUpdate called and will be called after every update",
      this.state.name,
      snapshot
    );
  }
  componentWillUnmount() {
    console.log("componentWillUnmount called ");
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        {console.log("render called!!!")}
        Name: {this.state.name}
        <button
          onClick={() => {
            this.setState({ count: this.state.count });
          }}
        >
          {" "}
          Click
        </button>
        <span>{this.state.count}</span>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default AboutClass;
