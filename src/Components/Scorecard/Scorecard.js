import React, { Component } from 'react';
import { Card, Accordion, Spinner, ProgressBar, Row, Col, Button } from 'react-bootstrap';
import AccordionScale from '../AccordionScale/AccordionScale';

class Scorecard extends Component {

  render() {
    console.log(this.props.strengthsArr)
    console.log(this.props.spinnerOn)

    // if no scores because assessment hasn't been taken yet, then no content modules will be delivered to user
    if (this.props.goalsArr.length === 0) {
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
          {this.props.spinnerOn ?
            <div style={{ marginBottom: "30px" }}>
              <Spinner animation="grow" role="status" variant="primary" style={{ marginLeft: "20px" }}>
                <span className="sr-only">Loading...</span>
              </Spinner>
              <span style={{ marginLeft: "10px" }}>Creating your strengths report...</span>
            </div>
            :
            <Accordion style={{ marginBottom: "30px" }} >
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="14">
                  View Report
            </Accordion.Toggle>
                <Accordion.Collapse eventKey="14">
                  <Card.Body>
                    <h5 className='strengths-header'>Your Strengths</h5>
                    <div style={{ margin: '20px 0px' }}>
                      {this.props.strengthsArr[0].Strengths.length === 0 ? <li>[empty]</li> : (
                        this.props.strengthsArr[0].Strengths.map((scale, index) => (
                          <AccordionScale scale={scale} index={index} />
                        ))
                      )}
                    </div>
                    <h5 className='strengths-header'>Your Developing Strengths</h5>
                    <div style={{ margin: '20px 0px' }}>
                      {this.props.strengthsArr[1].Developing_Strengths.length === 0 ? <li>[empty]</li> : (
                        this.props.strengthsArr[1].Developing_Strengths.map((scale, index) => (
                          <AccordionScale scale={scale} index={index} />
                        ))
                      )}
                    </div>
                    <h5 className='strengths-header'>Your Growth Areas</h5>
                    <div style={{ margin: '20px 0px' }}>
                      {this.props.strengthsArr[2].Growth_Areas.length === 0 ? <li>[empty]</li> : (
                        this.props.strengthsArr[2].Growth_Areas.map((scale, index) => (
                          <AccordionScale scale={scale} index={index} />
                        ))
                      )}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          }
        </div>
      )
    }
  }
}

export default Scorecard;