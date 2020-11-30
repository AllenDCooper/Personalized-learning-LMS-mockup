import React, { Component } from 'react';
import { Jumbotron, Button, Form, Row, Col } from 'react-bootstrap';

class Header extends Component {

  render() {
    console.log(this.props.numUnits)
    return (
      <div style={{backgroundColor: '#f3f3f3', padding: '40px 0px 20px 0px'}}>
        <h1 className="sans-pro-header" style={{marginBottom: '1.5rem'}}>ACES Goal-Setter</h1>
        <Row style={{paddingLeft: '20px', backgroundColor: '#cff3f9', margin: '0px'}}>
          <Col sm={12} md={3} style={{ marginTop: "20px" }}>
            <Button variant="outline-dark" onClick={this.props.onClickReset} style={{ display: "inline", marginRight: "20px" }}>
              Reset
              </Button>
          </Col>
          <Col sm={12} md={4}>
            <div style={{ display: "inline" }}>
              <Form style={{ marginTop: "25px" }}>
                <Form.Group controlId="showUnassigned">
                  <div style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "500" }}>Show Unassigned?</span>
                    <Form.Check
                      style={{ display: "inline", marginLeft: "15px" }}
                      type="switch"
                      id="showUnassignedSwitch"
                      label={this.props.showUnassigned ? "On" : "Off"}
                      onChange={this.props.handleShowUnassigned}
                    />
                  </div>
                </Form.Group>
              </Form>
            </div>
            {/* <Button variant="primary" onClick={this.props.onClickSeeAll} style={{ marginRight: "20px" }}>
              Toggle See Content Units
          </Button> */}
          </Col>
          <Col sm={12} md={5} >
            <Form style={{ marginTop: "25px" }}>
              <Form.Group controlId="adaptiveLearning">
                <div style={{ marginBottom: "10px" }}>
                  <span style={{ fontWeight: "500" }}>Adaptive learning?</span>
                  <Form.Check
                    style={{ display: "inline", marginLeft: "15px" }}
                    type="switch"
                    id="adaptiveLearningSwitch"
                    label={this.props.adaptiveLearningOn ? "On" : "Off"}
                    onChange={this.props.handleAdaptiveLearningChange}
                  />
                  <p style={{fontSize: '12px', color: 'darkgray'}}>Deliver personalized content units based on the strengths report.</p>
                </div>
                {this.props.adaptiveLearningOn ?
                  <div>
                    <Form.Label style={{ fontWeight: "500" }}>Number of Goals to Assign at a Time</Form.Label>
                    <Form.Control as="select" defaultValue="3" value={this.props.numGoalsToDisplay} onChange={(event) => this.props.handleChange(event)}>
                      {this.props.numUnits.map((item, index) => (
                        <option>{index + 1}</option>
                      ))}
                    </Form.Control>
                  </div>
                  :
                  null
                }
              </Form.Group>
            </Form>
          </Col>
        </Row>

      </div>
    )
  }
}

export default Header;

