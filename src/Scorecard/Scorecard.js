import React, { Component } from 'react';
import { Card, Accordion } from 'react-bootstrap';

class Scorecard extends Component {

  render() {
    console.log(this.props.scoreArr)
    if (this.props.scoreArr.length === 0) {
      return (
        null
      )
    } else {
      return (
        <div>
          <h4 style={{ paddingLeft: "20px" }}>
            Your Score
      </h4>
          <Accordion style={{ marginBottom: "30px" }} >
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="14">
                Your Score
            </Accordion.Toggle>
              <Accordion.Collapse eventKey="14">
                <Card.Body>
                  <ul>
                    <li>Critical Thinking: {this.props.scoreArr[0]}</li>
                    <li>Motivation and Decision Making: {this.props.scoreArr[1]}</li>
                    <li>Learning Preferences: {this.props.scoreArr[2]}</li>
                    <li>Organization and Time Management: {this.props.scoreArr[3]}</li>
                    <li>Reading: {this.props.scoreArr[4]}</li>
                    <li>Note Taking: {this.props.scoreArr[5]}</li>
                    <li>Studying and Memory: {this.props.scoreArr[6]}</li>
                    <li>Test Taking: {this.props.scoreArr[7]}</li>
                    <li>Information Literacy and Commuication: {this.props.scoreArr[8]}</li>
                    <li>Connecting with Others: {this.props.scoreArr[9]}</li>
                    <li>Personal and Financial Health: {this.props.scoreArr[10]}</li>
                    <li>Academic and Career Planning: {this.props.scoreArr[11]}</li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      )
    }
  }
}

export default Scorecard;