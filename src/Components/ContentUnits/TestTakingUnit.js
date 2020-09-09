import React, { Component } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import goals from '../../ACES_Assessment/goals';
import './styles.css';
import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class TestTakingUnit extends Component {

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
          setTimeout(() => { this.typeWriter(goalString) }, 1000)
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
        <Accordion.Toggle as={Card.Header} eventKey="8" onClick={this.toggleShow}>
          Test Taking
      </Accordion.Toggle>
        <Accordion.Collapse eventKey="8">
          <div style={{ backgroundColor: "white" }}>
            <Card.Body style={{ borderBottom: "1px solid #ededed", borderTop: "1px solid #ededed", paddingLeft: "2rem" }}><div style={{ fontSize: "18px", fontWeight: "500" }}>{this.state.typed}<span className="cursor"><span style={{ fontWeight: "normal" }}>|</span></span></div></Card.Body>
            <Card.Body style={{ borderBottom: "1px solid #ededed", paddingLeft: "2rem" }}>Activity 1</Card.Body>
            <Card.Body style={{ borderBottom: "1px solid #ededed", paddingLeft: "2rem" }}>Activity 2</Card.Body>
            <Card.Body style={{ borderBottom: "1px solid #ededed", paddingLeft: "2rem" }}>Activity 3</Card.Body>
            <Card.Body style={{ paddingLeft: "2rem", color: "gray" }}>
              Goal completed?
              <Slider style={{ width: "100%", margin: "20px 30px 20px 30px", maxWidth: "300px" }} min={0} max={1} defaultValue={0} marks={{ 0: "Not yet", 1: "Yes!", }} step={null} handleStyle={{ backgroundColor: "black", border: "solid 2px black" }} dotStyle={{ border: "solid 2px black" }} trackStyle={{ backgroundColor: "green" }} />
            </Card.Body>
          </div>
        </Accordion.Collapse>
      </Card>
    )
  }
}

export default TestTakingUnit;