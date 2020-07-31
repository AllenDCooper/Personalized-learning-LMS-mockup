import React, { Component } from 'react'
import { Accordion, Card } from 'react-bootstrap'

class AccordionUnit extends Component {

  render() {
    if (this.props.score === "criticalThinkingScore") {
      return (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Critical Thinking and Goal Setting
                      </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <div>
              <Card.Body>Activity 1</Card.Body>
              <Card.Body>Activity 2</Card.Body>
              <Card.Body>Activity 3</Card.Body>
            </div>
          </Accordion.Collapse>
        </Card>
      )
    } else if (this.props.score === "motivationScore") {
      return (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Motivation and Decision Making
                      </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <div>
              <Card.Body>Activity 1</Card.Body>
              <Card.Body>Activity 2</Card.Body>
              <Card.Body>Activity 3</Card.Body>
            </div>
          </Accordion.Collapse>
        </Card>
      )
    } else if (this.props.score === "learningScore") {
      return (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            LearningPreferences
                      </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <div>
              <Card.Body>Activity 1</Card.Body>
              <Card.Body>Activity 2</Card.Body>
              <Card.Body>Activity 3</Card.Body>
            </div>
          </Accordion.Collapse>
        </Card>
      )
    } else if (this.props.score === "timeManagementScore") {
      return (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Organization and Time Management
                      </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <div>
              <Card.Body>Activity 1</Card.Body>
              <Card.Body>Activity 2</Card.Body>
              <Card.Body>Activity 3</Card.Body>
            </div>
          </Accordion.Collapse>
        </Card>
      )
    } else if (this.props.score === "readingScore") {
      return (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Reading
                      </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <div>
              <Card.Body>Activity 1</Card.Body>
              <Card.Body>Activity 2</Card.Body>
              <Card.Body>Activity 3</Card.Body>
            </div>
          </Accordion.Collapse>
        </Card>
      )
    } else if (this.props.score === "noteTakingScore") {
      return (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Note Taking
                      </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <div>
              <Card.Body>Activity 1</Card.Body>
              <Card.Body>Activity 2</Card.Body>
              <Card.Body>Activity 3</Card.Body>
            </div>
          </Accordion.Collapse>
        </Card>
      )
    } else if (this.props.score === "memoryScore") {
      return (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Memory and Studying
                      </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <div>
              <Card.Body>Activity 1</Card.Body>
              <Card.Body>Activity 2</Card.Body>
              <Card.Body>Activity 3</Card.Body>
            </div>
          </Accordion.Collapse>
        </Card>
      )
    } else if (this.props.score === "testTakingScore") {
      return (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Test Taking
                      </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <div>
              <Card.Body>Activity 1</Card.Body>
              <Card.Body>Activity 2</Card.Body>
              <Card.Body>Activity 3</Card.Body>
            </div>
          </Accordion.Collapse>
        </Card>
      )
    } else if (this.props.score === "commScore") {
      return (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Information Literacy and Communication
                      </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <div>
              <Card.Body>Activity 1</Card.Body>
              <Card.Body>Activity 2</Card.Body>
              <Card.Body>Activity 3</Card.Body>
            </div>
          </Accordion.Collapse>
        </Card>
      )
    } else if (this.props.score === "connectingSCore") {
      return (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Connecting with Others
                      </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <div>
              <Card.Body>Activity 1</Card.Body>
              <Card.Body>Activity 2</Card.Body>
              <Card.Body>Activity 3</Card.Body>
            </div>
          </Accordion.Collapse>
        </Card>
      )
    } else if (this.props.score === "healthScore") {
      return (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Personal and Financial Health
                      </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <div>
              <Card.Body>Activity 1</Card.Body>
              <Card.Body>Activity 2</Card.Body>
              <Card.Body>Activity 3</Card.Body>
            </div>
          </Accordion.Collapse>
        </Card>
      )
    } else if (this.props.score === "planningScore") {
      return (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Academic and Career Planning
                      </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <div>
              <Card.Body>Activity 1</Card.Body>
              <Card.Body>Activity 2</Card.Body>
              <Card.Body>Activity 3</Card.Body>
            </div>
          </Accordion.Collapse>
        </Card>
      )
    }
  }
};

export default AccordionUnit