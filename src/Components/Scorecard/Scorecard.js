import React, { Component } from 'react';
import { Card, Accordion } from 'react-bootstrap';

class Scorecard extends Component {

  render() {
    console.log(this.props.scoreArr)

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
                  <ul>
                    {this.props.scoreArr.map((scale, index) => (
                      <li key={`key-${index}`}>{scale.name}: {scale.score}%</li>
                    ))}
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