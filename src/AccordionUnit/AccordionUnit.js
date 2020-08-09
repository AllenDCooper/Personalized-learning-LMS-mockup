import React, { Component } from 'react'
import { Accordion, Card } from 'react-bootstrap'

class AccordionUnit extends Component {

  scoreSwitch = (score) => {
    switch (score) {
      case "criticalThinkingScore":
        return (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Critical Thinking and Goal Setting
          </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <div>
                <Card.Body>Activity 1</Card.Body>
                <Card.Body>Activity 2</Card.Body>
                <Card.Body>Activity 3</Card.Body>
              </div>
            </Accordion.Collapse>
          </Card>
        );
      case "motivationScore":
        return (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Motivation and Decision Making
                      </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <div>
                <Card.Body>Activity 1</Card.Body>
                <Card.Body>Activity 2</Card.Body>
                <Card.Body>Activity 3</Card.Body>
              </div>
            </Accordion.Collapse>
          </Card>
        )
      case "learningScore":
        return (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              LearningPreferences
                      </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <div>
                <Card.Body>Activity 1</Card.Body>
                <Card.Body>Activity 2</Card.Body>
                <Card.Body>Activity 3</Card.Body>
              </div>
            </Accordion.Collapse>
          </Card>
        )
      case "timeManagementScore":
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
      case "readingScore":
        return (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              Reading
                          </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <div>
                <Card.Body>Activity 1</Card.Body>
                <Card.Body>Activity 2</Card.Body>
                <Card.Body>Activity 3</Card.Body>
              </div>
            </Accordion.Collapse>
          </Card>
        )
      case "noteTakingScore":
        return (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="6">
              Note Taking
                      </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <div>
                <Card.Body>Activity 1</Card.Body>
                <Card.Body>Activity 2</Card.Body>
                <Card.Body>Activity 3</Card.Body>
              </div>
            </Accordion.Collapse>
          </Card>
        )
      case "memoryScore":
        return (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="7">
              Memory and Studying
                      </Accordion.Toggle>
            <Accordion.Collapse eventKey="7">
              <div>
                <Card.Body>Activity 1</Card.Body>
                <Card.Body>Activity 2</Card.Body>
                <Card.Body>Activity 3</Card.Body>
              </div>
            </Accordion.Collapse>
          </Card>
        );
      case "testTakingScore":
        return (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="8">
              Test Taking
                      </Accordion.Toggle>
            <Accordion.Collapse eventKey="8">
              <div>
                <Card.Body>Activity 1</Card.Body>
                <Card.Body>Activity 2</Card.Body>
                <Card.Body>Activity 3</Card.Body>
              </div>
            </Accordion.Collapse>
          </Card>
        );
      case "commScore":
        return (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="9">
              Information Literacy and Communication
                      </Accordion.Toggle>
            <Accordion.Collapse eventKey="9">
              <div>
                <Card.Body>Activity 1</Card.Body>
                <Card.Body>Activity 2</Card.Body>
                <Card.Body>Activity 3</Card.Body>
              </div>
            </Accordion.Collapse>
          </Card>
        )
      case "connectingScore":
        return (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="10">
              Connecting with Others
                      </Accordion.Toggle>
            <Accordion.Collapse eventKey="10">
              <div>
                <Card.Body>Activity 1</Card.Body>
                <Card.Body>Activity 2</Card.Body>
                <Card.Body>Activity 3</Card.Body>
              </div>
            </Accordion.Collapse>
          </Card>
        )
      case "healthScore":
        return (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="11">
              Personal and Financial Health
                      </Accordion.Toggle>
            <Accordion.Collapse eventKey="11">
              <div>
                <Card.Body>Activity 1</Card.Body>
                <Card.Body>Activity 2</Card.Body>
                <Card.Body>Activity 3</Card.Body>
              </div>
            </Accordion.Collapse>
          </Card>
        )
      case "planningScore":
        return (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="12">
              Academic and Career Planning
                      </Accordion.Toggle>
            <Accordion.Collapse eventKey="12">
              <div>
                <Card.Body>Activity 1</Card.Body>
                <Card.Body>Activity 2</Card.Body>
                <Card.Body>Activity 3</Card.Body>
              </div>
            </Accordion.Collapse>
          </Card>
        )
      default:
        return null;
    }
  }

  render() {
    console.log(this.props.score)
    return (this.scoreSwitch(this.props.score.name))
  }
};

export default AccordionUnit