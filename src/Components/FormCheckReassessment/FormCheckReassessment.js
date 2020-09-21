import React from 'react';
import { Form } from 'react-bootstrap';

// functional component that creates a form of radio buttons for each item in the assessment
  // index of pageArr provides the index (0-9) of item on the individual page, while pageNum from props gives the page number: 
  // these are combined to provide an actual index of the item in the entire assessment,
  // and are passed into updateScore function to update the appropriate item in the rawScoreArr in the state of app.js
function FormCheckReassessment(props) {
  console.log(props)
  return (
    <div>
      {props.itemsArr.map((item, index) => (
        <div key={`item-${(item.itemIndex)}`} style={{ marginBottom: "40px" }}>
          <h6>{item.itemText}</h6>
          <Form.Check
            custom
            inline
            label="Strongly Agree"
            type="radio"
            id={`item-1-${(item.itemIndex)}`}
            name={`item${(item.itemIndex)}`}
            value={item.reverseScore ? 1 : 6}
            onChange={(event) => props.updateScore(event, item.itemIndex)}
            required
            feedback="You must select an option."
          />
          <Form.Check
            custom
            inline
            label="Agree"
            type="radio"
            id={`item-2-${(item.itemIndex)}`}
            name={`item${(item.itemIndex)}`}
            value={item.reverseScore ? 2 : 5}
            onChange={(event) => props.updateScore(event, item.itemIndex)}
            required
            feedback="You must select an option."
          />
          <Form.Check
            custom
            inline
            label="Somewhat Agree"
            type="radio"
            id={`item-3-${(item.itemIndex)}`}
            name={`item${(item.itemIndex)}`}
            value={item.reverseScore ? 3 : 4}
            onChange={(event) => props.updateScore(event, item.itemIndex)}
            required
            feedback="You must select an option."
          />
          <Form.Check
            custom
            inline
            label="Somewhat Disagree"
            type="radio"
            id={`item-4-${(item.itemIndex)}`}
            name={`item${(item.itemIndex)}`}
            value={item.reverseScore ? 4 : 3}
            onChange={(event) => props.updateScore(event, item.itemIndex)}
            required
            feedback="You must select an option."
          />
          <Form.Check
            custom
            inline
            label="Disagree"
            type="radio"
            id={`item-5-${(item.itemIndex)}`}
            name={`item${(item.itemIndex)}`}
            value={item.reverseScore ? 5 : 2}
            onChange={(event) => props.updateScore(event, item.itemIndex)}
            required
            feedback="You must select an option."
          />
          <Form.Check
            custom
            inline
            label="Strongly Disagree"
            type="radio"
            id={`item-6-${(item.itemIndex)}`}
            name={`item${(item.itemIndex)}`}
            value={item.reverseScore ? 6 : 1}
            onChange={(event) => props.updateScore(event, item.itemIndex)}
            required
            feedback="You must select an option."
          />
        </div>
      ))}
    </div>
  )
}

export default FormCheckReassessment;