import React from 'react';
import { Container, Accordion, Card, Spinner, Button, Col, Row } from 'react-bootstrap';
import AccordionUnit from '../AccordionUnit/AccordionUnit';
import CompletedGoals from '../CompletedGoals/CompletedGoals';

const CompletedGoalsContainer = (props) => {

  return (
    <Container>
      <Row className='tab-title-container'>
        <Col>
          <h4 className='tab-title'>
            Completed Goals
          </h4>
        </Col>
      </Row>
      <CompletedGoals completedGoalsArr={props.completedGoalsArr} takenAssessment={props.takenAssessment} saveCompletedGoal={props.saveCompletedGoal} role={props.roleSelected} spinnerOn={props.spinnerOn} />
    </Container>
  )
}

export default CompletedGoalsContainer;