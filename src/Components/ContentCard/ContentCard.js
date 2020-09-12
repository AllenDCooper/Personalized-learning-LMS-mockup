import React, { Component } from 'react';
import { Accordion, Card, Form } from 'react-bootstrap';
import goals from '../../ACES_Assessment/goals';
import './styles.css';

class CardUnit extends Component {

  state = {
    show: false,
    typed: "",
    switchChecked: false
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

  submitGoal = () => {
    this.setState(prevState => {
      return {
        switchChecked: !prevState.switchChecked
      }
    }, () => {
      this.props.saveCompletedGoal()
    })
  }

  render() {
    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.index} onClick={this.toggleShow}>
          {this.props.scoreName}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.index} >
          <div>
            <Card.Body style={{ borderBottom: "1px solid #ededed", borderTop: "1px solid #ededed", paddingLeft: "2rem" }}><div style={{ fontSize: "18px", fontWeight: "500" }}>{this.state.typed}<span className="cursor"><span style={{ fontWeight: "normal" }}>|</span></span></div></Card.Body>
            {this.props.activitiesArr.map((item, index) => (
              <Card.Body style={{ borderBottom: "1px solid #ededed", paddingLeft: "2rem" }}>
                <Form.Group controlId={`formBasicCheckbox-${index}`}>
                  {item.completed ? (
                    <Form.Check type="checkbox" checked label={`${item.activityName} ${(item.completed ? "Completed" : "")}`} />
                  ) : (
                      <Form.Check type="checkbox" label={`${item.activityName}`} onChange={() => this.props.submitActivity(index)} />
                    )}
                </Form.Group>
              </Card.Body>
            ))}
            {this.props.allActivitiesComplete ? (
            <Card.Body style={{ paddingLeft: "2rem", backgroundColor: "#fff6e5" }}>
              Goal completed?
              <Form.Check
                type="switch"
                id={`switch-${this.props.index}`}
                onClick={this.submitGoal}
                label={(this.state.switchChecked ? `Yes!` : `No`)}
              />
            </Card.Body>) : null }
          </div>
        </Accordion.Collapse>
      </Card >
    )
  }
}

export default CardUnit;