import React, { Component } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import goals from '../../ACES_Assessment/goals';
import './styles.css';
import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class CardUnit extends Component {

  state = {
    show: false,
    typed: ""
  }

  toggleShow = () => {
    console.log(`this.state.show: ${this.state.show}`)
    this.setState(prevState => {
      return {
        show: !prevState.show
      }
    },
      () => {
        if (this.state.show) {
          let goalString = "";
          goalString = goals[this.props.scoreName][this.findValueTier(this.props.scoreValue)]
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
      // console.log(`this.state.typed: ${this.state.typed}`)
    }
  }

  findValueTier = (value) => {
    console.log(value)
    console.log(value > 75 ? "high"
      : value > 25 ? "moderate"
        : "low")
    return value > 75 ? "high"
      : value > 25 ? "moderate"
        : "low";
  }

  render() {
    console.log(`index: ${this.props.index}`)
    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.index} onClick={this.toggleShow}>
          {this.props.scoreName}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.index} >
          <div style={{ backgroundColor: "#fff6e5" }}>
            <Card.Body style={{ borderBottom: "1px solid #ededed", borderTop: "1px solid #ededed", paddingLeft: "2rem" }}><div style={{ fontSize: "18px", fontWeight: "500" }}>{this.state.typed}<span className="cursor"><span style={{ fontWeight: "normal" }}>|</span></span></div></Card.Body>
            {this.props.activitiesArr.map((item, index) => (
              <Card.Body style={{ borderBottom: "1px solid #ededed", paddingLeft: "2rem" }}>{item.activityName}</Card.Body>
            ))}
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

export default CardUnit;