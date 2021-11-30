import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helloText: "Hello, World! (Class Component)",
      currentSecond: 0,
    };
  }

  componentDidMount = () => {
    // this.setState({ ...this.state, helloText: "Hello, World" });
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        currentSecond: prevState.currentSecond - 1,
      }));
    }, 1000);
  };

  componentWillUnmount = () => {
    console.log("componentWillUnmount");
    if (this.timer) {
      clearInterval(this.timer);
    }
  };

  render() {
    const { helloText, currentSecond } = this.state;
    // console.log(this.state);
    return (
      <div>
        <h1>{helloText}</h1>
        <p>{currentSecond}</p>
        <Link to="/">Back </Link>
      </div>
    );
  }
}

export default ClassComponent;
