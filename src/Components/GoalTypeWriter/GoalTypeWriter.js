import React, { Component } from "react";
import './styles.css'

class GoalTypeWriter extends Component {
  state = {
    typed: ""
  };

  componentDidMount() {
    console.log(this.props.inputStrings)
    console.log([].concat(this.props.inputStrings));
    setTimeout ( () =>
    this.typeWriter(
      this.props.inputStrings[0],
      [].concat(this.props.inputStrings)
    ), 2000)
  }

  typeWriter(string, words) {
    if (string.length === 0) {
      words = words.slice(1);
    } else {
      this.setState((state, props) => ({
        typed: state.typed.concat(string[0])
      }));

      setTimeout(() => this.typeWriter(string.slice(1), words), 50);
    }
  }

  render() {
    return <div style={{fontSize: "18px"}}>{this.state.typed}<span className="cursor">|</span></div>;
  }
}

export default GoalTypeWriter;
