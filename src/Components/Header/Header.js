import React from 'react';
import { Jumbotron, Button, Form, Row, Col } from 'react-bootstrap';

function Header(props) {
  console.log(props.numUnits)
  return (
    <Jumbotron>
      <h1>ACES Goal-Setter</h1>
      <Row>
        <Col style={{marginTop: "30px"}}>
          <Button variant="primary" onClick={props.onClickReset} style={{ marginRight: "20px" }}>
            Reset
        </Button>
          <Button variant="primary" onClick={props.onClickSeeAll} style={{ marginRight: "20px" }}>
            Toggle See All
      </Button>
        </Col>
        <Col>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Number of Goals to Display</Form.Label>
              <Form.Control as="select" defaultValue="3" onChange={(event) => props.handleChange(event)}>
                {props.numUnits.map((item, index) => (
                  <option>{index + 1}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>

    </Jumbotron>
  )
}

export default Header;

