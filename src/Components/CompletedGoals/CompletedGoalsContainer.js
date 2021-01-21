import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
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
      <CompletedGoals completedGoalsArr={props.completedGoalsArr} takenAssessment={props.takenAssessment} saveCompletedGoal={props.saveCompletedGoal} role={props.role} spinnerOn={props.spinnerOn} />
    </Container>
  )
}

export default CompletedGoalsContainer;