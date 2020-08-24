import React, { Component } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import goals from '../../ACES_Assessment/goals';
import './styles.css';

class CriticalThinkingUnit extends Component {

  state = {
    show: false,
    typed: ""
  }

  toggleShow = () => {
    this.setState(prevState => {
      return {
        show: !prevState.show
      }
    },
      () => {
        if (this.state.show) {
          let goalString = "";
          goalString = goals[this.props.score.name][this.findValueTier(this.props.score.value)]
          setTimeout(() => {this.typeWriter(goalString)}, 2000)
        } else {
          this.resetTypeWriter()
        }
      }
    )
  };

  resetTypeWriter() {
    this.setState({
      typed: ""
    })
  }

  typeWriter(slicedStr) {
    if (slicedStr.length !== 0 && this.state.show) {
      this.setState((state) => ({
        typed: state.typed.concat(slicedStr[0])
      }));

      setTimeout(() => this.typeWriter(slicedStr.slice(1)), 50);
      console.log(`this.state.typed: ${this.state.typed}`)
    }
  }

  findValueTier = (value) => {
    return value > 75 ? "high"
      : value > 25 ? "moderate"
        : "low";
  }

  render() {
    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1" onClick={this.toggleShow}>
          Critical Thinking and Goal Setting
      </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <div>
            <Card.Body><div style={{ fontSize: "18px" }}>{this.state.typed}<span className="cursor">|</span></div></Card.Body>
            <Card.Body>Activity 1</Card.Body>
            <Card.Body>Activity 2</Card.Body>
            <Card.Body>Activity 3</Card.Body>
          </div>
        </Accordion.Collapse>
      </Card>
    )
  }
}

export default CriticalThinkingUnit;