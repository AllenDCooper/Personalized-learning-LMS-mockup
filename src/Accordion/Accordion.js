import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

class AccordionUnit extends Component {
  render() {
    return (

      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Unit 1
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Unit 2
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
};

export default AccordionUnit;