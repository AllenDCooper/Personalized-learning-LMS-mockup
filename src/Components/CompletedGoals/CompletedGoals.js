import React from 'react';
import { Accordion, Spinner } from 'react-bootstrap';
import AccordionUnit from '../AccordionUnit/AccordionUnit';

const CompletedGoals = (props) => {

  return (
    props.completedGoalsArr.length > 0 ?
      <>
        {!this.state.spinnerOn ?
          <Accordion>
            {this.state.completedGoalsArr.map(item => (
              <AccordionUnit takenAssessment={this.state.takenAssessment} score={item} saveCompletedGoal={this.saveCompletedGoal} role={this.props.roleSelected} />
            ))}
          </Accordion>
          :
          <div>
            <Spinner animation="grow" role="status" variant="primary" style={{ marginLeft: "20px" }}>
              <span className="sr-only">Loading...</span>
            </Spinner>
            <span style={{ marginLeft: "10px" }}>Updating your goals...</span>
          </div>
        }
      </>
      :
      <p>You have not completed any goals.</p>
  )
}

export default CompletedGoals;