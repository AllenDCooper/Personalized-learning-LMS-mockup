import React, { Component } from 'react';
import { Accordion, Card, Form } from 'react-bootstrap';
import goals from '../../ACES_Assessment/goals';
import './styles.css';
import ModalReassessment from '../ModalReassessment/ModalReassessment';

class CardUnit extends Component {

  state = {
    show: false,
    typed: "",
    switchChecked: false,
    viewed: false,
  }

  toggleShow = () => {
    console.log(`this.state.show: ${this.state.show}`)
    this.setState(prevState => {
      return {
        show: !prevState.show
      }
    },
      () => {
        if (this.state.show && !this.state.viewed) {
          let goalString = "";
          goalString = goals[this.props.score.name][this.findValueTier(this.props.score.percentileScoreInitial)]
          setTimeout(() => { this.typeWriter(goalString) }, 1000)
          this.setState({ viewed: true })
        } else {
          this.setState({ typed: goals[this.props.score.name][this.findValueTier(this.props.score.percentileScoreInitial)]})
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
    })
    // () => {
    //   this.props.saveCompletedGoal(this.props.score)
    // })
  }

  render() {
    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.index} onClick={this.toggleShow}>
          {this.props.score.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.index} >
          <div>
            {this.props.takenAssessment
              ?
              <Card.Body style={{ borderBottom: "1px solid #ededed", borderTop: "1px solid #ededed", paddingLeft: "2rem" }}>
                <div style={{ fontSize: "18px", fontWeight: "500" }}>
                  {this.state.typed}
                  <span className="cursor">
                    <span style={{ fontWeight: "normal" }}>|</span>
                  </span>
                </div>
              </Card.Body>
              :
              null
            }
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
              this.state.switchChecked ?
                <Card.Body style={{ paddingLeft: "2rem" }}>
                  Goal completed?
                  <Form.Check
                    type="switch"
                    id={`switch-${this.props.index}`}
                    onClick={this.submitGoal}
                    label={(this.state.switchChecked ? `Yes!` : `No`)}
                  />
                </Card.Body>
                :
                <Card.Body style={{ paddingLeft: "2rem", backgroundColor: "#fff6e5" }}>
                  Goal completed?
                  <Form.Check
                    type="switch"
                    id={`switch-${this.props.index}`}
                    onClick={this.submitGoal}
                    label={(this.state.switchChecked ? `Yes!` : `No`)}
                  />
                </Card.Body>
            )
              : null}
            {this.state.switchChecked ? (
              <ModalReassessment updateScore={this.props.updateScore} scaleName={this.props.score.name} submitScore={this.props.submitScore} saveCompletedGoal={this.props.saveCompletedGoal} score={this.props.score} />) : null}
          </div>
        </Accordion.Collapse>
      </Card >
    )
  }
}

export default CardUnit;