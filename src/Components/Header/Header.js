import React, { Component } from 'react';
import { Jumbotron, Button, Form, Row, Col } from 'react-bootstrap';

class Header extends Component {

  render() {
    console.log(this.props.numUnits)
    return (
      <Jumbotron>
        <h1>ACES Goal-Setter</h1>
        <Row>
          <Col style={{ marginTop: "30px" }}>
            <Button variant="primary" onClick={this.props.onClickReset} style={{ marginRight: "20px" }}>
              Reset
          </Button>
            {/* <Button variant="primary" onClick={this.props.onClickSeeAll} style={{ marginRight: "20px" }}>
              Toggle See All
          </Button> */}
          </Col>
          <Col>
            <Form style={{ marginTop: "35px" }}>
              <Form.Group controlId="exampleForm.SelectCustom">
                <div style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: "500" }}>Personalized learning?</span>
                <Form.Check
                  style={{ display: "inline", marginLeft: "15px" }}
                  type="switch"
                  id="custom-switch"
                  label={this.props.personalizedLearningOn ? "" : ""}
                  onChange={this.props.handlePersonalizedLearningChange}
                />
                </div>
                {this.props.personalizedLearningOn ?
                  <div>
                    <Form.Label>Number of Goals to Display at a Time</Form.Label>
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

      </Jumbotron>
    )
  }
}

export default Header;

