import React, { Component } from 'react';
import { Card, Accordion } from 'react-bootstrap';

class Scorecard extends Component {

  render() {
    console.log(this.props.strengthsArr)

    // if no scores because assessment hasn't been taken yet, then no content modules will be delivered to user
    if (this.props.scoreArr.length === 0) {
      return (
        null
      )
    }
    // otherwise will display a strengths report module
    else {
      return (
        <div>
          <h4 style={{ paddingLeft: "20px" }}>
            Your Strengths Report
      </h4>
          <Accordion style={{ marginBottom: "30px" }} >
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="14">
                View Report
            </Accordion.Toggle>
              <Accordion.Collapse eventKey="14">
                <Card.Body>
                  <h5>Your Strengths</h5>
                  <ul>
                    {this.props.strengthsArr[0].Strengths.length === 0 ? <li>[empty]</li> : (
                      this.props.strengthsArr[0].Strengths.map((scale, index) => (
                        <li key={`key-${index}`}>{scale.name}: {scale.value}%</li>
                      ))
                    )}
                  </ul>
                  <h5>Your Developing Strengths</h5>
                  <ul>
                    {this.props.strengthsArr[1].Developing_Strengths.length === 0 ? <li>[empty]</li> : (
                      this.props.strengthsArr[1].Developing_Strengths.map((scale, index) => (
                        <li key={`key-${index}`}>{scale.name}: {scale.value}%</li>
                      ))
                    )}
                  </ul>
                  <h5>Your Growth Areas</h5>
                  <ul>
                    {this.props.strengthsArr[2].Growth_Areas.length === 0 ? <li>[empty]</li> : (
                      this.props.strengthsArr[2].Growth_Areas.map((scale, index) => (
                        <li key={`key-${index}`}>{scale.name}: {scale.value}%</li>
                      ))
                    )}
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