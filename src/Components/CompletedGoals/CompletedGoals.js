import React from 'react';
import { Accordion, Spinner } from 'react-bootstrap';
import AccordionUnit from '../AccordionUnit/AccordionUnit';

const CompletedGoals = (props) => {

  return (
    props.completedGoalsArr.length > 0 ?
      <>
        {!props.spinnerOn ?
          <Accordion>
            {props.completedGoalsArr.map(item => (
              <AccordionUnit setClickedLink={props.setClickedLink} takenAssessment={props.takenAssessment} score={item} saveCompletedGoal={props.saveCompletedGoal} updateScore={props.updateScore} submitScore={props.submitScore} role={props.role} />
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