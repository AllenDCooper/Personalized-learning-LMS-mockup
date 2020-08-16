import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

function criticalThinkingUnit() {
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
  )
};

function motivationUnit() {
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="2">
        Motivation, Decision Making, and Personal Responsibility
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
};

function learningUnit() {
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="3">
        Learning Preferences
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
}

function timeManagementUnit() {
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
}

function readingUnit() {
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
}

function noteTakingUnit() {
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
}

function memoryUnit() {
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
  )
}

function testTakingUnit() {
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
}

function commUnit() {
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
}

function connectingUnit() {
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
}

function healthUnit() {
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
}

function planningUnit() {
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
}

export { criticalThinkingUnit, motivationUnit, learningUnit, timeManagementUnit, readingUnit, noteTakingUnit, memoryUnit, testTakingUnit, commUnit, connectingUnit, healthUnit, planningUnit };